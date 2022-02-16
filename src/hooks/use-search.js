import { useEffect, useState } from 'react'
import { useSearchBox } from 'react-instantsearch-hooks'

/**
 * Hook to retrieve and edit the search state.
 */
const useSearch = (initialQuery = '', isOpen = false) => {
  const [open, setOpen] = useState(isOpen)
  const { refine, query } = useSearchBox()

  useEffect(() => {
    refine(initialQuery)
  }, [initialQuery, refine])

  return { open, query, refine, setOpen }
}

export default useSearch
