import { Link } from "react-router-dom";

export function Home(){
    return(
        <div className=" d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <Link className="btn btn-warning" to={'/email-form'} >Email-form</Link>
        </div>
    )
}