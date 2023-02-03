import styled from 'styled-components';

export const StyledButton = styled.button<{ primary?: boolean }>`
  background: ${({ primary }) => (primary ? 'palevioletred' : 'white')};
  color: ${({ primary }) => (primary ? 'white' : 'palevioletred')};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
