import Highlight from './highlight'
import algolia from 'config/algolia'
import styled from 'styled-components'
import { Configure, Index } from 'react-instantsearch-hooks'
import { Image, Link } from 'components'
import { useCallback, useHits, useSearch } from 'hooks'

const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: var(--bg);
  padding: 0 2.8rem 0.6rem;
  box-shadow: 0px 2px 2px rgb(0 0 0 / 10%);
  border-radius: 0 0 1.25rem 1.25rem;
`

const QSHits = styled(({ setQuery, setOpen, ...props }) => {
  const { hits } = useHits()

  const onHitClick = useCallback(
    hit => () => {
      setQuery(hit.query)
      setOpen(false)
    },
    [setOpen, setQuery]
  )

  return (
    <div {...props}>
      <ul>
        {hits.map(hit => (
          <li key={hit.objectID}>
            <Link onClick={onHitClick(hit)} to={`/search?q=${hit.query}`}>
              <Highlight attribute="query" hit={hit}>
                {hit.query}
              </Highlight>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
})`
  li {
    padding: 0.2em 0;
  }
  ${Link} {
    color: var(--fg);
  }
`

const ProductsHits = styled(props => {
  const { hits } = useHits()

  return (
    <div {...props}>
      {hits.map(hit => (
        <div key={hit.objectID}>
          <Link to="/">
            <Image alt="" src={hit.image} />
          </Link>
          <Link to="/">
            <Highlight attribute="name" hit={hit}>
              {hit.name}
            </Highlight>
          </Link>
        </div>
      ))}
    </div>
  )
})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1.2rem;

  ${Link}:first-child {
    display: block;
  }
  ${Image} {
    border: 1px solid var(--border) !important;
  }
`

const Dropdown = props => {
  const { setQuery, setOpen } = useSearch()

  return (
    <Wrapper {...props}>
      <Index indexName={algolia.indexNameQS}>
        <Configure hitsPerPage={10} />
        <QSHits setOpen={setOpen} setQuery={setQuery} />
      </Index>
      <ProductsHits />
    </Wrapper>
  )
}

export default Dropdown
