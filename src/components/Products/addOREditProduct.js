import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { bindActionCreators } from "redux";
import { loadProduct, productSaved } from "../../redux/action/ProductAction";
import {
  GetProductByProductId,
  Validation,
} from "../../redux/manageProduct/ProductManager";
import { newProduct } from "./newProductProps";
import { ProductForm } from "./productForm";

// in this module we edit and add new product
const AddOREditProduct = (props) => {
  debugger;
  const [product, setProduct] = useState(props.product);
  const [error, setError] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    debugger;
    if (props.product.length === 0 || props.product.id === null) {
      props.actions.loadProduct();
    } else {
      setProduct(props.product);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.product]);

  const FileOnChange = (e) => {
    debugger;
    const { name } = e.target;
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProduct({
          ...product,
          [name]: reader.result,
        });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const OnChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setError({
      ...error,
      [name]: "",
    });

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const saveHandler = (e) => {
    e.preventDefault();
    debugger;
    const errors = Validation(product);
    if (Object.keys(errors).length === 0) {
      setSaving(true);
      props.actions.productSaved(product);

      setTimeout(Push, 3000);
    } else {
      setError(errors);
    }
  };
  const Push = () => {
    props.history.push("/details");
    toast.success("Saved Successfully!!!");
  };
  return (
    <div className="container">
      <ProductForm
        product={product}
        onChange={OnChange}
        onSave={saveHandler}
        saving={saving}
        error={error}
        FileOnChange={FileOnChange}
      />
    </div>
  );
};

const mapStateToProps = (state, ownprops) => {
  debugger;
  const id = parseInt(ownprops.match.params.id);
  const product =
    id && state.ProductReducer.length > 0
      ? GetProductByProductId(state.ProductReducer, id)
      : newProduct;
  return { product };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      productSaved: bindActionCreators(productSaved, dispatch),
      loadProduct: bindActionCreators(loadProduct, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOREditProduct);
