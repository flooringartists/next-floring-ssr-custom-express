import { Html, Head, Main, NextScript } from 'next/document';
const isProduction = process.env.NODE_ENV === "production";
export default function Document() {
  return (
    <Html lang='en'>
      <Head> 
 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}