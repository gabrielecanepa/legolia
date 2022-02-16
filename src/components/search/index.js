import Dropdown from './dropdown'
import SearchBox from './searchbox'
import styled from 'styled-components'
import { Configure } from 'react-instantsearch-hooks'
import { useCallback, useClickOut, useRef, useState } from 'hooks'

const SearchContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`

const Search = ({ open: initial }) => {
  const [expanded, setExpanded] = useState(!!initial)
  const [open, setOpen] = useState(!!initial)
  const [value, setValue] = useState('')
  const searchRef = useRef(null)

  const onClickOut = useCallback(() => {
    setOpen(false)
  }, [])

  useClickOut(searchRef, onClickOut)

  return (
    <>
      <Configure hitsPerPage={8} />
      <SearchContainer ref={searchRef}>
        <SearchBox
          expanded={expanded}
          open={open}
          setExpanded={setExpanded}
          setOpen={setOpen}
          setValue={setValue}
          value={value}
        />
        {open && <Dropdown searchRef={searchRef} setOpen={setOpen} setValue={setValue} />}
      </SearchContainer>
    </>
  )
}

export default Search
