import styled from "@emotion/styled";
import useLoggedUser from "../../hooks/useLoggedUser";
import { Navigate } from "react-router-dom";
import { DefaultLayout } from "../../layouts/Default";
import { Accordion } from "../../components/accordion/Accordion";
import { Tilebox } from "../../components/Tilebox/Tilebox";
import { Form } from "../../components/Form/Form";
import { useState } from "react";

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
        <Form>
          <div className="checkout">
            <h1>Como você prefere pagar?</h1>

            <div className="checkout__product-description">
              <p>Você está comprando <strong>Produto super bacana e inovador que você quer muito</strong></p>
              <p>R$1.000,00</p>
            </div>

            <div className="checkout__product-payment">
              <Accordion 
                open={createCardAccordionOpen} 
                title={
                  <label>
                    <input 
                      type="radio" 
                      name="payment_type" 
                      defaultChecked
                      onChange={(e: any) => { setCreateCardAccordionOpen(e.target.checked || null)}}
                    />
                    
                    <p>Pagar com um novo cartão</p>
                  </label>
                }
              >
                card config
              </Accordion>

              <Tilebox>
                <label>
                  <input 
                    type="radio"
                    name="payment_type" 
                    onChange={() => { setCreateCardAccordionOpen(false) }}
                  />
                  
                  <p>Cartão 444.333...</p>
                </label>

                <span>r</span>              
              </Tilebox>

              <Tilebox>
                <label>
                  <input 
                    type="radio"
                    name="payment_type" 
                    onChange={() => { setCreateCardAccordionOpen(false) }}
                  />
                  
                  <p>Pagar com Boleto</p>
                </label>

                <span>r</span>              
              </Tilebox>              
            </div>
          </div>
        </Form>
      </CheckoutWrapper>
    </DefaultLayout>
  )
}