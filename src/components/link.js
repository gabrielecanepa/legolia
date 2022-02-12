import NextLink from 'next/link'
import styled from 'styled-components'

const Link = ({ as, href = '/' }) => <NextLink as={as} href={href} passHref />

export default styled(Link)`
  color: #0075e0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40a9ff;
  }
  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`
