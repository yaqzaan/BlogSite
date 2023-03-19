import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../topbar/TopBar.css'
const TopBar = () => {
    const user = false;
    return ( 
<div className='top'>
    <div className="topLeft">
        <i classNmae="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
    </div>
    <div className="topCentre"><ul className="topList">
        <li className="topListItem">
            <Link className="link"to="/" >Home</Link>
        </li>
        <li className="topListItem">  <Link className="link"to="/" >About</Link></li>
        <li className="topListItem">  <Link className="link"to="/" >Contact</Link></li>
        <li className="topListItem">  <Link className="link"to="/write" >Write</Link></li>
        <li className="topListItem"> 
        {user && "LOGOUT"}
        </li>
        </ul></div>
    <div className="topRight">
        {
            user ? (
                <img
                className="topImg"
                src="https://www.google.com/url?sa=i&url=http%3A%2F%2Ft3.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcT-5sTJv6euW5eSSN-HFezgFn1wJtKopbAKv_dtOKHDfYDIDrQCyvkD1iZqr55R2w_YqCsvX3AE_wgkEs8&psig=AOvVaw2AE9K4l37HB2XGbXkVDKC6&ust=1678861893263000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIjHwoLm2v0CFQAAAAAdAAAAABAE"
                alt=""
              />
            ) : (
                <ul className="topList">
                    <li className='topListItem'><Link className="link" to="/login" >Login</Link></li>
                
                <li className='topListItem'> <Link className="link"to="/register" >Register</Link></li>
               
                </ul>
            )
        }
   
            <i className='topSearchIcon fas fa-search'></i>
    </div>
</div>
     );
}
 
export default TopBar;