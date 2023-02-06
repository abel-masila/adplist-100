import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@kikao/button';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  React.useEffect(() => {
    async function checkUser() {
      if (isAuthenticated) {
        await navigate('/dashboard');
      }
    }
    checkUser(); // called async checkUser()
  }, [isAuthenticated, loginWithRedirect, navigate]);

  return (
    <Button
      onClick={() =>
        loginWithRedirect({
          appState: {
            returnTo: '/dashboard',
          },
        })
      }
      title="Log In"
    />
  );
};

export default Auth;
