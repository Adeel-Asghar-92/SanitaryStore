import { History_Type, Delete_History_Type } from "../types/Type";

export const HistoryReducer = (state = [], action) => {
  debugger;
  switch (action.type) {
    case History_Type:
      return action.history.data;
    case Delete_History_Type:
      return state.filter((h) => h.id !== action.id);

    default:
      return state;
  }
};
