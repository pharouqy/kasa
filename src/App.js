import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Routes  from "./routes";
//import { HashRouter } from "react-router-dom";
import "./App.css";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
