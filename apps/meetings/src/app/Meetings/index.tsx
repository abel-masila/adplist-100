/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useAuth0 } from '@auth0/auth0-react';

import { DyteProvider, useDyteClient } from '@dytesdk/react-web-core';
import { Button } from '@kikao/button';
import { LoaderIcon } from '@kikao/loader';
import * as Styled from './styles';
import { useEffect } from 'react';

import { Meeting } from './components';
import { Link, useParams } from 'react-router-dom';
import { joinExistingRoom } from '../../utils';

type Params = {
  id: string | undefined;
  room: string;
};

export function App() {
  const { id } = useParams<Params>();
  const [client, initClient] = useDyteClient();
  const auth = sessionStorage.getItem('auth');
  const roomName = sessionStorage.getItem('roomName');

  const {
    isAuthenticated,
    isLoading,
    logout,
    loginWithRedirect,
    getAccessTokenSilently,
  } = useAuth0();

  useEffect(() => {
    const checkSession = async () => {
      const token = await getAccessTokenSilently();

      if (!token)
        logout({ logoutParams: { returnTo: window.location.origin } });
    };

    const intervalId = setInterval(() => {
      checkSession();
    }, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, [getAccessTokenSilently, logout]);

  if (isLoading) {
    return <LoaderIcon />;
  }

  useEffect(() => {
    if (!auth && !roomName) {
      //creating a new participant
      joinExistingRoom(id!, 'Test');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    initClient({
      authToken: auth! || '',
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
          <h4>Kikao Meet</h4>
          {renderAuthControls()}
        </Styled.Header>
        <Styled.Main>
          <Styled.SideBarContent>
            <Link to="/dashboard">Home</Link>
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
