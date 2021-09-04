import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  loadProduct,
  sellProductsAction,
  saveOrderAction,
  updatedItems,
} from "../../redux/action/ProductAction";
import { customerValidation } from "../../redux/manageProduct/ProductManager";
import { ConfirmModal } from "./confirmModal";
import { newCustomer } from "./newCustomer";
import { newOrder } from "./newOrder";
import { PrintBillModal } from "./printBillModal";
import { StoredItems } from "./StoredItems";

const AddToCart = (props) => {
  const [counter, setcounter] = useState(0);
  const [addToCart, setaddToCart] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const [customer, setCustomer] = useState(props.customer);
  const [error, setError] = useState({});
  const [saving, setSaving] = useState(false);
  const [genratebill, setgenratebill] = useState(false);
  const [bill, setBill] = useState(props.newOrder);
  const [totalprice, settotalprice] = useState(0);

  useEffect(() => {
    debugger;

    if (bill.noOfItems.length > 0) {
      props.action.saveOrder(bill);
      setTimeout(setgenratebill(true), 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bill]);

  useEffect(() => {
    debugger;
    if (props.products.length === 0) {
      props.action.loadProduct();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.products]);

  const DecrementHandler = (p) => {
    if (p.sellNoOfItems !== 0) {
      p.sellNoOfItems -= 1;
      p.total = p.sellNoOfItems * p.price;
      setcounter(p.total);
    } else {
      const products = addToCart.filter((p) => p.sellNoOfItems !== 0);
      addToCart.length = 0;
      setaddToCart(products);
    }
  };
  const IncrementHandler = (p) => {
    if (p.quantity > p.sellNoOfItems) {
      p.sellNoOfItems += 1;
      p.total = p.sellNoOfItems * p.price;
      setcounter(p.total);
    }
  };

  const AddTOCartHandler = (p) => {
    let updateCart = addToCart.find((Cp) => {
      return Cp.id === p.id;
    });
    if (updateCart !== undefined) {
      updateCart.total = p.total;
      updateCart.sellNoOfItems = p.sellNoOfItems;
    } else {
      setaddToCart([...addToCart, p]);
    }
  };

  const sellHandler = () => {
    debugger;
    props.action.sellProductsAction(addToCart);
    setConfirm(true);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value,
    });

    setError({
      ...error,
      [name]: "",
    });
  };

  const createBill = (customer, addToCart, totalprice) => {
    setBill({
      ...bill,
      customerName: customer.customerName,
      mobileNo: customer.mobileNo,
      address: customer.address,
      productId: addToCart.map((p) => {
        return p.id;
      }),
      noOfItems: addToCart.map((p) => {
        return p.sellNoOfItems;
      }),
      totalBill: totalprice,
      time: new Date().toLocaleString(),
    });
    removeItemsFromStore();
  };

  const removeItemsFromStore = () => {
    debugger;

    const UIs = addToCart.map((c) => {
      return {
        ...c,
        quantity: c.quantity - c.sellNoOfItems,
        // total: 0,
        // sellNoOfItems: 0,
      };
    });
    const UI = UIs.map((i) => {
      delete i.total;
      delete i.sellNoOfItems;
      return {
        ...i,
      };
    });
    props.action.updatedItems(UI);
  };
  const onSaveHandler = (e) => {
    e.preventDefault();
    const errors = customerValidation(customer);
    if (Object.keys(errors).length === 0) {
      setSaving(true);

      createBill(customer, addToCart, totalprice);
    } else {
      setError(errors);
    }
  };

  return (
    <div>
      <StoredItems
        products={props.products}
        DecrementHandler={DecrementHandler}
        IncrementHandler={IncrementHandler}
        AddTOCartHandler={AddTOCartHandler}
        sellHandler={sellHandler}
      />
      <ConfirmModal
        confirm={confirm}
        setConfirm={setConfirm}
        sellProduct={props.sellProduct}
        onSave={onSaveHandler}
        onChange={onChangeHandler}
        error={error}
        customer={customer}
        saving={saving}
        totalprice={totalprice}
        settotalprice={settotalprice}
        genratebill={genratebill}
      />
      <PrintBillModal
        genratebill={genratebill}
        setgenratebill={setgenratebill}
        customerBill={props.customerBill}
        productsInCart={addToCart}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  debugger;
  return {
    newOrder,
    customerBill: state.OrderReducer,
    customer: newCustomer,
    sellProduct: state.sellProductReducer,
    products: state.ProductReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: {
      updatedItems: bindActionCreators(updatedItems, dispatch),
      saveOrder: bindActionCreators(saveOrderAction, dispatch),
      sellProductsAction: bindActionCreators(sellProductsAction, dispatch),
      loadProduct: bindActionCreators(loadProduct, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
