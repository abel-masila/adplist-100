import { Button } from '@kikao/button';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Button title="Here" />
      <Button title="Here" primary />
    </StyledApp>
  );
}

export default App;
