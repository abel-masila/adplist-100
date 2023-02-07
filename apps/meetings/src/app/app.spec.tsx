import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => '<div>{children}</div>',
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
