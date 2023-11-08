import React, { useEffect, useState } from 'react'
import './UpperNavStyle.css'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpperNavbar = () => {

  const [adminShow, setAdminShow]=useState(false)
  const [isadmin, setIsAdmin]=useState(false)

  const [nameUser, setNameUser]= useState('')
  const [namePassword, setNamePassword]= useState('')

  const [currentDate, setCurrentDate] = useState(new Date());
  const text = 'NSUI जिला अध्यक्ष समेत कांग्रेस नेत्री निष्कासित';
  const [displayText, setDisplayText] = useState('');

  const [toggleSidebar, setToggleSidebar] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
  
    let currentIndex = 0;
    let isRepeating = false;
    let intervalId;
  
    const startPrinting = () => {
      setDisplayText('');
      currentIndex = 0;
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        setDisplayText((prev) => {
          if (currentIndex === text.length) {
            clearInterval(intervalId);
            if (!isRepeating) {
              isRepeating = true;
              setTimeout(() => {
                isRepeating = false;
                startPrinting();
              }, 1000); 
            }
            return prev;
          }
          currentIndex += 1;
          return text.slice(0, currentIndex);
        });
      }, 50);
    };
  
    const timeoutId = setTimeout(startPrinting, 1000); 
  
    return () => {
      clearInterval(interval);
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const LoginFunc =()=>{
    const UserName= 'Admin Sahab'
    const Password = 'Admin@123'


    if(UserName===nameUser && Password===namePassword){
      toast.success("Log in succesFull",{
        position: "top-center",
        autoClose: 1000,
  
      })
      setAdminShow(false)
      setIsAdmin(true)
      setNameUser('')
      setNamePassword('')
    }
    else{
      toast.error("Wrong Credentials",{
        position: "top-center",
        autoClose: 1000,
  
      })
      setNameUser('')
      setNamePassword('')
    }
  }
  return (
    <div className='UpperNav-main-div'>
      <div className={adminShow?'Admin-div':'Admin-div-hide'}>
        <div className='Admin-Container'>
        <i onClick={()=>setAdminShow(false)} class="fa-solid fa-xmark"></i>
        {isadmin?<p className='Admin-Yes'>Admin Signed In</p>:
        <div className='Admin-No'>
          <h5>Admin Login</h5>
          <input value={nameUser} onChange={(e)=>setNameUser(e.target.value)} type="text" name="" id="" placeholder='User Name'/>
          <input value={namePassword} onChange={(e)=>setNamePassword(e.target.value)} type="text" name="" id="" placeholder='Password'/>
          <button onClick={LoginFunc}>Log In</button>
          </div>
  }
        </div>
      </div>
      <i className="fa-sharp fa-regular fa-clock Display-Date-div"></i>
      <div className='Display-Date-div'>{currentDate.toLocaleDateString()}</div>
      <div className='BreakingNews-div'>BREAKING NEWS</div>
      <div className='BreakingNews-display-div'>{displayText}</div>
      <i className="fa-solid fa-angle-left Display-angle-div"></i>
      <i className="fa-solid fa-angle-right Display-angle-div"></i>
      <i onClick={()=>setAdminShow(true)} className="fa-solid fa-circle-user Display-User-icon-div"></i>
      <p className={isadmin?'Admin-para':'Admin-para-false'}>admin</p>
      <i onClick={()=>setToggleSidebar(true)} className="fa-solid fa-bars Display-Menu-icon-div"></i>
      <div className={toggleSidebar?'Side-Menu-Tap-on-true':'Side-Menu-Tap-on-false'}>
        <div className='Side-Cross-div'>
          <i onClick={()=>setToggleSidebar(false)} className="fa-solid fa-xmark"></i>
          
        </div>
        <div className='Side-div-content'>
            <h4>Raipur</h4>
            <h4>Durg</h4>
            <h4>Bhilai</h4>
            <h4>Korba</h4>
            <h4>Raigarh</h4>
            <h4>Jashpur</h4>
          </div>
      </div>
      <div onClick={()=>setToggleSidebar(false)} className={toggleSidebar?'Side-Menu-Tap-on-true-layer':'Side-Menu-Tap-on-false-layer'}>
      </div>
    </div>
  )
}

export default UpperNavbar