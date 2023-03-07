import styled from "@emotion/styled";
import useLoggedUser from "../../hooks/useLoggedUser";
import { Navigate } from "react-router-dom";
import { DefaultLayout } from "../../layouts/Default";
import { Accordion } from "../../components/Accordion/Accordion";
import { useState } from "react";
import { PaymentForm } from "../../components/PaymentForm/PaymentForm";

const CheckoutWrapper = styled.div`
  padding: 80px 16px;

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

    &__product-description {
      margin-bottom: 24px;
      p {
        margin: 0;
      }
    }
  }
`;

export default function Product() {
  const [ loggedUser ] = useLoggedUser();
  const [ createCardAccordionOpen, setCreateCardAccordionOpen ]: any = useState(true);
  
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

          <div className="checkout__product-description">
            <p>Você está comprando <strong>Produto super bacana e inovador que você quer muito</strong></p>
            <p>R$100,50</p>
          </div>

          <div className="checkout__product-payment">
            <Accordion 
              open={createCardAccordionOpen} 
              title={
                <label>
                  <input 
                    type="radio" 
                    name="payment_type" 
                    value="new_card"
                    defaultChecked
                    onChange={(e: any) => {
                      setCreateCardAccordionOpen(e.target.checked || null);
                    }}
                  />
                  
                  <p>Pagar com um novo cartão</p>
                </label>
              }
            >
              <PaymentForm/>
            </Accordion>
          </div>
        </div>
      </CheckoutWrapper>
    </DefaultLayout>
  )
}