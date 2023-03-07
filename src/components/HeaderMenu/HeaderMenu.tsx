import styled from '@emotion/styled';
import useLoggedUser from '../../hooks/useLoggedUser';
import { Link } from 'react-router-dom';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { API } from '../../api/API';

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

  .logged-menu {
    display: flex;
    gap: 4px;

    a, [role=button] {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export function HeaderMenu() {
  const [ loggedUser ] = useLoggedUser();

  const signOut = () => {
    localStorage.removeItem('mlt');

    API.get('/logout')
      .then(() => (window.location.href = '/'))
      .catch(console.error);
  };

  return(
    <HeaderMenuWrapper>
      {!loggedUser.logged &&
        <>
          <Link to='/login'>Entrar</Link> | <Link to='/register'>Registrar</Link>
        </>
      }

      {loggedUser.logged &&
        <div className="logged-menu">
          <p>
            {loggedUser.data.firstName}
            <HiOutlineUserCircle />
          </p>

          <p role="button" onClick={signOut}>
            | Sair
          </p>

          <Link to="/buyings">
            <p> | Compras</p>
          </Link>
        </div>
      }
    </HeaderMenuWrapper>
  )
}
