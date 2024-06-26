import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";


export const store = configureStore({
  reducer: rootReducer
});

// import { composeWithDevTools } from "@redux-devtools/extension";
// import { combineReducers, createStore } from "redux";
// import { balanceReducer } from "./balanceSlice";
// import { itemsReducer } from "./itemsSlice";

// const reducer = combineReducers({
//   balance: balanceReducer,
//   items: itemsReducer,
// });

// export const store = createStore(reducer, composeWithDevTools());
