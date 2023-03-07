import styled from "@emotion/styled";
import { DefaultLayout } from "../../layouts/Default";
import ProductMockImage from '../../utils/product-mock.jpeg';
import { Link } from "react-router-dom";
import useLoggedUser from "../../hooks/useLoggedUser";
import { useEffect, useState } from "react";

const ProductWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 56px 16px;
  display: block;
  margin: 0 auto;

  .product-panel {
    border-radius: 8px;
    background-color: #fff;
    padding: 16px;
    display: flex;
    gap: 16px;
    justify-content: space-between;

    &__details {
      max-width: 760px;
      img {
        max-width: 100%;
        margin-bottom: 24px;
      }
    }

    &__basics {
      width: 100%;
      max-width: 400px;
      border: solid 1px #ccc;
      padding: 16px;
      border-radius: 8px;

      .product-state {
        color: #aaa;
        margin-bottom: 16px;
      }

      .product-title {
        margin-bottom: 16px;
        font-size: 22px;
        margin-bottom: 8px;
        margin-right: 28px;
        padding: 0;      
      }

      .product-price {
        font-size: 36px;
        font-weight: 300;        
      }

      .product-delivery {
        color: #00a650;
        font-weight: 600;
      }

      button {
        width: 100%;
        display: block;
        margin-top: 56px;
      }
    }

    @media screen and (max-width: 760px) {
      display: block;

      .product-panel__basics {
        max-width: unset;
      }
    }
  }
`;

export default function Product() {
  const [ loggedUser ] = useLoggedUser();
  const [ productLink, setProductLink ] = useState('/login');

  useEffect(() => {
    const ln = loggedUser.logged ? '/checkout' : '/login?redirect=/product';
    setProductLink(ln);
  }, [ loggedUser.logged ]);

  return(
    <DefaultLayout>      
      <ProductWrapper>
        <div className="product-panel">
          <div className="product-panel__details">
            <img src={ProductMockImage} alt="Imagem do produto" />

            <h3>Descrição</h3>

            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.              
            </p>
          </div>

          <div className="product-panel__basics">
            <p className="product-state">
              Novo
            </p>
            
            <h1 className="product-title">
              Produto super bacana e inovador que você quer muito
            </h1>
            
            <h2 className="product-price">
              R$100,50
            </h2>

            <p className="product-delivery">
              Frete grátis!
            </p>
            
            <Link to={productLink} style={{ textDecoration: 'none' }}>
              <button className="button-primary">
                Comprar agora
              </button>
            </Link>
          </div>
        </div>
      </ProductWrapper>
    </DefaultLayout>
  )
}