import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Main } from "../components/Main/Main";
import { HeaderMenu } from "../components/HeaderMenu/HeaderMenu";
import { Link } from "react-router-dom";

export const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header>
        <p><Link className="logo" to="/">Mercadinho Livre</Link></p>

        <HeaderMenu />
      </Header>

      <Main>
        { children }
      </Main>

      <Footer>
        <p>Some cool footer with useful information</p>
      </Footer>
    </>
  )
}