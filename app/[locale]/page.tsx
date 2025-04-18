import Contact from "@/components/contact";
import {Footer, Header} from "@/components/layout";



export default function Main() {
  return (
        <>
             <Header/>
        <main className="grow">
            <Contact></Contact>
        </main>
             <Footer/>
    </>
  )
}
