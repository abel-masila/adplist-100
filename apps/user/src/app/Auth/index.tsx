import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@kikao/button';
import { useNavigate } from 'react-router-dom';
import * as Styled from './styles';

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
    <Styled.Wrapper>
      <Styled.Login>
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
      </Styled.Login>
    </Styled.Wrapper>
  );
};

export default Auth;
