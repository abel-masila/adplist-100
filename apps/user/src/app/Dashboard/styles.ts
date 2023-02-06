import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

export const Header = styled.div`
  background: #08f;
  height: 80px;
  padding: 5px;
  color: #eee;
  display: flex;
  justify-content: space-between;
`;

export const Main = styled.div`
  background: #ccc;
  border: 3px solid #eee;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
`;
export const SideBarContent = styled.div`
  width: 380px;
  background-color: #e7e9eb;
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;
