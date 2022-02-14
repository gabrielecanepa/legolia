import { useSearchBox } from 'react-instantsearch-hooks'

export const SearchBox = props => {
  const { query, refine, isSearchStalled } = useSearchBox(props)
  const [inputValue, setInputValue] = useState(query)
  const inputRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    event.stopPropagation()

    if (inputRef.current) {
      inputRef.current.blur()
    }
  }

  function handleReset(event) {
    event.preventDefault()
    event.stopPropagation()

    setInputValue('')

    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Track when the value coming from the React state changes to synchronize
  // it with InstantSearch.
  useEffect(() => {
    if (query !== inputValue) {
      refine(inputValue)
    }
  }, [inputValue, refine])

  // Track when the InstantSearch query changes to synchronize it with
  // the React state.
  useEffect(() => {
    // Bypass the state update if the input is focused to avoid concurrent
    // updates when typing.
    if (document.activeElement !== inputRef.current && query !== inputValue) {
      setInputValue(query)
    }
  }, [query])

  return (
    <div className="ais-SearchBox">
      <form action="" className="ais-SearchBox-form" noValidate onReset={handleReset} onSubmit={handleSubmit}>
        <input
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className="ais-SearchBox-input"
          maxLength={512}
          onChange={event => setInputValue(event.currentTarget.value)}
          placeholder={props.placeholder}
          ref={inputRef}
          spellCheck={false}
          type="search"
          value={inputValue}
        />
      </form>
    </div>
  )
}
