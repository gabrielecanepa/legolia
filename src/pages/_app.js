import Layout from 'components/layout'
import algolia from 'config/algolia'
import algoliasearch from 'algoliasearch/lite'
import theme from 'theme'
import { InstantSearch } from 'react-instantsearch-hooks'
import { ThemeProvider } from 'styled-components'

const algoliaClient = algoliasearch(algolia.appId, algolia.apiKey)

const App = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <InstantSearch indexName={algolia.indexName} searchClient={algoliaClient}>
      <Layout theme={theme}>
        <Component {...pageProps} />
      </Layout>
    </InstantSearch>
  </ThemeProvider>
)

export default App
