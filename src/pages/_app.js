import Layout from 'components/layout'
import theme from 'theme'
import { ThemeProvider } from 'styled-components'

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Layout theme={theme}>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default App
