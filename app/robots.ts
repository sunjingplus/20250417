export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/app/'], 
      },
    ],
    sitemap: '/sitemap.xml',
    host: process.env.NEXT_PUBLIC_API_URL,
  };
}