import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@kikao/button';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(user, isAuthenticated, isLoading);

  return isAuthenticated ? (
    <div>
      <img src={user?.picture} alt={user?.name} />
      <h2>{user?.name}</h2>
      <p>{user?.email}</p>
    </div>
  ) : null;
}

export default App;
