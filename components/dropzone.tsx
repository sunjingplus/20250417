"use client";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Document, Page, pdfjs } from "react-pdf";
import { FiZoomIn, FiZoomOut, FiRotateCw } from "react-icons/fi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { PDFDocument, degrees } from "pdf-lib";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Tooltip = ({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) => (
  <div className="relative group">
    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-3 py-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
      {text}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-black" />
    </div>
    {children}
  </div>
);

const Dropzone = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [scale, setScale] = useState(0.3);
  const [globalRotate, setGlobalRotate] = useState(0);
  const [pageRotations, setPageRotations] = useState<Record<number, number>>(
    {}
  );

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file?.type === "application/pdf") {
      setPdfFile(file);
      setPageRotations({});
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
  });

  const downloadFile = async () => {
    if (!pdfFile) return;
  
    const arrayBuffer = await pdfFile.arrayBuffer();
    const pdfDoc = await PDFDocument.load(arrayBuffer);
    const totalPages = pdfDoc.getPageCount();
  
    for (let i = 0; i < totalPages; i++) {
      const page = pdfDoc.getPage(i);
      const pageNumber = i + 1;
      const pageRotate = (pageRotations[pageNumber] || 0) + globalRotate;
      page.setRotation(degrees(pageRotate % 360));
    }
  
    const pdfBytes = await pdfDoc.save();
    const originalName = pdfFile.name.replace(/\.pdf$/i, "");
  
    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.]/g, "-"); // 防止文件名中含非法字符
    const newFileName = `${originalName}-${timestamp}.pdf`;
  
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = newFileName;
    link.click();
  };
  

  const rotateAll = () => {
    setGlobalRotate((prev) => (prev + 90) % 360);
  };

  const rotatePage = (pageNumber: number) => {
    setPageRotations((prev) => ({
      ...prev,
      [pageNumber]: ((prev[pageNumber] || 0) + 90) % 360,
    }));
  };

  const getTotalRotation = (pageNumber: number) => {
    return (globalRotate + (pageRotations[pageNumber] || 0)) % 360;
  };

  return (
    <div className="container   max-w-7xl flex flex-col items-center justify-center">
      {pdfFile ? (
        <>
          <div className="flex items-center justify-center w-full mb-6 px-4">
            <div className="flex gap-4">
              <button
                onClick={rotateAll}
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
              >
                Rotate All
              </button>
              <Tooltip text="Remove this PDF and select a new one">
                <button
                  onClick={() => setPdfFile(null)}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Remove PDF
                </button>
              </Tooltip>
            </div>
            <div className="flex gap-2">
              <Tooltip text="Zoom In">
                <button
                  onClick={() => setScale((prev) => Math.min(prev + 0.1, 3))}
                  className="text-xl text-gray-700 hover:text-black ml-3 p-3 bg-white rounded-full shadow-md"
                >
                  <FiZoomIn />
                </button>
              </Tooltip>
              <Tooltip text="Zoom Out">
                <button
                  onClick={() => setScale((prev) => Math.max(prev - 0.1, 0.1))}
                  className="text-xl text-gray-700 hover:text-black p-3 bg-white rounded-full shadow-md"
                >
                  <FiZoomOut />
                </button>
              </Tooltip>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-center gap-4">
            <Document
              file={pdfFile}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              className="flex flex-wrap justify-center gap-4 w-full"
              loading={<div className="text-center py-8">加载PDF中...</div>}
            >
              {Array.from({ length: numPages }, (_, index) => {
                const pageNumber = index + 1;
                return (
                  <div
                    key={`page_${pageNumber}`}
                    className="rounded-md overflow-hidden flex flex-col items-center justify-center relative group"
                    style={{ width: "fit-content" }}
                  >
                    <div className="relative">
                      <Page
                        onClick={() => rotatePage(pageNumber)}
                        pageNumber={pageNumber}
                        scale={scale}
                        rotate={getTotalRotation(pageNumber)}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        loading={
                          <div className="flex items-center justify-center w-[250px] h-[300px] bg-gray-100">
                            Loading...
                          </div>
                        }
                      />
                      <button
                        onClick={() => rotatePage(pageNumber)}
                        className="absolute top-2 right-2 p-2 bg-orange-500 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                        title="Rotate this page"
                      >
                        <FiRotateCw className="text-white" />
                      </button>
                    </div>
                    <div className="p-2 text-center text-sm text-gray-500">
                      {pageNumber}
                    </div>
                  </div>
                );
              })}
            </Document>
          </div>

          <div className="mt-6">
            <Tooltip text="Split and download PDF">
              <button
                onClick={downloadFile}
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded"
              >
                Download PDF
              </button>
            </Tooltip>
          </div>
        </>
      ) : (
        <div
          {...getRootProps()}
          className={`w-[310px] h-[380px] flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12 text-center cursor-pointer  bg-white ${
            isDragActive
              ? "border-gray-500 "
              : "border-gray-300 "
          }`}
        >
          <input {...getInputProps()} />
          <AiOutlineCloudUpload  size="35"/>
          <p className="text-gray-600">Click to upload or drag and drop</p>
        </div>
      )}
    </div>
  );
};

export default Dropzone;
