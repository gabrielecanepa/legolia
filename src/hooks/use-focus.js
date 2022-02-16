import { useRef } from 'react'

/**
 * Hook to control the focus on the passed ref.
 */
const useFocus = () => {
  const htmlElRef = useRef(null)
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus()
  }

  return [htmlElRef, setFocus]
}

export default useFocus
