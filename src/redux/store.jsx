
   import { legacy_createStore as createStore } from "redux";
import categoriesreducer from "./tooltipreducer.jsx/reducer";


const init = { tooltipsubcategories: [{ title: "maggi" }] };
    let store = createStore(categoriesreducer,init)
    export default store

