import { Switch, Route } from "react-router-dom";
import About from "../Components/About/About";
import Learning from "../Components/Learning/Learning";
import Login from "../Components/login/login";
import Contact from "../Components/Contact/Contact";
import Landing from "../Components/Home/Landing";
import Footer from "../Components/footer/footer";
import Navbar from "../Components/navbar/navbar";

function Routing() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/about">
        <Navbar />
        <About />
        <Footer />
      </Route>
      <Route path="/learning">
        <Navbar />
        <Learning />
        <Footer />
      </Route>
      <Route path="/login">
        <Navbar />
        <Login />
        <Footer />
      </Route>
      <Route path="/contact">
        <Navbar />
        <Contact />
        <Footer />
      </Route>
    </Switch>
  );
}
export default Routing;
