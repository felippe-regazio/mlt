import styled from '@emotion/styled';
import { asMoney } from '../../utils/utils';
import { Link } from 'react-router-dom';
import ProductMockImage from '../../utils/product-mock.jpeg';

type Product = {
  id: string,
  title: string,
  price: number
}

const ProductCardWrapper = styled.article`
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
  display: inline-flex;
  vertical-align: text-top;
  flex-direction: column;
  width: 250px;
  transition: 200ms;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    transition: 200ms;
    box-shadow: 0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);    
  }

  p {
    margin: 0;
  }

  .product {
    &__image {
      img {
        width: 100%;
        max-width: 100%;
        display: block;
      }
    }

    &__price {
      color: #333;
      font-size: 24px;
      line-height: 1em;
      padding: 16px;
    }
    
    &__title {
      color: #666;
      padding: 16px;
      font-size: 14px;
      font-weight: 300;
      line-height: 1.3;
      padding-top: 0; 
    }
  }
`;

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return(
    <Link to="product" style={{ textDecoration: 'none' }}>
      <ProductCardWrapper>
        <div className="product__image">
          <img src={ProductMockImage} alt="Imagem fake para produto fake" />
        </div>

        <div className="product__price">
          <p>{asMoney(product.price)}</p>
        </div>

        <div className="product__title">
          <p>{product.title}</p>
        </div>
      </ProductCardWrapper>
    </Link>
  )
}
