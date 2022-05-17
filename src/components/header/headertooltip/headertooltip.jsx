import "./headertooltip.css";
import "../../commoncss/common.css"
import { Fashion } from "../header_sub_components_array";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { subcategoriespass } from "../../../redux/tooltipreducer.jsx/action";
import store from "../../../redux/store";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";



function Headertooltip({data})
{
    // console.log("tooltipdata",data);

    let Fashion = data;
    
    //   selector value is nothing but array of obj used for tooltip second show realted more
     let Selector = useSelector((store)=>{return store.tooltipsubcategories})||Fashion[0];
     console.log(Selector,"selector222")
     
     
          

    




    return (<div className="total_tip_total_part">
        <div className="total_tip_total_part_flex"> 
        <div>
            {/* <p>Men's top Wear</p>
            <p>Men's top Wear</p>
            <p>Men's top Wear</p> */}
            {Fashion.map((e)=> <Firsttool className="total_first_tool" id={e.id}  data={e}   />)}
        </div>
        <div>
        {/* <p>Men's top Wear</p>
        <p>Men's top Wear</p>
        <p>Men's top Wear</p> */}
         {<Secontool className="total_second_tool" data={Selector}/>}
        </div>
        </div>
    </div>)
}
export default Headertooltip

function Firsttool({data,id})
{



    let [arrow,setarrow] = useState(false);
    let dispatch = useDispatch();
    

           
    let {categories,subcategories} = data;
 

  
 const changehandle=()=>{

      
       
    dispatch(subcategoriespass(subcategories))
    setarrow(true)
     
 }
 const arrowhandle=()=>{
    setarrow(false)
 }
   
     
    return (<p className="linkcategories" onMouseLeave={arrowhandle} onMouseEnter={changehandle}><Link className="link_nodecoration" to="j">{categories}{arrow&&<span><AiOutlineRight/></span>}</Link></p>)
}

function Secontool({data})
{
    
    
    //  
    // data.map((e)=>{console.log(e)})
    // console.log(typeof([]))
   
    //  console.log(data,"secondtooltip")
 
     return (<> { data.map((e)=>{return <p className="linkcategories"><Link className="link_nodecoration"    to="k">{e.title}</Link></p>})}</>)
}