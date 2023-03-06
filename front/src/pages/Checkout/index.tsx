import styled from "@emotion/styled";
import useLoggedUser from "../../hooks/useLoggedUser";
import { Navigate } from "react-router-dom";
import { DefaultLayout } from "../../layouts/Default";

const CheckoutWrapper = styled.div`
  padding: 80px 0;

  .loading {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
  }

  .checkout {
    width: 100%;
    max-width: 760px;
    padding: 16px;
    border-radius: 8px;
    background-color: #fff;
    margin: 0 auto;

    h1 {
      font-size: 24px;
      font-weight: 600;
      text-align: left;      
    }
  }
`;

export default function Product() {
  const [ loggedUser ] = useLoggedUser();

  if (loggedUser.loading || !loggedUser.retrievered) {
    return (
      <DefaultLayout>
        <CheckoutWrapper>
          <div className="loading">
            Carregando...
          </div>
        </CheckoutWrapper>
      </DefaultLayout>
    )
  }

  if (!loggedUser.loading && !loggedUser.logged) {
    return <Navigate to="/" />;
  }

  return(
    <DefaultLayout>
      <CheckoutWrapper>
        
        <div className="checkout">
          <h1>Como você prefere pagar?</h1>
        </div>
      </CheckoutWrapper>
    </DefaultLayout>
  )
}