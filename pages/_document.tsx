import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    static async getInitialProps(ctx : any) {
       const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
      }
    render() {
        return (
            <Html>
                <Head>
                    <meta property="custom" content="E-commerce cart" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <div id="modal-root"></div>
                </body>
                
            </Html>
        );
    }
}
