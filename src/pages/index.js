import { useSearchBox } from 'hooks'

const Search = () => {
  const { query } = useSearchBox()

  return <p>{query}</p>
}

export default Search
