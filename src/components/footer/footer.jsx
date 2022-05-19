import "./footer.css";
import { Link } from "react-router-dom";
function Footer()
{
    return (<div className="Flipkart_footer_whole_part">
        <div className="Flipkart_footer_div1">
            <div>
               <p className="Flipkart_footer_div1_Each_title">ABOUT</p>
                <Link to="">Contact Us</Link>
                <Link to="">About Us</Link>
                <Link to="">Careers</Link>
                <Link to="">Flipkart Stories</Link>
                <Link to="">Press</Link>
                <Link to="">Flipkart Wholesale</Link>
                <Link to="">Corporate information</Link>


                
            </div>
            <div>
            <p className="Flipkart_footer_div1_Each_title">HELP</p>
                <Link to="">Contact Us</Link>
                <Link to="">About Us</Link>
                <Link to="">Careers</Link>
                <Link to="">Flipkart Stories</Link>
                <Link to="">Press</Link>
                <Link to="">Flipkart Wholesale</Link>
                <Link to="">Corporate information</Link>
            </div>
            <div>
            <p className="Flipkart_footer_div1_Each_title">POLICY</p>
                <Link to="">Contact Us</Link>
                <Link to="">About Us</Link>
                <Link to="">Careers</Link>
                <Link to="">Flipkart Stories</Link>
                <Link to="">Press</Link>
                <Link to="">Flipkart Wholesale</Link>
                <Link to="">Corporate information</Link>
            </div>
            <div>
            <p className="Flipkart_footer_div1_Each_title">SOCIAL</p>
                <Link to="">Contact Us</Link>
                <Link to="">About Us</Link>
                <Link to="">Careers</Link>
                <Link to="">Flipkart Stories</Link>
                <Link to="">Press</Link>
                <Link to="">Flipkart Wholesale</Link>
                <Link to="">Corporate information</Link>
            </div>
            
            <div>
            <p className="Flipkart_footer_div1_Each_title">Mail Us</p>
               <p>Flipkart Internet Private Limited,

             Buildings Alyssa, Begonia &

            Clove Embassy Tech Village,

          Outer Ring Road, Devarabeesanahalli Village,

         Bengaluru, 560103,

           Karnataka, India</p>
            </div>
            <div>
            <p className="Flipkart_footer_div1_Each_title">Registered Office Address</p>
            <p>
            Flipkart Internet Private Limited,

          Buildings Alyssa, Begonia &

         Clove Embassy Tech Village,

        Outer Ring Road, Devarabeesanahalli Village,

           Bengaluru, 560103,

          Karnataka, India

          CIN : U51109KA2012PTC066107

           Telephone:<span> 1800 202 9898</span>
           </p>
            </div>
        </div>
        <div className="middel_code_footer"></div>
        <div className="Flipkart_footer_div2">
            <div>Become a Seller</div>
            <div>Advertise</div>
            <div>Gift Cards</div>
            <div>Help Center</div>
            <div>2007-2002 Flipkart.com</div>
            <div>
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg" alt="" srcset="" />
            </div>
        </div>
    </div>)
}
export default Footer