
import Routes from "./Routes";
import { API } from "./api/API";
import useLoggedUser from "./hooks/useLoggedUser";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [ loggedUser, setLoggedUser ] = useLoggedUser();

  if (!loggedUser.retrievered && !loggedUser.loading) { 
    setLoggedUser({ loading: true });

    API.get('/profile').then((response: any) => {
      setLoggedUser({
        loading: false,
        data: response?.data,
        logged: !!response?.data,
      })
    })
    .finally(() => {
      setLoggedUser({ 
        loading: false,
        retrievered: true
      });
    });    
  }

  return (
    <>
      { Routes }

      <ToastContainer />
    </>
  );
}