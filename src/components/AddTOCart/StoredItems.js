// import { Link } from "react-router-dom";
import {
  AddCircle,
  AddCircleOutlined,
  Add,
  AddShoppingCart,
  AddBox,
  Minimize,
  IndeterminateCheckBox,
  ShoppingBasket,
} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
export const StoredItems = ({
  products,
  DecrementHandler,
  IncrementHandler,
  AddTOCartHandler,
  sellHandler,
}) => {
  return (
    <div>
      <div className="d-flex m-2 flex-row-reverse">
        <Button
          variant="contained"
          color="default"
          onClick={sellHandler}
          className="btn btn-lg btn-warning "
        >
          <ShoppingBasket />
          &nbsp;&nbsp; <b>Sell Now!</b>
        </Button>
      </div>

      <table className="table table-dark table-bordered table-hover text-center">
        <thead>
          <tr className="  text-white row">
            <th className="col-sm-2" />
            <th className="col-sm-1">Name</th>
            <th className="col-sm-1">Company</th>
            <th className="col-sm-1">Size</th>
            <th className="col-sm-1">Item Left</th>
            <th className="col-sm-1">Price</th>
            <th className="col-sm-2">Quantity</th>
            <th className="col-sm-1">Total</th>
            <th className="col-sm-2">Action</th>
          </tr>
        </thead>
        {products.map((p) => {
          return (
            <tbody>
              <tr className="bg-info row">
                <td className=" col-sm-2 ">
                  <img src={p.image} alt="" height="100%" width="40%" />
                </td>
                <td className=" col-sm-1 ">{p.name}</td>
                <td className=" col-sm-1 ">{p.company}</td>
                <td className=" col-sm-1 ">{p.size}</td>
                <td className=" col-sm-1 ">{p.quantity}</td>
                <td className=" col-sm-1 ">{p.price}</td>
                <td className=" col-sm-2 ">
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={p.sellNoOfItems === 0}
                    onClick={() => DecrementHandler(p)}
                    className="btn btn-light mr-2"
                  >
                    <IndeterminateCheckBox />
                  </Button>

                  {p.sellNoOfItems}

                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={p.sellNoOfItems == p.quantity}
                    onClick={() => IncrementHandler(p)}
                    className="btn btn-light ml-2"
                  >
                    <AddBox />
                  </Button>
                </td>
                <td className=" col-sm-1 ">{p.total}</td>
                <td className=" col-sm-2 ">
                  <Button
                    variant="contained"
                    color="secondary"
                    disabled={p.sellNoOfItems === 0}
                    className="btn btn-success"
                    onClick={() => AddTOCartHandler(p)}
                  >
                    <AddShoppingCart />
                    Add To Cart
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      {/* <div className="card topMargin ">
        <div className="card-deck row ">
          <td className="card col-md-2">
            <img src={addProd} alt="" height="100%" />
          </td>
          <div className="col-md-10">
            <h5 className=" text-center">
              <Link className="nav-link active" to="/newProduct">
                New Product
              </Link>
            </h5>
          </div>
        </div>
      </div> */}
    </div>
  );
};
