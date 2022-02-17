import { useSearch } from 'hooks'

const Search = () => {
  const { query } = useSearch()

  return <p>{query}</p>
}

export default Search
