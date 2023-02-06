/* eslint-disable @typescript-eslint/no-explicit-any */
import { withAuthenticationRequired } from '@auth0/auth0-react';

export const ProtectedRoute = ({ component, ...args }: any) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

export default ProtectedRoute;
