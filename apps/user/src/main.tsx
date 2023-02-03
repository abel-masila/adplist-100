/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const { NX_AUTH0_CLIENT_ID, NX_AUTH0_DOMAIN } = process.env;

root.render(
  <Auth0Provider
    domain={NX_AUTH0_DOMAIN!}
    clientId={NX_AUTH0_CLIENT_ID!}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Auth0Provider>
);
