import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { DefaultLayout } from "../../layouts/Default";

const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
  width: 100vw;
`;

export default function NotFound() {
  return(
    <DefaultLayout>      
      <NotFoundWrapper>
        <div>
          <h1>404</h1>
          <p>Página não encontrada</p>

          <Link to="/">Home</Link>
        </div>
      </NotFoundWrapper>
    </DefaultLayout>
  )
}