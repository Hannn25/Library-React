import React, { useState } from 'react'
import '../../styles/Profile.css'
import niki from '../../assets/niki.png'
const Profile = () => {
  function confirmAction() {
    let confirmAction = confirm("Exit to Homepage?");
    if (confirmAction) {
      window.location.replace('/login')
    } 
  }
  
  return (
    <div className="content-side">
    <img className="avatar mx-auto" src={niki} alt="" />
   <span className='mx-auto py-2'>Niki Zefanya</span>
   <button className='button-logout' onClick={confirmAction}>Logout</button>
  
</div>
  )
}
export default Profile;