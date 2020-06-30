import React from "react";
import api from "./services/config";

// Components
import Header from "./components/Header";
// Pages
import Main from "./pages/main"

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default App;
