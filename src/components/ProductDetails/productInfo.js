/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { productInfoAction } from "../../redux/action/ProductAction";
import { ViewInfo } from "./viewInfo";

const ProductInfo = (props) => {
  debugger;
  useEffect(() => {
    const Id = parseInt(props.match.params.id);
    props.action.productInfoAction(Id);
  }, []);
  return (
    <div>
      <ViewInfo product={props.product} />
    </div>
  );
};
const mapStateToProps = (state) => {
  debugger;
  return {
    product: state.ProductInfoReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: {
      productInfoAction: bindActionCreators(productInfoAction, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
