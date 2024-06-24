import { balanceReducer } from "./balanceSlice";
import { itemsReducer } from "./itemsSlice";

export const rootReducer = {
  balance: balanceReducer,
  items: itemsReducer,
};
