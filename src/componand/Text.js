import "../css/txt.css";
import "../../src/css/bootstrap.css"; 
const Text = () =>
{
    return <div >
        <div className="container" id="cont">
        <div className="row justify-content-md-center">
        <div className="col">
        <br></br>
        <h1> Welcome to Flight Booking App</h1>
        </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col">
            <br></br> <br></br>
           <a href="/Register" target="-blank">
          <button class="learn-more" onclick="" >
          <span class="circle" aria-hidden="true">
         <span class="icon arrow"></span>
         </span>
  <span class="button-text">Get Start Here</span>
</button>            
</a>
          </div>
        </div>
      </div>
     </div>
}
export default Text;

