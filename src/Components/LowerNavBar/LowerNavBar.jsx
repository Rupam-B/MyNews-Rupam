import React, { useEffect, useState } from "react";
import "./LowerNavStyle.css";
import { Link } from "react-router-dom";

const LowerNavBar = () => {
  const [showDiv, setShowDiv] = useState(false);

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const distanceFromTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (distanceFromTop > 20) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        isNavbarFixed ? "LowerNav-Main-div-fixed" : "LowerNav-Main-div"
      }
    >
      <div className="LowerNav-Sub-div">
        <ul>
          <Link to={'/'}>
            <li>होम</li>
          </Link>
          <Link to={'/chhattisgarh'}>
            <li>छत्तीसगढ़</li>
          </Link>
          <Link to={'/'}>
            <li>देश-दुनिया</li>
          </Link>
          <Link to={'/chhattisgarh'}>
            <li>अपराध</li>
          </Link>
          <Link to={'/'}>
            <li>राजनीति</li>
          </Link>
          <Link to={'/chhattisgarh'}>
            <li>खेल</li>
          </Link>
          <Link to={'/'}>
            <li>मनोरंजन</li>
          </Link>
          <Link to={'/chhattisgarh'}>
            <li>व्यापार</li>
          </Link>
          <Link to={'/'}>
            <li>तकनीकी</li>
          </Link>
          <Link to={'/chhattisgarh'}>
            <li>खास खबर</li>
          </Link>
        </ul>
      </div>
      <div className="LowerNav-Sub-div-second">
        <i class="fa-solid fa-moon"></i>
        <p>Search for</p>
        <i class="fa-solid fa-magnifying-glass"></i>
        <p
          onMouseEnter={() => setShowDiv(true)}
          onMouseLeave={() => setShowDiv(false)}
          className="LowerNav-Sub-kahabar"
        >
          खास खबर
        </p>
        <i
          onMouseEnter={() => setShowDiv(true)}
          onMouseLeave={() => setShowDiv(false)}
          class="fa-solid fa-angle-down"
        ></i>
      </div>
      <div
        className={
          showDiv ? "LowerNav-Hover-div-show" : "LowerNav-Hover-div-hide"
        }
      >
        <div className="LowerNav-Hover-div-show-one">
          <p>
            गाजा के सबसे बड़े रिफ्यूजी कैंप पर इजरायल का हमला पिंडदान क्यों है
            जरूरी अमेरिका ने कहा, कनाडा के प्रयासों का समर्थन करते श्री कृष्ण
            जन्माष्टमी पर क्या उपाय करें कि कर्ज से मिले मुक डाक विभाग ने 10वीं
            पास के लिए निकाली बंपर वैकेंसी मणिपुर में फिर भड़की हिंसा
          </p>
        </div>
        <div className="LowerNav-Hover-div-show-one">
          <p> पुलिसकर्मी समेत दो घायल बेरोजगार युवाओं के लिए अच्छी खबर, 5500 पदों
            पर होगी भर्ती, 10 अगस्त को करें आवेदन भाजपा की राष्ट्रीय कार्यसमिति
            की घोषणा, डॉ. रमन सिंह के साथ सरोज पांडेय और लता उसेंडी को बनाया</p>
        </div>
        <div className="LowerNav-Hover-div-show-one">
          <p>  राष्ट्रीय उपाध्यक्ष… डॉ. एके द्विवेदी कैप्टन ऑफ इंडस्ट्री फॉर
            होम्योपैथी सम्मान से सम्मानित पर्स लूटकर भाग रहे बदमाशों का हुआ
            एक्सीडेंट, एक की मौत, दो चढ़े पुलिस के हत्थे</p>
        </div>
      </div>
    </div>
  );
};

export default LowerNavBar;
