import "./headerlist.css";
import Headertooltip from "./headertooltip/headertooltip";
import {Link} from "react-router-dom"

import { MdOutlineArrowDropUp,MdOutlineArrowDropDown } from "react-icons/md";





function Headerlist({data})
{
  console.log(data)
      let tooltip = data.tooltip?<Headertooltip/>:"";

    return (<div className="header_component_each_list"> <Link   to="/maggi"><img src={data.image} alt=""  />
    <p className="hover_tool_tip_title">{data.title} {data.tooltip?<span><MdOutlineArrowDropDown/></span>:""}  {tooltip}</p>

    {/* {data.title}{tooltip} */}
 
    </Link>
    </div>)
}
export default Headerlist