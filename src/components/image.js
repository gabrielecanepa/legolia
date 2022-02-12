import NextImage from 'next/image'
import styled from 'styled-components'

const StyledImage = styled(NextImage)``

const Image = ({ src, ...props }) => <StyledImage src={src} {...props} />

export default Image
