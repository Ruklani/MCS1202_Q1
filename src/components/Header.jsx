import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: #6aa0bb;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Header = () => {
  return <Container>FREE DELIVERY FOR ORDERS ABOVE RS 7500/=</Container>;
};

export default Header;
