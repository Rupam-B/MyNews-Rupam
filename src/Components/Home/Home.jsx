import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeStyle.css";

const Home = () => {
  const CustomPrevArrow = (props) => {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          padding: "1rem 0",
          paddingBottom: "4vh",
          height: "5vh",
          display: "flex",
          alignItems: "center",
          left: "0.1vw",
          zIndex: 1,
        }}
      />
    );
  };

  const CustomNextArrow = (props) => {
    return (
      <div
        {...props}
        style={{
          ...props.style,
          paddingBottom: "4vh",
          height: "5vh",
          display: "flex",
          alignItems: "center",
          right: "0.2vw",
          zIndex: 1,
        }}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="Home-Main-div">
      <div className="Home-sub-div">
        <div className="Home-sub-caraousel-div">
          <Slider {...settings}>
            <div style={{ display: "flex" }} className="carousel-card">
              <div className="carousel-Left-image-div">
                <img
                  src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-18-1.jpg"
                  alt=""
                />
                <div className="carousel-Left-image-div-heading">
                  <h2>
                    प्रत्याशी महन्त रामसुन्दर दास ने चर्च पहुंचकर लोगों से किया
                    अपील
                  </h2>
                </div>
              </div>
              <div className="carousel-Right-image-div">
                <div className="carousel-Right-image-div-one">
                  <img
                    src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-17-1.jpg"
                    alt=""
                  />
                  <div className="carousel-Right-image-div-one-heading">
                    <h2>लोग कह रहे हैं “हमर देवता हमार दुवारी में आए हे”</h2>
                  </div>
                </div>
                <div className="carousel-Right-image-div-two">
                  <img
                    src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-12-1.jpg"
                    alt=""
                  />
                  <div className="carousel-Right-image-div-two-heading">
                    <h2>वामन रावलाखे वार्ड 66 में जनसंपर्क</h2>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }} className="carousel-card">
              <div className="carousel-Left-image-div">
                <img
                  src="https://mirror24news.com/wp-content/uploads/2023/11/3-1.jpg"
                  alt=""
                />
                <div className="carousel-Left-image-div-heading">
                  <h2>कतार में लगकर कलेक्टर, एसपी और सीईओ ने किया मतदान</h2>
                </div>
              </div>
              <div className="carousel-Right-image-div">
                <div className="carousel-Right-image-div-one">
                  <img
                    src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-28-1.jpg"
                    alt=""
                  />
                  <div className="carousel-Right-image-div-one-heading">
                    <h2>
                      छत्तीसगढ़ में चुनावी दंगल का पहला राउंड आज, नक्सल इलाके की
                      10 सीटों{" "}
                    </h2>
                  </div>
                </div>
                <div className="carousel-Right-image-div-two">
                  <img
                    src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-27-1.jpg"
                    alt=""
                  />
                  <div className="carousel-Right-image-div-two-heading">
                    <h2>
                      भोपाल में देर रात 800 पुलिसकर्मी एक साथ उतरे, 521 फरार
                      बदमाश गिरफ्तार
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex" }} className="carousel-card">
              <div className="carousel-Left-image-div">
                <img
                  src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-24.jpg"
                  alt=""
                />
                <div className="carousel-Left-image-div-heading">
                  <h2>
                    एंजेलो मैथ्यूज के ‘टाइम्ड आउट’ पर शाकिब अल हसन का पहला{" "}
                  </h2>
                </div>
              </div>
              <div className="carousel-Right-image-div">
                <div className="carousel-Right-image-div-one">
                  <img
                    src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-21.jpg"
                    alt=""
                  />
                  <div className="carousel-Right-image-div-one-heading">
                    <h2>
                      महादेव एप्प में कांग्रेस का नया खुलासाः बृजमोहन अग्रवाल की
                      गाड़ी{" "}
                    </h2>
                  </div>
                </div>
                <div className="carousel-Right-image-div-two">
                  <img
                    src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-20.jpg"
                    alt=""
                  />
                  <div className="carousel-Right-image-div-two-heading">
                    <h2>पहले चरण की सभी 20 सीटें जीतेंगे – दीपक बैज</h2>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="Home-second-div">
          <div className="Home-second-div-left">
            <img
              src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-6-2-390x220.jpg"
              alt=""
            />
            <p>6 hours ago</p>
            <h5>
              बस्तर संभाग की 12 सीटों के साथ पहले चरण की सभी 20 सीटों पर
              कांग्रेस जीतेगी -दीपक बैज
            </h5>
            <p>
              रायपुर । पहले चरण के चुनाव प्रचार की समाप्ति के बाद प्रदेश
              कांग्रेस अध्यक्ष एवं सांसद दीपक बैज ने कहा कि पहले चरण और दूसरे
              चरण दोनों चरणों में कांग्रेस को स्पष्ट बहुमत मिलेगा। पहले…
            </p>
          </div>
          <div className="Home-second-div-right">
            <div className="Home-second-div-right-one">
              <img
                src="https://mirror24news.com/wp-content/uploads/2023/11/m-2-220x150.jpg"
                alt=""
              />
              <div className="Home-second-div-right-one-inner">
                <p>6 hours ago</p>
                <h6>
                  । छत्‍तीसगढ़ के बस्तर व दुर्ग संभाग की 20 सीटों पर मतदान
                </h6>
              </div>
            </div>
            <div className="Home-second-div-right-one">
              <img
                src="https://mirror24news.com/wp-content/uploads/2023/11/m-1-220x150.jpg"
                alt=""
              />
              <div className="Home-second-div-right-one-inner">
                <p>6 hours ago</p>
                <h6>
                  पहली बार बनाया गया ट्रांसजेंडर मतदान केंद्र, सुरक्षा को लेकर
                  किए इतजाम
                </h6>
              </div>
            </div>
            <div className="Home-second-div-right-one">
              <img
                src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-5-2-220x150.jpg"
                alt=""
              />
              <div className="Home-second-div-right-one-inner">
                <p>6 hours ago</p>
                <h6>
                  हर घर रौशन जनसंपर्क यात्रा का उत्तर विधानसभा के तीन वार्ड से
                  शंखनाद, धुआंधार प्रचार, जगह जगह अजीत का स्वागत, वंदन और
                  अभिनंदन
                </h6>
              </div>
            </div>
            <div className="Home-second-div-right-one">
              <img
                src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-4-3-220x150.jpg"
                alt=""
              />
              <div className="Home-second-div-right-one-inner">
                <p>6 hours ago</p>
                <h6>
                  एआईसीसी के सचिव एवं स्टार प्रचारक व छत्तीसगढ़ प्रभारी
                  सप्तगिरीशंकर उल्का का दौरा कार्यक्रम
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="Home-third-div">
          <h5>देश-दुनिया</h5>
          <hr />
          <div className="Home-third-div-content">
            <div className="Home-third-div-content-part">
              <img src="https://mirror24news.com/wp-content/uploads/2023/11/m-5-390x220.jpg" alt="" />
              <p>6 hours ago</p>
              <h5>चुनावी मैदान में उतरीं उमा भारती</h5>
              <p>भोपाल। मध्य प्रदेश के चुनावी मैदान में उमा भारती की एंट्री हो गई है। पूर्व सीएम बीजेपी प्रत्याशियों के समर्थन…</p>
            </div>
            <div className="Home-third-div-content-part"><img src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-27-1-390x220.jpg" alt="" />
              <p>6 hours ago</p>
              <h5>भोपाल में देर रात 800 पुलिसकर्मी एक साथ उतरे, 521 फरार बदमाश गिरफ्तार</h5>
              <p>भोपाल। मध्य प्रदेश में विधानसभा चुनाव से पहले राजधानी भोपाल पुलिस ने वारंटियों की धरपकड़ तेज कर दी है। सोमवार…</p></div>
          </div>
          <div className="Home-third-div-content">
            <div className="Home-third-div-content-part"><img src="https://mirror24news.com/wp-content/uploads/2023/11/1.jpg" alt="" />
              <p>6 hours ago</p>
              <h5>क्या आपके पास नहीं है पर्याप्त पैसा? इस वास्तु उपाय से लाभ होगा</h5>
              <p>वास्तु टिप्स: वास्तु शास्त्र में आज हम वास्तु उपायों के बारे में जानेंगे, जो आपके जीवन की छोटी-बड़ी समस्याओं से…</p></div>
            <div className="Home-third-div-content-part"><img src="https://mirror24news.com/wp-content/uploads/2023/11/Untitled-11-1-390x220.jpg" alt="" />
              <p>6 hours ago</p>
              <h5>NSUI जिला अध्यक्ष समेत कांग्रेस नेत्री निष्कासित</h5>
              <p>बालाघाट। मध्य प्रदेश में आगामी चुनाव के पहले कांग्रेस ने दो नेताओं के खिलाफ बड़ा एक्शन लिया है। बालाघाट जिले…</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
