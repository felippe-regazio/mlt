import styled from '@emotion/styled';
import useLoggedUser from '../../hooks/useLoggedUser';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi';

const HeaderMenuWrapper = styled.div`
  color: #444;
  
  a, p {
    color: #444;
    font-size: 14px;
    text-decoration: none;
  }

  p {
    display: flex;
    align-items: center;
    gap: 4px;

    svg {
      font-size: 24px;
    }
  }
`;

export function HeaderMenu() {
  const [ loggedUser ] = useLoggedUser();

  return(
    <HeaderMenuWrapper>
      {!loggedUser.logged &&
        <>
          <Link to='/login'>Entrar</Link> | <Link to='/register'>Registrar</Link>
        </>
      }

      {loggedUser.logged &&
        <>
          <p>
            {loggedUser.data.firstName}
            <HiOutlineUserCircle />
          </p>
        </>
      }
    </HeaderMenuWrapper>
  )
}
