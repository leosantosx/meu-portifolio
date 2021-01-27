import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <Title>Quiz Dbz</Title>
}
