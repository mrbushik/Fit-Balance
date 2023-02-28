import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../src/Components/pages/main";
import NavBar from "./Components/navigation/navBar";
import AboutPage from "./Components/pages/aboutPage";
import Products from "./Components/pages/products";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/products" component={Products} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
