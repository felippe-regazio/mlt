import styled from '@emotion/styled';
import useLoggedUser from '../../hooks/useLoggedUser';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { API } from "../../api/API";
import { Infobox } from '../Infobox/Infobox';

const PaymentFormWrapper = styled.div`
  .card-detail {
    display: flex;
    gap: 16px;
    .field {
      width: 100%;
    }
  }

  #form-checkout {
    display: flex;
    flex-direction: column;
  }

  .container {
    height: 18px;
    display: inline-block;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 2px;
    padding: 1px 2px;
  }

  #form-checkout__cardNumber,
  #form-checkout__expirationDate,
  #form-checkout__securityCode {
    line-height: normal;
    color: inherit;
    font: inherit;
    margin: 0;            
    width: 100%;
    appearance: none;
    height: 38px;
    padding: 6px 10px;
    background-color: #fff;
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    box-shadow: none;
    box-sizing: border-box;
    margin-bottom: 1.5rem;
  }

  progress {
    width: 100%;
  }
`;

export function PaymentForm() {
  const mp = (window as any).mp;
  const [ loggedUser ] = useLoggedUser();

  useEffect(() => {
    const cardForm = mp.cardForm({
      amount: "100.5",
      iframe: true,
      form: {
        id: "form-checkout",
        cardNumber: {
          id: "form-checkout__cardNumber",
          placeholder: "Número do cartão",
        },
        expirationDate: {
          id: "form-checkout__expirationDate",
          placeholder: "MM/YY",
        },
        securityCode: {
          id: "form-checkout__securityCode",
          placeholder: "Código de segurança",
        },
        cardholderName: {
          id: "form-checkout__cardholderName",
          placeholder: "Titular do cartão",
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Banco emissor",
        },
        installments: {
          id: "form-checkout__installments",
          placeholder: "Parcelas",
        },        
        identificationType: {
          id: "form-checkout__identificationType",
          placeholder: "Tipo de documento",
        },
        identificationNumber: {
          id: "form-checkout__identificationNumber",
          placeholder: "Número do documento",
        },
        cardholderEmail: {
          id: "form-checkout__cardholderEmail",
          placeholder: "E-mail",
        },
      },
      callbacks: {
        onFormMounted: (error: any) => {
          error && console.warn("Form Mounted handling error: ", error);
        },
        onSubmit: (event: any) => {
          event.preventDefault();
  
          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData();
  
          API.post('/checkout', {
            token,
            issuer_id,
            payment_method_id,
            transaction_amount: Number(amount),
            installments: Number(installments),
            description: "Produto super bacana e inovador que você quer muito",
            payer: {
              email,
              identification: {
                type: identificationType,
                number: identificationNumber,
              },
            },
          })
            .then((response: any) => {
              if (response.status !== 201) {
                toast.error(response.message);
              }

              window.location.href = '/success';
            })
            .catch(error => {
              toast.error(`Um erro inesperado ocorreu: ${error.message} - ${error.response?.data?.message}`);
            });
        },
        onFetching: () => {
          const progressBar = document.querySelector(".progress-bar") as HTMLProgressElement;
          progressBar.removeAttribute("value");
          return () => {
            progressBar.setAttribute("value", "0");
          };
        },
        onCardTokenReceived: (errorData: any, token: any) => {
          const errors: any = errorData ? Object.keys(errorData) : [];

          if (errors.length) {
            errors.forEach((i: any) => { toast.error(errorData[i].message) });
          }

          return token;
        }
      },
    });
  }, []); 

  return(
    <PaymentFormWrapper>
      <form id="form-checkout">
        <div id="form-checkout__cardNumber" className="container"></div>
        <div id="form-checkout__expirationDate" className="container"></div>
        <div id="form-checkout__securityCode" className="container"></div>
        
        <input 
          type="text" 
          id="form-checkout__cardholderName" 
          defaultValue={`${loggedUser?.data?.firstName} ${loggedUser?.data?.lastName}`} 
        />
        
        <input type="email" id="form-checkout__cardholderEmail" defaultValue={loggedUser?.data?.email}/>
        <select id="form-checkout__issuer"></select>
        <select id="form-checkout__installments"></select>
        <select id="form-checkout__identificationType"></select>
        <input type="text" id="form-checkout__identificationNumber" />
        <button className="button-primary" type="submit" id="form-checkout__submit">Pagar</button>
        <progress value="0" className="progress-bar">Carregando...</progress>
      </form> 

      <Infobox>
        <p>Dados de teste</p>
        <p>Cartão: 5031 4332 1540 6351</p>
        <p>Exp: 11/25</p>
        <p>CVV: 123</p>
        <p>CPF: 58956827079</p>
      </Infobox>
    </PaymentFormWrapper>
  )
}