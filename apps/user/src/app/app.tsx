import styled from 'styled-components';

import { Route, Routes, Link } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </StyledApp>
  );
}

export default App;
