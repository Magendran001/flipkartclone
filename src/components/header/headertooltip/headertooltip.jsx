import "./headertooltip.css";
import { fashion } from "../header_sub_components_array";
function Headertooltip()
{
    console.log(fashion)
    let Categories = fashion.Catrgories?fashion.Categories:null;
    console.log(Categories,"categories")

    return (<div className="total_tip_total_part">
        <div className="total_tip_total_part_flex">
        <div>
            {/* <p>Men's top Wear</p>
            <p>Men's top Wear</p>
            <p>Men's top Wear</p> */}
            {fashion.map((e)=> <Firsttool  data={e} />)}
        </div>
        <div>
        <p>Men's top Wear</p>
        <p>Men's top Wear</p>
        <p>Men's top Wear</p>
        </div>
        </div>
    </div>)
}
export default Headertooltip

function Firsttool({data})
{
    let {categories} = data;
    return (<p>{categories}</p>)
}