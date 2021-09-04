import { map } from "jquery";
import Modal from "react-modal";

export const ViewModal = ({ isView, setView, view }) => {
  return (
    <Modal
      isOpen={isView}
      onRequestClose={() => setView(false)}
      shouldCloseOnOverlayClick={false}
      style={{
        overlay: {
          background: "light",
          width: "50%",
          left: "25%",
          height: "70%",
          marginTop: "3cm",
        },
        content: {
          backgroundColor: "",
        },
      }}
    >
      <table className="table table-info table-hovered">
        {view.map((v) => (
          <thead>
            <tr>
              <th>Customer Name</th>
              <td>{v.customerName}</td>
            </tr>
            <tr>
              <th>Mobile #</th>
              <td>{v.mobileNo}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{v.address}</td>
            </tr>
            <tr>
              <th>Time</th>
              <td>{v.time}</td>
            </tr>
            <tr>
              <th>Total Bill</th>
              <td>{v.totalBill}</td>
            </tr>
          </thead>
        ))}
      </table>
      <button
        className="btn btn-lg btn-primary align-center"
        onClick={() => setView(false)}
      >
        {" "}
        Close
      </button>
    </Modal>
  );
};
