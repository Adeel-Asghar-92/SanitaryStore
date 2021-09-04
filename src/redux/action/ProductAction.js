import { toast } from "react-toastify";
import {
  GetProduct,
  deleteProductById,
  saveChanges,
  getProductById,
  saveOrder,
  updatedAllItems,
  getHistory,
  deleteHistoryById,
} from "../manageProduct/ProductManager";
import {
  Load_Product_Type,
  Delete_Product_Type,
  Create_Product_Type,
  Info_Product_Type,
  Sell_Product_Type,
  Edit_Product_Type,
  Bill_Type,
  History_Type,
  View_History_Type,
  Delete_History_Type,
} from "../types/Type";

export const loadProduct = () => {
  return function (dispatch) {
    GetProduct()
      .then((products) => dispatch({ type: Load_Product_Type, products }))
      .catch((error) => {
        throw error;
      });
  };
};

export const productSaved = (product) => {
  return function (dispatch) {
    saveChanges(product).then(() => {
      product.id
        ? GetProduct().then((products) =>
            dispatch({ type: Edit_Product_Type, products })
          )
        : GetProduct().then((products) =>
            dispatch({ type: Create_Product_Type, products })
          );
    });
  };
};

export const deleteProduct = (id) => {
  return function (dispatch) {
    debugger;
    deleteProductById(id)
      .then(() => {
        dispatch({ type: Delete_Product_Type, id });
        toast.success("Deleted Succesfully !!!");
      })
      .catch((error) => {
        toast.error("Error " + error);
      });
    loadProduct();
  };
};

export const productInfoAction = (id) => {
  debugger;
  return function (dispatch) {
    getProductById(id).then((info) => {
      dispatch({ type: Info_Product_Type, info });
    });
  };
};

export const sellProductsAction = (sellProducts) => {
  return function (dispatch) {
    dispatch({ type: Sell_Product_Type, sellProducts });
  };
};

export const saveOrderAction = (bill) => {
  debugger;
  return function (dispatch) {
    saveOrder(bill).then(() => {
      toast.success("Saved Successfully!!!");
      dispatch({ type: Bill_Type, bill });
    });
  };
};

export const updatedItems = (items) => {
  return function () {
    updatedAllItems(items);
  };
};

export const historyAction = () => {
  debugger;
  return function (dispatch) {
    getHistory().then((history) => {
      dispatch({ type: History_Type, history });
    });
  };
};

export const viewHistoryByIdAction = (history, id) => {
  return function (dispatch) {
    dispatch({ type: View_History_Type, history, id });
  };
};

export const DeleteHistory = (id) => {
  debugger;
  return function (dispatch) {
    deleteHistoryById(id).then(() => {
      dispatch({ type: Delete_History_Type, id });
    });
  };
};
