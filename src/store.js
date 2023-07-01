//import {createStore} form 'redux'

import accountReducer from "./features/accounts/Account-Slice";
import customerReducer from "./features/cutomers/Customer-Slice";

const { createStore, combineReducers } = require("redux");


 const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer, 

 })
 const store = createStore(rootReducer);



console.log(store.getState());

 export default store;
