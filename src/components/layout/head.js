import NextHead from 'next/head'
import web from 'config/web'

const Head = () => (
  <NextHead>
    <title>{web.title}</title>
    <meta charSet="utf-8" />
    <meta content="initial-scale=1.0, width=device-width" name="viewport" />
    <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
    <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
    <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
    <link href="/site.webmanifest" rel="manifest" />
    {/* <link color={theme.primary} href="/safari-pinned-tab.svg" rel="mask-icon" /> */}
    <link color="#3561fa" href="/safari-pinned-tab.svg" rel="mask-icon" />
    <meta content="#ffffff" name="msapplication-TileColor" />
    <meta content="#ffffff" name="theme-color" />
  </NextHead>
)

export default Head
