import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loginclickfun } from "../../redux/login/action";
import axios from "axios"
import "./Login.css";
import SubmitLoginreducer from "../../redux/submitlogin/submitloginreducer";



function Login()
{
   let [newuser,setnewuser] = useState(false);
   let [loginobj,setloginobj] = useState({});
   let [loginloading,setloginloading] = useState(false);
   let [signuptry,setsignuptry] = useState();
   let [signuppassword,setsignuppassword] = useState();
   let [signupsignal,setsignupsignal] = useState(false)

  let dispatch = useDispatch();
    let loginreducer = useSelector((state)=>{return state.loginreducer.loginclick});
    
    
    let [close,setclose] = useState(false);

    useEffect(()=>{
        setclose(loginreducer)
    },[loginreducer])
      
     
             
     

     console.log(close,"loginreducer");

      const handlechange =(target)=>{

        let {name,value} = target;

        setloginobj({...loginobj,[name]:value});
        

      }

     const Submitlogin =()=>{

        // setloginloading(true)
 
        // axios.post("http://localhost:9876/login",{...loginobj})
        // .then((res)=>{
        //     console.log(res.data,"res.data")  
            
        //     if(res.data.message)
        //     {
        //         alert(res.data.message)
        //     }
        //     else if(res.data._id)
        //     {
        //         localStorage.setItem("userdetails",JSON.stringify(res.data));
        //         dispatch(Loginclickfun(false))

        //     }
        // })
        // .catch((err)=>{
        //     console.log(err.response.data)
        //     let errors = err.response.data.errors[0].msg;
        //     if(errors)
        //     {
        //         alert("Enter valid username and password")
        //     }

        // })
        // .finally(()=>{
        //     setloginloading(false)
        // })
        

      dispatch(SubmitLoginreducer(loginobj))

       
         

     }

     const signuptrying = ()=>{
 

        axios.post("http://localhost:9876/signin",{mobile_number:signuptry})
        .then((res)=>{
            console.log(res.data);

            if(res.data.error)
            {
                setsignupsignal(true)
            }
            if(res.data.message)
            {
                alert("User already exist Kindly Login")
            }
        })
        .catch((error)=>{
            
            console.log(error);

             

        })

     }

     const Signuppost =()=>{

        console.log(signuppassword,signuptry);
        axios.post("http://localhost:9876/signin",{mobile_number:signuptry,setpassword:signuppassword})

        .then((res)=>{
           

           let user = res.data.user;
           user.Token = res.data.Token;
            

           localStorage.setItem("userdetails",JSON.stringify(user));
           dispatch(Loginclickfun(false))

            
        })
        .catch((error)=>{
            
            console.log(error);

             

        })
        


     }

      

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
                            
                            {newuser?<input  type="text" onChange={(e)=>{setsignuptry(e.target.value)}} placeholder="Enter Mobile number" />:<input type="text" onChange={(e)=>{handlechange(e.target)}} name="mobile_number" placeholder="Enter Mobile number" />}
                        </div>
                        <div>
                           {newuser?"":<input type="text" onChange={(e)=>{handlechange(e.target)}} name="setpassword" placeholder="Enter Password" />}
                            
                            {signupsignal?<input type="text" onChange={(e)=>{setsignuppassword(e.target.value)}}  placeholder="Set Password" />:""}

                        </div>
                        <div>
                            <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                        </div>
                        <div>
                         {signupsignal?<button onClick={Signuppost} className="Login_flipkart_orange">Signup</button>:  newuser? <button onClick={signuptrying} className="Login_flipkart_orange">CONTINUE</button>:<button onClick={Submitlogin} className="Login_flipkart_orange">{loginloading?"...login":"Login"}</button>}
                        </div>
                        <div>{newuser?"":"OR"}</div>
                        <div onClick={()=>{setnewuser(false)}}>
                            {newuser?<button onClick={()=>{setsignupsignal(false)}} className="request_flipkart_otp">Existing User? Log in</button>:<button className="request_flipkart_otp">Request OTP</button>}
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