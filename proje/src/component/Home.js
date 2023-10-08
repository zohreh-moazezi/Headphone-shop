import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="Home" id="home">
        <div className="text" data-aos="fade-zoom-in">
          <p className="wireless">Wireless</p>
          <div className="headphone">
            <h1 className="head">HEAD</h1>
            <h1 className="phone">PHONE</h1>
          </div>
          <div className="beat">
            <p className="beats">Beats Solo Pro Wireless </p>
            <span className="line">___</span>
          </div>
          <div className="save">
            <span className="off">__</span>
            <h2>SAVE 70% OFF</h2>
            <span className="off2">__</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
