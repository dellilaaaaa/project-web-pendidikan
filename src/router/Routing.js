import { Switch, Route } from "react-router-dom";
import About from "../Components/About/About";
import Learning from "../Components/Learning/Learning";
import Login from "../Components/login/login";
import Contact from "../Components/Contact/Contact";
import Landing from "../Components/Home/Landing";
import Footer from "../Components/footer/footer";

function Routing() {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/learning">
        <Learning />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/contact">
        <Contact />
        <Footer />
      </Route>
    </Switch>
  );
}
export default Routing;
