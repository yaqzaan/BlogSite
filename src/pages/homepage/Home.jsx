import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sidebar/Sidebar';
import "./Home.css"
const Home = () => {
    return ( <>
    <Header/>
    <div className="home">

<Posts/>
<SideBar/>
        </div>
    </>


      
     

     );
}
 
export default Home;