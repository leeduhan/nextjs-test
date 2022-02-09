import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    /**
     ctx params
     pathname - 현재 pathname /user?type=normal page 접속 시에는 /user
     query - 현재 query를 object형태로 출력 /user?type=normal page 접속 시에는 {type: 'normal'}
     asPath - 전체 path /user?type=normal page 접속 시에는 /user?type=normal
     req - HTTP request object (server only)
     res - HTTP response object (server only)
     err - Error object if any error is encountered during the rendering
     */

    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
      })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } catch (error) {
      throw error
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html>
        <Head/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
