
   import { legacy_createStore as createStore,combineReducers } from "redux";
import categoriesreducer from "./tooltipreducer.jsx/reducer";
import loginreducer from "./login/loginreducer";


const init = { tooltipsubcategories: [{ title: "maggi" }] };

   let rootreducer = combineReducers({categoriesreducer,loginreducer})
    let store = createStore(rootreducer);
    console.log(store.getState(),"storekkkkkkkkkkkkkk")
    export default store

