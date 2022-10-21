import Nav from "./components/Nav";
import Routes from "./routes";
import './App.css'

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
