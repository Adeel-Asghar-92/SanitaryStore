import { Table } from "reactstrap";
import {} from "module";
export const ViewInfo = ({ product }) => {
  return (
    <div className="container">
      <div>
        <h1 className="text-light">Detail</h1>
      </div>
      <hr className="bg-light" />
      <div className="row">
        <Table className="col-sm-7 table-info table  table-bordered text-center  table-hover">
          <tbody>
            <tr>
              <th>Name </th>
              <td>{product.name}</td>
            </tr>
            <tr>
              <th>Company</th>
              <td>{product.company}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{product.color}</td>
            </tr>
            <tr>
              <th>Quantity</th>
              <td>{product.quantity}</td>
            </tr>
            <tr>
              <th>Size </th>
              <td>{product.size}</td>
            </tr>
            <tr>
              <th>Price </th>
              <td>{product.price}</td>
            </tr>
          </tbody>
        </Table>
        <img className="col-sm-4" src={product.image} alt="" />
      </div>
    </div>
  );
};
