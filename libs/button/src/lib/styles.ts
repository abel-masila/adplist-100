import styled from 'styled-components';

export const StyledButton = styled.button<{
  primary?: boolean;
  isLink?: boolean;
}>`
  background: ${({ primary }) => (primary ? 'palevioletred' : 'white')};
  color: ${({ primary }) => (primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${({ isLink }) => (isLink ? 'none' : '2px solid palevioletred;')};
  border-radius: ${({ isLink }) => (isLink ? '0' : '3px')};
  cursor: ${({ isLink }) => (isLink ? 'pointer' : 'inherit')};
  text-decoration: ${({ isLink }) => (isLink ? 'underline' : 'none')};
`;
