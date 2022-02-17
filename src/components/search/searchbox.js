import styled from 'styled-components'
import { Button, Form, Input } from 'components'
import { Close, Magnifier } from 'assets/icons'
import {
  useCallback,
  useEffect,
  useFocus,
  useHotkeys,
  useMemo,
  useSearch,
  useSearchBox,
} from 'hooks'

const SearchForm = styled(Form)`
  flex-grow: 1;
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--bg);
  border-radius: ${({ open }) => (open ? '1.25rem 1.25rem 0 0' : '1.25rem')};
`

const SearchInput = styled(Input)`
  width: calc(100% - 5rem);
  height: 2.5rem;
  border: none;
  color: rgb(44, 44, 44);
  padding: 0.625rem 0px 0.625rem 0.3125rem;
  line-height: 1.25rem;
  font-size: 1rem;
  box-sizing: border-box;
  outline-offset: -2px;
  overflow: visible;
  margin: 0;
  outline: none;

  @media screen and (min-width: 601px) {
    width: calc(100% - 2.5rem);
  }
  @media screen and (min-width: 901px) {
    font-size: 0.875rem;
  }
`

const ButtonSearch = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: var(--bg);
  z-index: 1;
`

const SearchButton = styled(props => (
  <ButtonSearch {...props}>
    <Magnifier />
  </ButtonSearch>
))`
  order: -1;
  z-index: 2;
  padding: 0.75rem;

  svg {
    width: 16px;
    height: 16px;
  }
`

const SearchClose = styled(props => (
  <ButtonSearch {...props}>
    <Close />
  </ButtonSearch>
))`
  padding: 0.75rem;
  right: 0.1875rem;

  svg {
    width: 12px;
    height: 12px;
  }
`

const SearchBox = ({ router, ...props }) => {
  const { query, setQuery, expanded, setExpanded, setOpen, isSearchPage } = useSearch()
  const { query: refinedQuery, refine } = useSearchBox()
  const [inputRef, setInputFocus] = useFocus()

  const closeTitle = useMemo(() => (query ? 'Clear search' : 'Hide search'), [query])

  const onOpen = useCallback(() => {
    setExpanded(true)
    setOpen(true)
    setInputFocus(true)
  }, [setExpanded, setOpen, setInputFocus])
  const onClose = useCallback(() => {
    setQuery('')
    if (query) {
      setInputFocus(true)
      return
    }
    setExpanded(false)
    setOpen(false)
  }, [setQuery, query, setExpanded, setOpen, setInputFocus])

  const onFocus = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  const onChange = useCallback(
    e => {
      setQuery(e.target.value)
    },
    [setQuery]
  )
  const onKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        if (query) {
          setOpen(false)
          setInputFocus(false)
          return
        }
        onClose()
      }
    },
    [query, onClose, setOpen, setInputFocus]
  )

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      e.stopPropagation()
      if (query) {
        setOpen(false)
        router.push(`/search?q=${query}`)
        setInputFocus(false)
      }
    },
    [query, router, setInputFocus, setOpen]
  )

  useHotkeys('ctrl+k, cmd+k', onOpen)
  useHotkeys('esc', onClose)

  useEffect(() => {
    if (query !== refinedQuery) refine(query)
  }, [refine, query, refinedQuery])

  return expanded ? (
    <SearchForm {...props} onSubmit={onSubmit}>
      <SearchInput
        autoComplete="off"
        autoFocus
        name="search"
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        placeholder="Search..."
        ref={inputRef}
        spellCheck={false}
        value={query}
      />
      <SearchButton disabled={isSearchPage} title="Search!" type="submit" />
      <SearchClose onClick={onClose} title={closeTitle} type="button" />
    </SearchForm>
  ) : (
    <SearchButton {...props} onClick={onOpen} title="Open search" />
  )
}

export default SearchBox
