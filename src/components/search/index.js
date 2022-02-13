import styled from 'styled-components'
import { Button, Form, Input } from 'components'
import { Close, Magnifier } from 'assets/icons'
import { useCallback, useState } from 'react'
import { useFocus } from 'hooks'
import { useHotkeys } from 'react-hotkeys-hook'

const ButtonSearch = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgb(255, 255, 255);
`

const SearchButton = styled(props => (
  <ButtonSearch {...props}>
    <Magnifier />
  </ButtonSearch>
))`
  order: -1;
  z-index: 2;
  padding: 0.75rem;
`

const SearchClose = props => (
  <ButtonSearch {...props}>
    <Close />
  </ButtonSearch>
)

const SearchBox = styled(Form)`
  display: flex;
  align-items: center;
  position: relative;
  background-color: rgb(255, 255, 255);
  border-radius: 1.25rem;

  @media screen and (min-width: 601px) {
    width: calc(100% - 4rem);
  }
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

const Search = ({ open, value, ...props }) => {
  const [isOpen, setIsOpen] = useState(!!open)
  const [query, setQuery] = useState(value)

  const [inputRef, setInputFocus] = useFocus()

  const onKeyDown = useCallback(e => {
    if (e.key === 'Escape') onClose()
  }, [])
  const onChange = useCallback(e => {
    setQuery(e.target.value)
  }, [])
  const onClose = useCallback(() => {
    setIsOpen(false)
    setQuery('')
  }, [])
  const onOpen = useCallback(() => {
    setIsOpen(true)
    setInputFocus(true)
  }, [])
  const onSubmit = useCallback(e => {
    e.preventDefault()
  }, [])

  useHotkeys('ctrl+k, cmd+k', onOpen)

  return isOpen ? (
    <SearchBox {...props} onSubmit={onSubmit}>
      <SearchInput
        autoComplete="off"
        autoFocus
        name="search"
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Search..."
        ref={inputRef}
        spellCheck="false"
        value={query}
      />
      <SearchButton title="Search" type="submit" />
      <SearchClose onClick={onClose} title="Hide search" />
    </SearchBox>
  ) : (
    <SearchButton {...props} onClick={onOpen} title="Open search" />
  )
}

export default Search
