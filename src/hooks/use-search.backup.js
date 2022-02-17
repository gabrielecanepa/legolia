import { useEffect, useState } from 'react'
import { useSearchBox } from 'react-instantsearch-hooks'

/**
 * Hook to retrieve and edit the search state.
 */
const useSearch = (initialQuery = '', isExpanded = false, isOpen = false) => {
  const [expanded, setExpanded] = useState(isExpanded)
  const [open, setOpen] = useState(isOpen)
  const { refine, query } = useSearchBox()

  useEffect(() => {
    refine(initialQuery || query)
  }, [initialQuery, query, refine])

  return { expanded, open, query, refine, setExpanded, setOpen }
}

export default useSearch
