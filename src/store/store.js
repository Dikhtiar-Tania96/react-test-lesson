import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";

const initialState = {
  balance: {
    value: 1000,
    comment:'',
  },
  users: {},
  items: {},
};

export const actionDeposit = (value) => ({
  type: "balance/deposit",
  payload: value,
});

export const actionWithdraw = (value) => ({
  type: "balance/withdraw",
  payload: value,
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        balance: {
          ...state.balance,
          value: state.balance.value + action.payload,
        },
      };

      case "balance/withdraw":
      return {
        ...state,
        balance: {
          ...state.balance,
          value: state.balance.value - action.payload,
        },
      };
    default:
      return state;
  }
};

export const store = createStore(reducer, composeWithDevTools());
