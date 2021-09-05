import { Route, Switch } from "react-router-dom";
import NavBar from "./components/common/navBar";
import { Home } from "./components/homePage/home";
import "./components/homePage/home.css";
import ProductsDetails from "./components/ProductDetails/ProductsDetails";
import AddOREditProduct from "./components/Products/addOREditProduct";
import productInfo from "./components/ProductDetails/productInfo";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AddToCart from "./components/AddTOCart/AddTOCart";
import history from "./components/history/history";
import { useEffect, useState } from "react";

function App() {
  const [date, setdate] = useState();
  const [predate, setpredate] = useState("7/7/2021, 12:03:28 PM");

  useEffect(() => {
    setdate(new Date().toLocaleString());
  }, []);
  return date > predate ? (
    <div className="">
      {" "}
      <NavBar />
      <Route>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/newProduct" exact component={AddOREditProduct} />
          <Route path="/addTOCart" component={AddToCart} />
          <Route path="/productinfo/:id" component={productInfo} />
          <Route path="/detail/:id" exact component={AddOREditProduct} />
          <Route path="/details" exact component={ProductsDetails} />
          <Route path="/history" exact component={history} />

          <Route>Page not Found</Route>
        </Switch>
      </Route>
      <ToastContainer
        autoClose={2000}
        hideProgressBar
        className="Toastify__close-button"
      />
    </div>
  ) : (
    <Route>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route>
          <h1>Page not Found</h1>
        </Route>
      </Switch>
    </Route>
  );
}

export default App;
