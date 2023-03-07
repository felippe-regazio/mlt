import styled from '@emotion/styled';

const TileboxWrapper = styled.article`
  display: flex;
  align-items: center;
  padding: 16px;
  border: solid 1px #ccc;
  border-radius: 8px;  
  margin-bottom: 16px;
  justify-content: space-between;

  > span:first-of-type, label {
    display: flex;
    gap: 8px;
    cursor: pointer;
    align-items: center;
    margin: 0;

    input {
      margin: 0;
    }
  }
  
  p {
    margin: 0;
  }
`;

export const Tilebox: React.FC<React.PropsWithChildren> = ({ children }) => {  
  return(
    <TileboxWrapper>
      { children }
    </TileboxWrapper>
  )
}
