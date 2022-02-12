import GlobalStyle from './global-style'
import Head from './head'

const Layout = ({ children, theme }) => (
  <>
    <Head theme={theme} />
    <GlobalStyle theme={theme} />
    {children}
  </>
)

export default Layout
