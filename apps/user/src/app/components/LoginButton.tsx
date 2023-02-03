import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@kikao/button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()} title="Log In" />;
};

export default LoginButton;
