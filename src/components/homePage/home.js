import addProd from "../../images/addProduct.png";
import historypic from "../../images/history.jfif";
import sellpic from "../../images/sell.jfif";
import detail from "../../images/d.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {
  History,
  LibraryAdd,
  RemoveRedEye,
  ShoppingCart,
} from "@material-ui/icons";
// import RemoveRedEye from "@material-ui/icons/AddShoppingCart";

export const Home = () => {
  return (
    <div className="container">
      <div className="card-deck  topMargin row">
        <div className="card  col-md-3">
          <img className="card-img-top" src={addProd} alt="" height="75%" />
          <div className="card-body">
            <h5 className="card-title text-center">
              {/* <Link className="nav-link active" to="/newProduct"> */}
              <Button variant="contained" color="primary" href="/newProduct">
                <span style={{ color: "white" }}>
                  <LibraryAdd />
                  &nbsp;&nbsp; New Product
                </span>
              </Button>
              {/* </Link> */}
            </h5>
          </div>
        </div>
        <div className="card col-md-3">
          <img className="card-img-top" src={sellpic} alt="" height="75%" />
          <div className="card-body">
            <h5 className="card-title text-center">
              <Button variant="contained" color="secondary" href="/addTOCart">
                <span style={{ color: "white" }}>
                  <ShoppingCart />
                  &nbsp;&nbsp; Sell Items
                </span>
              </Button>
            </h5>
          </div>
        </div>

        <div className="card col-md-3">
          <img className="card-img-top" src={detail} alt="" height="75%" />
          <div className="card-body">
            <h5 className="card-title text-center">
              <Button variant="contained" color="primary" href="/details">
                <span style={{ color: "white" }}>
                  <RemoveRedEye />
                  &nbsp; View Details
                </span>
              </Button>
              {/* <Link className="nav-link active" to="/details">
                View Details
              </Link> */}
            </h5>
          </div>
        </div>
        <div className="card col-md-3">
          <img className="card-img-top" src={historypic} alt="" />
          <div className="card-body mt-3">
            <h5 className="card-title text-center">
              <Button
                className=""
                variant="contained"
                color="default"
                href="/history"
              >
                <b style={{ color: "black" }}>
                  <History />
                  &nbsp; History
                </b>
              </Button>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
