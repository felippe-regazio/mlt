import styled from '@emotion/styled';

export const Header = styled.header`
  min-height: 70px;
  background-color: #fff159;
  color: #00008b;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  padding: 0 16px;
  border-bottom: solid 1px #eee;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;

  p, a.logo {
    margin: 0;
    color: #00008b;
    font-size: 18px;
    font-family: sans-serif;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 425px) {
    display: block;
    padding: 16px;
  }
`;

