import { Form } from "reactstrap";
import { TextInput } from "../common/textInput";

export const ProductForm = (props) => {
  const { product, FileOnChange, onChange, onSave, saving, error } = props;
  debugger;

  return (
    <div>
      <div className="row text-white ">
        {product.id === null ? (
          <h2 className="col-sm-11 ">New Product</h2>
        ) : (
          <h2 className="col-sm-11 ">Edit Product</h2>
        )}
        <div>
          <button className="btn btn-warning ">Back</button>
        </div>
      </div>
      <hr className="bg-white " />

      <Form
        onSubmit={onSave}
        className="text-light font-size-24 font-weight-bold container "
      >
        <TextInput
          type="text"
          name="name"
          label="Name"
          value={product.name}
          placeHolder="Name Of Product"
          onChange={onChange}
          error={error.name}
          LbClass="col-sm-2"
          inputClass="col-sm-7"
        />
        <TextInput
          type="text"
          label="Color"
          name="color"
          value={product.color}
          placeHolder="Color"
          error={error.color}
          onChange={onChange}
          LbClass="col-sm-2"
          inputClass="col-sm-7"
        />
        <TextInput
          type="text"
          label="Company"
          name="company"
          value={product.company}
          placeHolder="Name Of Company"
          error={error.company}
          onChange={onChange}
          LbClass="col-sm-2"
          inputClass="col-sm-7"
        />
        <TextInput
          type="text"
          label="Quantity"
          name="quantity"
          value={product.quantity}
          placeHolder="Quantity"
          error={error.quantity}
          onChange={onChange}
          LbClass="col-sm-2"
          inputClass="col-sm-7"
        />
        <TextInput
          type="text"
          label="Size"
          name="size"
          value={product.size}
          placeHolder="Size of Item in Length or Kg"
          error={error.size}
          onChange={onChange}
          LbClass="col-sm-2"
          inputClass="col-sm-7"
        />
        <TextInput
          type="text"
          label="Price"
          name="price"
          value={product.price}
          placeHolder="Price of Item"
          error={error.price}
          onChange={onChange}
          LbClass="col-sm-2"
          inputClass="col-sm-7"
        />
        <TextInput
          type="file"
          label="Image"
          name="image"
          placeHolder="Choose File"
          onChange={FileOnChange}
          LbClass="col-sm-2"
          inputClass="col-sm-7"
        />
        <button
          type="submit"
          disabled={saving}
          className="btn btn-lg btn-primary my-3"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </Form>
    </div>
  );
};
