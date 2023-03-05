import { useSelector, useDispatch } from 'react-redux';
import { setLoggedUser as setLoggedUserOnStore } from '../store'

const useLoggedUser = () => {
  const dispatch = useDispatch();
  const loggedUser: any = useSelector((state: any) => state.loggedUser);
  const setLoggedUser: any = (data: any) => dispatch(setLoggedUserOnStore(data)); 

  return [ loggedUser, setLoggedUser ];
}

export default useLoggedUser;