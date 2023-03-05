import styled from '@emotion/styled';
import MeliImage from './meli.jpg';

const HeroWrapper = styled.div`
  height: calc(200px + 10vw);
  max-height: 300px;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export function Hero() {
  return(
    <HeroWrapper>
      <img src={MeliImage} alt="Imagem de um balcão na Meli Cidade e depois homens conversando sentados" />
    </HeroWrapper>
  )
}
