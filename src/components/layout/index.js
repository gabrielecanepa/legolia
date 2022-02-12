import Fonts from './fonts'
import Head from './head'
import Navbar from './navbar'
import Style from './style'

const Layout = ({ children }) => (
  <>
    <Head />
    <Fonts />
    <Style />
    <Navbar />
    {children}
  </>
)

export default Layout
