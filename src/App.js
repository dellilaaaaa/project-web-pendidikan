import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Routing from "./router/Routing";
function App() {
  return (
    <Router>
      <div className="App">
        <Routing />
      </div>
    </Router>
  );
}

export default App;
