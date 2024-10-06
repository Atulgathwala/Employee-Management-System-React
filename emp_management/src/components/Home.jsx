import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <section style={{
      height:"90vh",
      width:"100%",
      backgroundColor:"#eeeeee",
      display:"flex",
      justifyContent:"space-around",
      alignItems:"center"
    }}>

      <img src="assets/index_img_boy_readbook.png" alt=""  style={{  }} height={"500px"}/>

      <aside style={{flexBasis:"50%"  , height:"100%"}}>
<p style={{
  fontSize:"50px", fontWeight:"bold" , fontFamily:"system" , textAlign:"center",marginTop:"15vh"
}}>"Empowering employees for a brighter tomorrow."</p>

<div style={{margin:"100px auto" , width:"80%" , display:"flex" , justifyContent:"space-around", }}> <NavLink to="/addemp" style={{
  backgroundColor:"aqua" , padding:"20px 40px" , borderRadius:"20px" , fontSize:"20px" , textDecorationLine:"none" , fontSize:"40px"
 }}>Addemp</NavLink>

<NavLink to="/viewAllemp" style={{
  backgroundColor:"aqua" , padding:"20px 40px" , borderRadius:"20px" , fontSize:"20px" , textDecorationLine:"none" , fontSize:"40px"
 }}>viewAll</NavLink></div>

 
 
      </aside>

    </section>
  )
}

export default Home