import "./headertooltip.css";
import { Fashion } from "../header_sub_components_array";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { subcategoriespass } from "../../../redux/tooltipreducer.jsx/action";
import store from "../../../redux/store";
import { useParams } from "react-router-dom";

function Headertooltip({data})
{
    // console.log("tooltipdata",data);

    let Fashion = data;
    
    //   selector value is nothing but array of obj used for tooltip second show realted more
     let Selector = useSelector((store)=>{return store.tooltipsubcategories});
     console.log(Selector,"selector222")
     
     


    




    return (<div className="total_tip_total_part">
        <div className="total_tip_total_part_flex">
        <div>
            {/* <p>Men's top Wear</p>
            <p>Men's top Wear</p>
            <p>Men's top Wear</p> */}
            {Fashion.map((e)=> <Firsttool id={e.id}  data={e}   />)}
        </div>
        <div>
        {/* <p>Men's top Wear</p>
        <p>Men's top Wear</p>
        <p>Men's top Wear</p> */}
         {<Secontool data={Selector}/>}
        </div>
        </div>
    </div>)
}
export default Headertooltip

function Firsttool({data,id})
{


    
    let dispatch = useDispatch();
    
   
        
      
    

           
    let {categories,subcategories} = data;
 
   
   
  
 const changehandle=()=>{

      
       
    dispatch(subcategoriespass(subcategories))
     
 }
   
     
    return (<p onMouseEnter={changehandle}>{categories}</p>)
}

function Secontool({data})
{
    
    
    //  
    // data.map((e)=>{console.log(e)})
    // console.log(typeof([]))
   
    //  console.log(data,"secondtooltip")
 
     return (data.map((e)=>{return <p>{e.title}</p>}))
}