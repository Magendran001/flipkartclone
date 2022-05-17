import "./headerlist.css";
import Headertooltip from "./headertooltip/headertooltip";
import {Link} from "react-router-dom"

import { MdOutlineArrowDropUp,MdOutlineArrowDropDown } from "react-icons/md";
import { Fashion,Electronics,Home,Appliances,Toys_others } from "./header_sub_components_array";
import { useState } from "react";




function Headerlist({data})
{

  let [props,setprops] = useState(Fashion);
  
  function hoverlist(value)
  { 
    
     if(value=="Fashion")
     {
      setprops(Fashion)
     }
     else if(value =="Electronics")
     {
       
      setprops(Electronics)
     }
     else if(value =="Home")
     {

      setprops(Home)
     }
     else if(value =="Appliances")
     {
      setprops(Appliances)
     }
     else if(value =="Beauty,Toys & More")
     {
      setprops(Toys_others)
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