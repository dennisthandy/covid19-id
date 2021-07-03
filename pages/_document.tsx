/* eslint-disable @next/next/no-css-tags */
import React, { ReactElement } from 'react'
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="/node_modules/reveal.js/dist/reveal.css"
          />
          <link
            rel="stylesheet"
            href="/node_modules/reveal.js/dist/theme/black.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
