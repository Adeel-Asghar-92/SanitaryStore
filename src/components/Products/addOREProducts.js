import "./newProduct.css";
export const NewProduct = () => {
  return (
    <div className="container topMargin ">
      <div className="row text-white ">
        <h2 className="col-sm-4 ">New Product</h2>
      </div>
      <hr className="bg-white " />
      <form className="text-white">
        <div className="form-group row">
          <label for="name" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name Of Product"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="Color" className="col-sm-2 col-form-label">
            Color
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="color"
              placeholder="Color"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="Company" className="col-sm-2 col-form-label">
            Company
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="Company"
              placeholder="Name Of Company"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="quantity" className="col-sm-2 col-form-label">
            Quantity
          </label>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control"
              id="Quantity"
              placeholder="Quantity"
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="image" className="col-sm-2 col-form-label">
            Image
          </label>
          <div className="col-sm-5">
            <input
              type="file"
              className="form-control"
              id="Image"
              placeholder="Choose File"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="form-group row align-items-right">
          <div className="col-sm-7 d-flex flex-row-reverse ">
            <button type="submit" className="btn btn-lg btn-dark ">
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
