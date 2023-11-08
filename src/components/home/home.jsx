import React from 'react'
import logo from '../img/166448bb602550524d906cbdca70189c 1.png'
import image from '../img/Group 216.svg'
import './home.css'

const Home = () => {
  return (
    <>
    <home className="najwa">
   <div className="container">
   <h1>Withdrawal Money</h1>
        <p>The money will be transferred within the shortest time.
Please make sure to enter the data correctly.</p>
    <img src={logo} alt="" />
   
       
   </div>
    <div className="data">
        <h1>Recipient information</h1>
        <p>Enter the recipient's information accurately.</p>
       <div className='line'>
        <p>________________________________________________________________________________________________</p>
       </div>
        
      
       </div>
       <div className='contact'>
        <div className="right">

        </div>
        <div className="left">

        </div>
       </div>
   </home>
   </>
  )
}

export default Home