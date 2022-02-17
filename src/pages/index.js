import { useSearch } from 'hooks'

const Home = () => {
  const { query, expanded, open } = useSearch()

  return (
    <>
      <p>{`Query: ${query}`}</p>
      <p>{`Expanded: ${expanded}`}</p>
      <p>{`Open: ${open}`}</p>
    </>
  )
}

export default Home
