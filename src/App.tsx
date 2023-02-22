import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Main from '../src/Components/pages/main'
import NavBar from "./Components/navigation/navBar";
import AboutPage from "./Components/pages/aboutPage";

function App() {
  return (
    <>
        <NavBar/>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
