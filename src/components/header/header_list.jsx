import "./headerlist.css";
import Headertooltip from "./headertooltip/headertooltip";

function Headerlist({data})
{
      let tooltip = data.tooltip?<Headertooltip/>:"";

    return (<div className="header_component_each_list"> <img src={data.image} alt="" srcset="" />
    <p className="hover_tool_tip_title">{data.title} {tooltip}</p>
    
 
       
    </div>)
}
export default Headerlist