import { legacy_createStore } from "redux";
import cakeReducer from "./CakeReducer";
 

const store = legacy_createStore(cakeReducer)
 

 export default store

