import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@kikao/button';
import { LoaderIcon } from '@kikao/loader';
import * as Styled from './styles';

export function App() {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();

  if (isLoading) {
    return <LoaderIcon />;
  }

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
          <Styled.Img src={user?.picture} alt={user?.name} />
          <h2>Name:{user?.name}</h2>
          <p>EMail: {user?.email || 'N/A'}</p>
          <p>Nick Name: {user?.nickname}</p>
        </Styled.Content>
      </Styled.Main>
    </Styled.Container>
  ) : null;
}

export default App;
