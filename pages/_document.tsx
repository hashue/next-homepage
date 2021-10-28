import NextDocument, { Html, Head, Main, NextScript } from "next/document";

type Props = {};
class Document extends NextDocument<Props> {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" sizes="180x180" href="/images/logo.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Document;
