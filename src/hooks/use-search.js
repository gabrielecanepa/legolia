import { createGlobalState } from 'react-hooks-global-state'
import { useMemo } from 'react'
import { useRouter } from 'next/router'

const initialState = {
  query: '',
  expanded: false,
  open: false,
}

const { useGlobalState } = createGlobalState(initialState)

/**
 * Hook to retrieve and update the search state.
 */
const useSearch = () => {
  const router = useRouter()
  const [query, setQuery] = useGlobalState('query')
  const [expanded, setExpanded] = useGlobalState('expanded')
  const [open, setOpen] = useGlobalState('open')

  const isSearchPage = useMemo(() => router.pathname === '/search', [router.pathname])

  return {
    expanded,
    open,
    query,
    setExpanded,
    setOpen,
    setQuery,
    isSearchPage,
  }
}

export default useSearch
