import "./body.css";
import AutoPlay from "./slider/slider";
import Viewall from "../viewall/viewall";
import Commonslider from "../commonslideritems/commonslider";
import { Deals_of_the_day } from "../../assets/bodymaterials/Allbodypartsdata";
function Body()
{
    return (<div className="flipkart_Body_whole_part">
        <div className="flipkart_Total_slider_part">
            <AutoPlay/>
            <div className="Deals_of_the_day_with_add">

               <div><Viewall/>
            <Commonslider data={Deals_of_the_day}/></div>
            <div></div>
            </div>
           

        </div>
    </div>)
}
export default Body
 