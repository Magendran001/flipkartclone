import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loginclickfun } from "../../redux/login/action";
import "./Login.css";
import Newuser from "./newuser";

function Login()
{
   let [newuser,setnewuser] = useState(false)

  let dispatch = useDispatch()
    let loginreducer = useSelector((state)=>{return state.loginreducer.loginclick});
    console.log(loginreducer,"loginreducer")
    
    let [close,setclose] = useState(false);

    useEffect(()=>{
        setclose(loginreducer)
    },[loginreducer])
      
     
             
     

     console.log(close,"loginreducer")

      

    return (<div  className={!close?"Whole_login_part_of_flipkart":"Whole_login_part_of_flipkart_visible"}>
          
          <div className="Whole_login_part_of_flipkart_inside">
              <div onClick={()=>{
                  dispatch(Loginclickfun(false))
                      
              }} className="login_close_btn"><i class="fa fa-close"></i></div>
              <div className="Login_hover_part_1">
                      
                      <div className="Login_hover_part_1_h2_p1">
                          <h2>{newuser?"Looks like you're new here!":"Login"}</h2>
                          <p className="p_login_tag">{newuser?"Sign up with your mobile number to get started":"Get access to your Orders, Wishlist and Recommendations"}</p>
                      </div>
                      <div>
                          <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
                      </div>

              </div>
              <div className="Login_hover_part_2">

                    <div>
                        <div>
                            
                            {newuser?<input type="text" placeholder="Enter Mobile number" />:<input type="text" placeholder="Enter Email/Mobile number" />}
                        </div>
                        <div>
                           {newuser?"":<input type="text" placeholder="Enter Password" />}
                        </div>
                        <div>
                            <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                        </div>
                        <div>
                            {newuser? <button className="Login_flipkart_orange">CONTINUE</button>:<button className="Login_flipkart_orange">Login</button>}
                        </div>
                        <div>{newuser?"":"OR"}</div>
                        <div onClick={()=>{setnewuser(false)}}>
                            {newuser?<button className="request_flipkart_otp">Existing User? Log in</button>:<button className="request_flipkart_otp">Request OTP</button>}
                        </div>
                    </div>
                    <div>
                        <div onClick={()=>{setnewuser(true)}} className="new_to_flipkart_user">{newuser?"" :"New to Flipkart? Create an account"}</div>
                    </div>
              </div>
          </div>

    </div>)
}
export default Login