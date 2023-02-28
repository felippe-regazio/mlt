import Home from "./pages/Home/";
import NotFound from "./pages/404/";
import SignIn from "./pages/SignIn/";
import SignOut from "./pages/SignOut/";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signout" element={<SignOut />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}