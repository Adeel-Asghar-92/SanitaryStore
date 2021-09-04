import { Bill_Type } from "../types/Type";

export const OrderReducer = (state = [], action) => {
  switch (action.type) {
    case Bill_Type:
      return action.bill;

    default:
      return state;
  }
};
