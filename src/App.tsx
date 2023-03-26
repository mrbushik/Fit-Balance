import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../src/Components/pages/main";
import NavBar from "./Components/navigation/navBar";
import AboutPage from "./Components/pages/aboutPage";
import Products from "./Components/pages/products";
import ProductItem from "./Components/pages/productItem";
import Faq from "./Components/pages/FAQ";
import ContactUs from "./Components/pages/contactUs";
import Footer from "./Components/navigation/footer";
import Refund from "./Components/pages/refund";
import Privacy from "./Components/pages/privacy";
import Cart from "./Components/pages/cart";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/refund" component={Refund} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/FAQ" component={Faq} />
        <Route path="/products/:Id" component={ProductItem} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
