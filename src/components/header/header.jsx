import "./header.css";
import "../commoncss/common.css";
import flipkartlogo from "../../assets/images/flipkartlogo.png";
import { SearchOutlined,ShoppingCartOutlined  } from "@ant-design/icons";
function Header()
{
    return (<div >
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
                <button className="header_login_btn">Login</button>
            </div>
            <div className="become_a_seller">Become a seller</div>
            <div className="header_more">More</div>
            <div className="header_cart_whole"><span><ShoppingCartOutlined /></span><span>Cart</span></div>
        </div>
        </div>
    </div>)
}
export default Header
