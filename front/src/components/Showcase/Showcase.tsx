/**
 * To save time, we will use a JSON to simulate a list of
 * products that code being retrievered from the database
 */
import products from './products.json';
import styled from '@emotion/styled';
import { ProductCard } from '../ProductCard/ProductCard';

const ShowcaseWrapper = styled.div`
  padding: 16px;
  display: block;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;

  > p {
    text-align: center;
    box-sizing: border-box;
  }
`;

export function Showcase() {
  return(
    <ShowcaseWrapper>
      {Boolean(products.length) && products.map(() => (
        <ProductCard />
      ))}

      {!products.length &&
        <p>Nenhum produto disponível no momento...</p> 
      }
    </ShowcaseWrapper>
  )
}
