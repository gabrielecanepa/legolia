import Layout from 'components/layout'
import algolia from 'config/algolia'
import algoliasearch from 'algoliasearch/lite'
import theme from 'theme'
import { InstantSearch as InstantSearchProvider } from 'react-instantsearch-hooks'
import { ThemeProvider } from 'styled-components'

const algoliaClient = algoliasearch(algolia.appId, algolia.apiKey)

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <InstantSearchProvider indexName={algolia.indexName} searchClient={algoliaClient}>
      <Layout theme={theme}>
        <Component {...pageProps} />
      </Layout>
    </InstantSearchProvider>
  </ThemeProvider>
)

export default App
