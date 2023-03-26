import { combineReducers } from "redux";
import { Cart } from "../../styles/icons";

const rootReducer = combineReducers({ Cart });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
