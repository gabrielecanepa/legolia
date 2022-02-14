import NextLink from 'next/link'
import styled from 'styled-components'

const Link = ({ as, to = '/', children, ...props }) => (
  <NextLink as={as ?? to} href={to} passHref>
    <a {...props}>{children}</a>
  </NextLink>
)

export default styled(Link)`
  text-decoration: none;

  ${({ flex }) =>
    flex &&
    `
    display: flex;
  `}
  ${({ theme, variant }) =>
    variant &&
    ` 
      color: ${theme[variant]?.color};
  `}
`
