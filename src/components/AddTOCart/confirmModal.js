import Modal from "react-modal";
import { Form } from "reactstrap";
import { TextInput } from "../common/textInput";

Modal.setAppElement("#root");
export const ConfirmModal = ({
  confirm,
  setConfirm,
  sellProduct,
  onSave,
  onChange,
  error,
  customer,
  saving,
  totalprice,
  settotalprice,
}) => {
  debugger;
  var n = sellProduct.length;
  var totalPrice = 0;
  return (
    <Modal
      isOpen={confirm}
      onRequestClose={() => setConfirm(false)}
      shouldCloseOnOverlayClick={false}
      style={{
        overlay: {
          background: "light",
          width: "80%",
          left: "10%",
        },
        content: {
          backgroundColor: "#635d5c",
        },
      }}
    >
      <div className="row">
        <div className="text-light  font-size-24 font-weight-bold  col-sm-7 ">
          <Form onSubmit={onSave} className="m-5">
            <TextInput
              type="text"
              label="Name"
              name="customerName"
              value={customer.customerName}
              placeHolder="Name Of Customer"
              onChange={onChange}
              error={error.customerName}
              LbClass="col-sm-2 col-form-label"
              inputClass="col-sm-7"
            />
            <TextInput
              type="text"
              label="Address"
              name="address"
              value={customer.address}
              placeHolder="Color"
              error={error.address}
              onChange={onChange}
              LbClass="col-sm-2 col-form-label"
              inputClass="col-sm-7"
            />
            <TextInput
              type="text"
              label="Mobile"
              name="mobileNo"
              value={customer.mobileNo}
              placeHolder="Name Of Company"
              error={error.mobileNo}
              onChange={onChange}
              LbClass="col-sm-2 col-form-label"
              inputClass="col-sm-7"
            />

            <div className="row container my-5">
              <button
                type="submit"
                disabled={saving}
                className="btn btn-lg btn-primary my-5 col-sm-4"
              >
                {saving ? "Saving..." : "Save"}
              </button>
            </div>
          </Form>
        </div>
        <div className="col-sm-5 ">
          <table className="table table-bordered  bg-white col-sm-11 mt-5">
            <thead>
              <tr>
                <th scope="col">Discription</th>
                <th scope="col">Rate</th>
                <th scope="col">QTY</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            {sellProduct ? (
              sellProduct.map((sp) => {
                n = n - 1;
                totalPrice += sp.total;
                settotalprice(totalPrice);
                return (
                  <tbody>
                    {n >= 0 ? (
                      <tr>
                        <td>{sp.name}</td>
                        <td>{sp.price}</td>
                        <td>{sp.sellNoOfItems}</td>
                        <td>{sp.total}</td>
                      </tr>
                    ) : (
                      <tr>
                        <td>Total</td>
                        <td>Total</td>
                      </tr>
                    )}
                  </tbody>
                );
              })
            ) : (
              <tr>
                <td>no record found</td>
              </tr>
            )}
            {n === 0 && (
              <tr>
                <th colSpan="3">Total</th>
                <th>{totalprice}</th>
              </tr>
            )}
          </table>
        </div>
        <div className="row container flex-row-reverse">
          <button
            className="btn btn-lg bg-warning col-sm-2 "
            onClick={() => setConfirm(false)}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};
