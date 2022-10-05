import { Link } from "react-router-dom";

const Error404 = () => {
    return (  
        <div className="error404">
            <h2>Sorry</h2>
            <p>This page does not exist</p>
            <Link to="/">Go back to the homepage...</Link>
        </div>
    );
}
 
export default Error404;