/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useAuth0 } from '@auth0/auth0-react';

import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import { Button } from '@kikao/button';
import { LoaderIcon } from '@kikao/loader';
import * as Styled from './styles';
import { useEffect } from 'react';

import { Meeting } from './components';

export function App() {
  const [client, initClient] = useDyteClient();
  const auth = sessionStorage.getItem('auth');

  const { isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <LoaderIcon />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    initClient({
      authToken: auth!,
      // set default values for user media
      defaults: {
        audio: false,
        video: true,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderAuthControls = () => {
    return isAuthenticated ? (
      <Button
        title="Logout"
        isLink={true}
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      />
    ) : (
      <Button title="Login" isLink={true} onClick={() => loginWithRedirect()} />
    );
  };

  return isAuthenticated ? (
    <DyteProvider value={client} fallback={undefined}>
      <Styled.Container>
        <Styled.Header>
          <h4>Dashboard</h4>
          {renderAuthControls()}
        </Styled.Header>
        <Styled.Main>
          <Styled.SideBarContent>
            <a href="/">Home</a>
          </Styled.SideBarContent>
          <Styled.Content>
            <Meeting />
          </Styled.Content>
        </Styled.Main>
      </Styled.Container>
    </DyteProvider>
  ) : null;
}

export default App;
