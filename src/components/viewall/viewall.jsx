import "./viewall.css";
import { Link } from "react-router-dom";
function Viewall({title:{title,path}})
{
     console.log(path)
    
    
    return (<div className="flipkart_view_all_whole">
         
         <div>{title}</div>
         <div>
             {/* <button>VIEW ALL</button> */}
             <Link to={path}>VIEW ALL</Link>
         </div>

    </div>)
}
export default Viewall