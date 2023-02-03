import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider
    domain="dev-masila.us.auth0.com"
    clientId="trhClNpG22qnN8gObj0BqwQQEUvKsmWB"
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
