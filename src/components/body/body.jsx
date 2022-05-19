import "./body.css";
import AutoPlay from "./slider/slider";
import Viewall from "../viewall/viewall";
import Commonslider from "../commonslideritems/commonslider";

import { Deals_of_the_day, Trending_title, Toys_stationary_title, Best_Electronics_title, Top_fashion_title, Best_price_title, Topdealsfashion_title, Deals_title } from "../../assets/bodymaterials/Allbodypartsdata";
function Body()
{
    return (<div className="flipkart_Body_whole_part">
        <div className="flipkart_Total_slider_part">
            {/* body auto play slider starts */}
            <AutoPlay/>

              {/* body auto play slider end */}

                {/* Deals of the day whole part left and right  starts*/}
            <div className="Deals_of_the_day_with_add">

               <div><Viewall title={Deals_title}/>
            <Commonslider data={Deals_of_the_day}/></div>
            <div className="deals_side_add">
                <img src="https://rukminim2.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" alt="" />
            </div>
            </div>
            {/* Deals of the day whole part left and right  starts*/}
   {/* Trending parts  starts*/}
            <div className="common_slider_full_css_part">
            <Viewall title={Trending_title}/>
            <Commonslider data={Deals_of_the_day}/>
            </div>

        </div>
    </div>)
}
export default Body
 