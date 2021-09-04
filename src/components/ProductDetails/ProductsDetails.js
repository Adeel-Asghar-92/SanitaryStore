import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteProduct, loadProduct } from "../../redux/action/ProductAction";
import { ProductList } from "./ProductList";

const ProductsDetails = (props) => {
  debugger;
  useEffect(() => {
    debugger;
    if (props.product.length === 0) {
      props.action.loadProduct();

      debugger;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.product]);

  const deleteProduct = (id) => {
    debugger;
    props.action.deleteProduct(id);
  };
  return (
    <div>
      <ProductList deleted={deleteProduct} products={props.product} />
    </div>
  );
};

const mapStateToProps = (state) => {
  debugger;
  return {
    product: state.ProductReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    action: {
      deleteProduct: bindActionCreators(deleteProduct, dispatch),
      loadProduct: bindActionCreators(loadProduct, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsDetails);
