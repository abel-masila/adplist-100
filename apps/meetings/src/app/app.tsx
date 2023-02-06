/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import Meetings from './Meetings';
import Auth from './Auth';
import { ProtectedRoute } from '@kikao/protected-route';
import { Suspense } from 'react';
import { LoaderIcon } from '@kikao/loader';

export function App() {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: any) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  const { NX_AUTH0_CLIENT_ID, NX_AUTH0_DOMAIN } = process.env;

  return (
    <Auth0Provider
      domain={NX_AUTH0_DOMAIN!}
      clientId={NX_AUTH0_CLIENT_ID!}
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Suspense fallback={<LoaderIcon />}>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route
            path="/meetings"
            element={<ProtectedRoute component={Meetings} />}
          />
        </Routes>
      </Suspense>
    </Auth0Provider>
  );
}

export default App;
