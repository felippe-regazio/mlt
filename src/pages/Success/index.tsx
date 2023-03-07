import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { DefaultLayout } from "../../layouts/Default";
import { AiFillCheckCircle } from 'react-icons/ai';

const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 80vh;
  width: 100vw;

  .illustration {
    svg {
      font-size: 80px;
      color: #00a650;
    }
  }
`;

export default function NotFound() {
  return(
    <DefaultLayout>      
      <NotFoundWrapper>
        <div>
          <span className="illustration">
            <AiFillCheckCircle/>
          </span>
          
          <p><strong>Compra efetuada com sucesso!</strong></p>

          <Link to="/">Home</Link>
        </div>
      </NotFoundWrapper>
    </DefaultLayout>
  )
}