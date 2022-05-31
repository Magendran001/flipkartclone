
   import { legacy_createStore as createStore,combineReducers ,applyMiddleware} from "redux";
import categoriesreducer from "./tooltipreducer.jsx/reducer";
import loginreducer from "./login/loginreducer";
import { act } from "react-dom/test-utils";


const init = { tooltipsubcategories: [{ title: "maggi" }] };

   let rootreducer = combineReducers({categoriesreducer,loginreducer});

            const logger = (state)=>(next)=>(action)=>{
                      
                  if(typeof action =="function")
                  {
                        console.log("yes");
                        console.log(action)
                        action(state)
                        
                  }
                  else
                  {
                     console.log("magggggggi")
                     next(action)
                  }

            }
    
    let store = createStore(rootreducer,applyMiddleware(logger));
    console.log(store.getState(),"storekkkkkkkkkkkkkk")
    export default store

