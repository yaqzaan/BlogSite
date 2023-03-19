import "./single.css";
import SideBar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlepost/SinglePost";

const Single = () => {
    return ( 
        <div className="single">
            <SinglePost/>
            <SideBar/>
        </div>
     );
}
 
export default Single;