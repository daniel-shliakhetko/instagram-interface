import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import "./styles/App.scss";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
