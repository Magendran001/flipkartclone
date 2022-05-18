import "./viewall.css"
function Viewall({title="Deals of the Day",path})
{
    return (<div className="flipkart_view_all_whole">
         
         <div>{title}</div>
         <div>
             <button>VIEW ALL</button>
         </div>

    </div>)
}
export default Viewall