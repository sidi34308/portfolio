import Head from 'next/head';
import './globals.css'; // Adjust the path according to your project structure

export const metadata = {
  title: "sidi.code",
  description: "Sidi Chaikh portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags as needed */}
        {/* Import Google Fonts */}
        <link rel="icon" href=" " />

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" />
      </Head>
      <body>
        {children}

      </body>
    </html>
  );
}
