import "./header.css";
import "../commoncss/common.css";
import flipkartlogo from "../../assets/images/flipkartlogo.png";
import { SearchOutlined,ShoppingCartOutlined  } from "@ant-design/icons";
import { useState } from "react";
import header_obj from "./header_sub_components_array";
import Headerlist from "./header_list";
import Login from "../login/login";
import { Loginclickfun } from "../../redux/login/action";
import { useDispatch, useSelector } from "react-redux";

function Header()
{
     const dispatch = useDispatch();
     const selector = useSelector((Store=>Store))
         const Logindispatch =()=>{
             console.log("yes")

            dispatch(Loginclickfun(true));
            console.log(selector)
            

         }

            // header obj is array of obj in  header part {Top offers to Beauty,toys}
    let [header_sub_components,setheader_sub_components] =useState(header_obj);

    return (<div className="flipkart_whole_header_div" >
        <div className="header_part1_whole_div">
        <div className="header_part_1 center_of_div" >
            <div className="flipkart_logo_part">
                <img src={flipkartlogo} alt="" />
                <div><span>Explore</span><span>Plus</span></div>
            </div>
            <div className="header_total_input">
                <input type="text"  placeholder="Search for products,brands and more" />
                 <span className="search_icon"><SearchOutlined /></span>
            </div>
            <div >
                <button onClick={Logindispatch} className="header_login_btn">Login</button>
            </div>
            <div className="become_a_seller">Become a seller</div>
            <div className="header_more">More</div>
            <div className="header_cart_whole"><span><ShoppingCartOutlined /></span><span>Cart</span></div>
        </div>
        </div>
        <div className="header_sub_components">
            <div>
            {header_sub_components.map((e)=>{return <Headerlist data={e}/>})}
            </div>
        </div>
        <div>
            <Login/>
        </div>
    </div>)
}
export default Header
