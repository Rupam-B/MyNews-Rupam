import React, { useEffect, useState } from 'react'
import './SidebarStyle.css'

const Sidebar = () => {

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
      if (distanceFromTop > 20) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={isNavbarFixed?'Sidebar-Main-div-substitute':'Sidebar-Main-div'}>
      <div className='Sidebar-sub-div'>
        <div className='Sidebar-sub-one'>
          <img src="https://mirror24news.com/wp-content/uploads/2023/04/mirror-advt-gif.gif" alt="" />
        </div>
        <div className='Sidebar-sub-two'>
          <div className='Sidebar-sub-two-first'>
            <h6>खास खबर</h6>
            <hr/>
            <img src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-27.jpg" alt="" />
            <h5>गाजा के सबसे बड़े रिफ्यूजी कैंप पर इजरायल का हमला</h5>
            <p>6 days ago</p>

          </div>
          <div className='Sidebar-sub-two-second'>
            <div className='Sidebar-sub-two-second-top'>
            <img src="https://mirror24news.com/wp-content/uploads/2023/09/11-1-220x150.jpeg" alt="" />
              <p>श्री कृष्ण जन्माष्टमी पर क्या उपाय करें कि कर्ज से मिले मुक</p>
            </div>
            <div className='Sidebar-sub-two-second-top'>
              <img src="https://mirror24news.com/wp-content/uploads/2023/10/16-2-220x150.jpg" alt="" />
              <p>पिंडदान क्यों है जरूरी</p>
              
            </div>
            <div className='Sidebar-sub-two-second-top'>
            <img src="https://mirror24news.com/wp-content/uploads/2023/09/9-25-780x442-1-220x150.jpg" alt="" />
              <p>अमेरिका ने कहा, कनाडा के प्रयासों का समर्थन करते</p>
            </div>
          </div>
        </div>
        <div className='Sidebar-sub-three'>
          <img src="https://tpc.googlesyndication.com/simgad/17492542973004163437" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar