import { View_History_Type } from "../types/Type";

export const ViewHistoryReducer = (state = [], action) => {
  debugger;
  switch (action.type) {
    case View_History_Type:
      return action.history.filter((h) => h.id === action.id);

    default:
      return state;
  }
};
