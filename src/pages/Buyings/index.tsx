import styled from "@emotion/styled";
import useLoggedUser from "../../hooks/useLoggedUser";
import { Navigate } from "react-router-dom";
import { DefaultLayout } from "../../layouts/Default";
import { useEffect, useState } from "react";
import { API } from "../../api/API";
import { Tilebox } from "../../components/Tilebox/Tilebox";
import { dateParagraph } from "../../utils/utils";

const BuyingsWrapper = styled.div`
  padding: 80px 0;

  .loading {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50vh;
  }

  .buyings {
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

export default function Buyings() {
  const [ loggedUser ] = useLoggedUser();
  const [ buyings, setBuyings ]: any = useState([]);

  useEffect(() => {
    API.get('/buyings')
      .then((response: any) => {
        setBuyings(response.data)
      })
      .catch(console.error);
  }, []);

  if (loggedUser.loading || !loggedUser.retrievered) {
    return (
      <DefaultLayout>
        <BuyingsWrapper>
          <div className="loading">
            Carregando...
          </div>
        </BuyingsWrapper>
      </DefaultLayout>
    )
  }

  if (!loggedUser.loading && !loggedUser.logged) {
    return <Navigate to="/" />;
  }

  return(
    <DefaultLayout>
      <BuyingsWrapper>
        <div className="buyings">
          <h1>Compras</h1>

          {!!buyings && buyings.map((buying: any) => (
            <Tilebox>
              <div>
                <p><strong>{ buying.description }</strong></p>
                <p><span style={{ textTransform: 'capitalize' }}>{buying.status}</span> - {dateParagraph(new Date(buying.date_created))}</p>
              </div>
            </Tilebox>
          ))}

          {!buyings && 
            <p>Nenhuma compra efetuada</p>
          }
        </div>
      </BuyingsWrapper>
    </DefaultLayout>
  )
}