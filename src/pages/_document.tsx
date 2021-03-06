import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () => {
                return originalRenderPage({
                    enhanceApp: App => {
                        return props => {
                        return sheet.collectStyles(<App {...props} />);
                        };
                    },
                });
            };

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                // Convert styles to array as per https://github.com/vercel/next.js/issues/36008
                styles: [
                    <>
                        { initialProps.styles }
                        { sheet.getStyleElement() }
                    </>
                ],
            };
        } finally {
            sheet.seal();
        }
    }
}
