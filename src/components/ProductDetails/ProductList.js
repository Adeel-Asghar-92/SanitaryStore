import { NavLink } from "react-router-dom";

export const ProductList = ({ deleted, products }) => {
  debugger;
  return (
    <div className="container">
      <h1 className="text-white">Details</h1>
      <table className="table table-dark table-hover text-center">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Company</th>
            <th scope="col">Size</th>
            <th scope="col">Color</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <NavLink
                  className="nav-link text-primary"
                  to={`/productinfo/${product.id}`}
                >
                  <h5>{product.name}</h5>
                </NavLink>
              </td>
              <td>{product.company}</td>
              <td>{product.size}</td>
              <td>
                <button
                  className="btn btn-md text-white"
                  style={{ backgroundColor: product.color }}
                >
                  {product.color}
                </button>
              </td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <NavLink
                  className="m-1 btn btn-warning"
                  to={`/detail/${product.id}`}
                >
                  Edit
                </NavLink>
                <button
                  onClick={() => deleted(product.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
