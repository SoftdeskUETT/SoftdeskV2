import React from "react";
import Hero from "../components/Events/Hero";
import pic1 from "../assets/events/hero-pic-1.png";
import pic2 from "../assets/events/hero-pic-2.png";
import pic3 from "../assets/events/hero-pic-3.png";

import pic1a from "../assets/events/event-2-pic-1.jpg";
import pic2a from "../assets/events/event-2-pic-2.jpg";
import pic3a from "../assets/events/event-2-pic-3.jpg";
import pic1b from "../assets/events/event-3-pic-1.jpg";
import pic2b from "../assets/events/event-3-pic-2.jpg";
import pic3b from "../assets/events/event-3-pic-3.jpg";
import Event from "../components/Events/Event";
import Cabinet from "../components/Events/Cabinet";

const hero1 = {
  title: " DEEPFAKE WORKSHOP",
  subTitleHead: "WEEKEND UX",
  subTitle: "providing the best opportunities to the students around the glob.",
  content: ` Weekend UX, is a UI/UX Design Academy in Delhi involved in User
                Experience and User Interface Training and Consulting. It was
                started in 2023 and passionate towards User Interface Design/
                User Experience Design, Human Computer Interaction Design.
                Humanoid is gushing towards competence to acquire knowledge and
                have a wide understanding towards the sphere through the
                foremost courses in the area of UI/UX Design, by strengthening
                up your skills, for your golden future`,
  img1: pic1,
  img2: pic2,
  img3: pic3,
};

const event1 = {
  title: "TECHNOMELA",
  subTitleHead: "TechnoMela",
  subTitle: "to help students learn the art of personal branding",
  content:
    "Weekend UX, is a UI/UX Design Academy in Delhi involved in User Experience and User Interface Training and Consulting. It was started in 2023 and passionate towards User Interface Design/ User Experience Design, Human Computer Interaction Design. Humanoid is gushing towards competence to acquire knowledge and have a wide understanding towards the sphere through the foremost courses in the area of UI/UX Design, by strengthening up your skills, for your golden future",
  img1: pic1b,
  img2: pic2b,
  img3: pic3b,
};

const hero2 = {
  title: " ICEBREAKING 2K21",
  subTitleHead: "WEEKEND UX",
  subTitle: "providing the best opportunities to the students around the glob.",
  content: ` Weekend UX, is a UI/UX Design Academy in Delhi involved in User
                Experience and User Interface Training and Consulting. It was
                started in 2023 and passionate towards User Interface Design/
                User Experience Design, Human Computer Interaction Design.
                Humanoid is gushing towards competence to acquire knowledge and
                have a wide understanding towards the sphere through the
                foremost courses in the area of UI/UX Design, by strengthening
                up your skills, for your golden future`,
  img1: pic1a,
  img2: pic2a,
  img3: pic3a,
};
const Events = () => {
  return (
    <div>
      <Hero
        title={hero1.title}
        subTitleHead={hero1.subTitleHead}
        subTitle={hero1.subTitle}
        content={hero1.content}
        img1={hero1.img1}
        img2={hero1.img2}
        img3={hero1.img3}
      />
      <Event
        title={event1.title}
        subTitleHead={event1.subTitleHead}
        subTitle={event1.subTitle}
        content={event1.content}
        img1={event1.img1}
        img2={event1.img2}
        img3={event1.img3}
      />
      <Hero
        title={hero2.title}
        subTitleHead={hero2.subTitleHead}
        subTitle={hero2.subTitle}
        content={hero2.content}
        img1={hero2.img1}
        img2={hero2.img2}
        img3={hero2.img3}
      />
      <Cabinet />
    </div>
  );
};

export default Events;
