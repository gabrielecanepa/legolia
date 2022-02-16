import { useEffect, useSearch } from 'hooks'

const Search = () => {
  const { refine, query, setOpen } = useSearch()

  useEffect(() => {
    setOpen(true)
  }, [setOpen])

  return <p>{query}</p>
}

export default Search
