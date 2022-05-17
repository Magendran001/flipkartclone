import "./headerlist.css";
import Headertooltip from "./headertooltip/headertooltip";
import {Link} from "react-router-dom"

import { MdOutlineArrowDropUp,MdOutlineArrowDropDown } from "react-icons/md";
import { Fashion,Electronics,Home,Appliances,Toys_others } from "./header_sub_components_array";
import { useDispatch } from "react-redux";
import { subcategoriespass } from "../../redux/tooltipreducer.jsx/action";

import { useState } from "react";





function Headerlist({data})
{
  let dispatch = useDispatch();

  let [props,setprops] = useState(Fashion);
  
  function hoverlist(value)
  { 
    
     if(value=="Fashion")
     {
      setprops(Fashion);
      dispatch(subcategoriespass(Fashion[0].subcategories))
     }
     else if(value =="Electronics")
     {
       
      setprops(Electronics)
      dispatch(subcategoriespass(Electronics[0].subcategories))
     }
     else if(value =="Home")
     {

      setprops(Home)
      dispatch(subcategoriespass(Home[0].subcategories))
     }
     else if(value =="Appliances")
     {
      setprops(Appliances)
      dispatch(subcategoriespass(Appliances[0].subcategories))
     }
     else if(value =="Beauty,Toys & More")
     {
      setprops(Toys_others)
      dispatch(subcategoriespass(Toys_others[0].subcategories))
      
     }
    
   
      
  }

 
      let tooltip = data.tooltip?<Headertooltip data={props} />:"";

    return (<div onMouseEnter={()=>{hoverlist(data.title)}} className="header_component_each_list"> <Link   to={`/:${data.id}`}><img src={data.image} alt=""  />
    <p className="hover_tool_tip_title">{data.title} {data.tooltip?<span><MdOutlineArrowDropDown/></span>:""}  {tooltip}</p>

    {/* {data.title}{tooltip} */}
 
    </Link>
    </div>)
}
export default Headerlist