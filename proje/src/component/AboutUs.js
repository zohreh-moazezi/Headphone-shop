import React from "react";
import womanPic from "../picture/woman.jpg";

const AboutUs = () => {
  return (
    <div id="about">
      <div className="about-texts">
        <h3 className="about-text title">
          PEOPLE ARENʼT HEARING ALL THE MUSIC
          <div class="aurora">
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
          </div>
        </h3>
        <p className="about-text">
          Beats by Dr. Dre (Beats) is a leading audio brand founded in 2006 by
          Dr. Dre and Jimmy Iovine. Through its family of premium consumer
          headphones, earphones and speakers, Beats has introduced an entirely
          new generation to the possibilities of premium sound entertainment.
          The brand’s continued success helps bring the energy, emotion and
          excitement of playback in the recording studio back to the listening
          experience for music lovers worldwide. Beats was acquired by Apple
          Inc. in July 2014.
        </p>
      </div>
      <div>
        {" "}
        <img src={womanPic} className="woman" />
      </div>
    </div>
  );
};
export default AboutUs;
