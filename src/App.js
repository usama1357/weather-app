import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
