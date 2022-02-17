import Dropdown from './dropdown'
import SearchBox from './searchbox'
import styled from 'styled-components'
import { Configure } from 'react-instantsearch-hooks'
import { useCallback, useClickOut, useMemo, useRef, useSearch } from 'hooks'

const SearchContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`

const Search = props => {
  const searchRef = useRef(null)
  const { query, setExpanded, open, setOpen, isSearchPage } = useSearch()

  const isOpen = useMemo(() => !isSearchPage && open, [isSearchPage, open])

  const onClickOut = useCallback(() => {
    setOpen(false)
    if (!query) setExpanded(false)
  }, [query, setExpanded, setOpen])

  useClickOut(searchRef, onClickOut)

  return (
    <>
      <Configure hitsPerPage={8} />
      <SearchContainer ref={searchRef} {...props}>
        <SearchBox open={isOpen} />
        {isOpen && <Dropdown />}
      </SearchContainer>
    </>
  )
}

export default Search
