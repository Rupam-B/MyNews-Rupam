import React from "react";
import "./FootterStyle.css";
// import { Link } from "react-router-dom";

const Footter = () => {
  const FootterData1 = [
    {
      id: 1,
      imgSrc:
        "https://mirror24news.com/wp-content/uploads/2023/09/Untitled-4-220x150.jpg",
      news: "केंदीय विद्यालय रायपुर क्रमांक 1 में केंद्रीय विद्यालय संगठन का संभाग स्तरीय राष्ट्रीय एकता पर्व एक भारत श्रेष्ठ भारत एवं कला उत्सव 2023 का समापन हुआ",
    },
    {
      id: 2,
      imgSrc:
        "https://mirror24news.com/wp-content/uploads/2023/08/tt-220x150.jpg",
      news: "CG Teacher Recruitment : छत्तीसगढ़ शिक्षक भर्ती में फिर अटका रोड़ा",
    },
    {
      id: 3,
      imgSrc:
        "https://mirror24news.com/wp-content/uploads/2023/08/Untitled-13-4-220x150.jpg",
      news: "बीपीएससी 69वीं सीसीई समेत कुल 26 भर्ती परीक्षाओं का कैलेंडर जारी",
    },
  ];
  const FootterData2 = [
    {
      id: 4,
      imgSrc:
        "https://mirror24news.com/wp-content/uploads/2023/11/g-11-220x150.jpeg",
      news: "सर्दियों खाएं गुड़ इम्यूनिटी होगी बूस्ट, बीमारी होगी दूर, जानें गुड़ के फायदे",
    },
    {
      id: 5,
      imgSrc:
        "https://mirror24news.com/wp-content/uploads/2023/11/Untitled-4-2-220x150.jpg",
      news: "डेंगू हो गया है तो ये हरे पत्ते किसी संजीवनी बूटी से कम नहीं हैं, एक्सपर्ट कहते हैं कि बस आपको ट्रीटमेंट में",
    },
    {
      id: 6,
      imgSrc:
        "https://mirror24news.com/wp-content/uploads/2023/10/shampoo_650x400_61492590271-220x150.jpg",
      news: "तेजी से झड़ रहे हैं बाल, रूक गई है ग्रोथ, रात में लगाना शुरू कर दें ये होममेड ऑयल",
    },
  ];
  return (
    <div className="Footter-main-div">
    <div className="Footter-top-div">
      <div className="Footter-First-div">
        <h5>About Us</h5>
        <p>
          Mynews.com is daily hindi news website of Chhattisgarh. Get latest and
          breaking news from Chhattisgarh including Raipur.
        </p>
      </div>
      <div className="Footter-Second-div">
        <div className="Footter-Second-div-one">
          <h5>Education</h5>
          {FootterData1.map((items) => (
            <div key={items.id} className="Footter-Second-div-one-sub">
              <img src={items.imgSrc} alt="" />
              <p>{items.news}</p>
            </div>
          ))}
        </div>
        <div className="Footter-Second-div-two">
          <h5>Health</h5>
          {FootterData2.map((items) => (
            <div key={items.id} className="Footter-Second-div-one-sub">
              <img src={items.imgSrc} alt="" />
              <p>{items.news}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="Footter-Third-div">
        <h5>Contact Us</h5>
        <p>
          Editor: Gulam Shaheed Raza <br />
          Address: Behind Shitla Mandir, Aama Para Chowk, Haji Karim Complex,
          Raipur – Chhattisgarh <br />
          Email: mirror24news2022@gmail.com <br />
          Mobile: +91-7354899000
        </p>
      </div>
    </div>
    <div className="Footter-Lower-div">
      <div className="Footter-Lower-div-one">
      <p>© Copyright 2023, All Rights Reserved by MyNEWS| Powered by Rupam Soft Solution</p> 
      </div>
      <div className="Footter-Lower-div-two">
      <ul>
        <li>About us</li>
        <li>Privacy Policy</li>
        <li>Contac Us</li>
        <li>Terms and Conditions</li>
      </ul>
      </div>

    </div>
    </div>
  );
};

export default Footter;
