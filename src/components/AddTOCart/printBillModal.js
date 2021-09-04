import Modal from "react-modal";
import { Link } from "react-router-dom";

export const PrintBillModal = ({
  genratebill,
  setgenratebill,
  customerBill,
  productsInCart,
}) => {
  debugger;
  const Close = () => {
    window.location.reload();
  };
  const Print = () => {
    window.print();
  };
  return (
    <Modal
      isOpen={genratebill}
      onRequestClose={() => setgenratebill(false)}
      shouldCloseOnOverlayClick={false}
      style={{
        overlay: {
          background: "blue",
          width: "100%",
          left: "",
        },
        content: {
          backgroundColor: "white",
        },
      }}
    >
      <div>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th colSpan="7">
                <h2 className="">Azam Traders</h2>
              </th>
            </tr>{" "}
            <tr>
              <th>Customer Name</th>
              <td colSpan="2">{customerBill.customerName}</td>
              <th>Mobile #</th> <td>{customerBill.mobileNo}</td>
              <th>Date</th> <td>{new Date().toLocaleString()}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td colSpan="6">{customerBill.address}</td>
            </tr>
          </thead>
        </table>
        <table className="table table-bordered text-center">
          <tbody>
            <tr>
              <th>SR</th>
              <th>Discription</th>
              <th>Rate</th>
              <th>items</th>
              <th>Total</th>
            </tr>
            {productsInCart.map((p) => (
              <tr>
                <td>1</td>
                <td>
                  {p.name} {p.company} {p.size}
                </td>
                <td>{p.price}</td>
                <td>{p.sellNoOfItems}</td>
                <td>{p.total}</td>
              </tr>
            ))}
            {productsInCart.length < 7 && (
              <>
                <tr>
                  <td colSpan="5"></td>
                </tr>
                <tr>
                  <td colSpan="5"></td>
                </tr>
                <tr>
                  <td colSpan="5"></td>
                </tr>{" "}
                <tr>
                  <td colSpan="5"></td>
                </tr>
              </>
            )}
            <tr>
              <th colSpan="4">Total</th>
              <th>{customerBill.totalBill}</th>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <p>Sign:_______________________________________.</p>
        <button className="btn btn-warning" onClick={Print}>
          Print
        </button>
        {"  "}
        <Link className="btn btn-danger" to={"/"}>
          Closed
        </Link>
        {/* <button className="btn btn-warning" onClick={Close}>
          Closed
        </button> */}
      </div>
    </Modal>
  );
};
