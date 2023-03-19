import React, { Component } from 'react';
import './Header.css'
const Header = () => {
    return ( 
        <div className="header">
           <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
           </div>
           <img className="headerImg" src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/07/cloud-photography-12.jpg" alt=""  />
        </div>
     );
}
 
export default Header;
