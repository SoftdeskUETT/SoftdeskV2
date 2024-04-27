import React from "react";
import Hero from "../components/Events/Hero";
import pic1 from "../assets/events/deepfake1.JPG";
import pic2 from "../assets/events/deepfake2.JPG";
import pic3 from "../assets/events/deepfake3.JPG";

import pic4 from "../assets/events/techno1.jpg";
import pic5 from "../assets/events/techno2.jpg";
import pic6 from "../assets/events/techno3.jpg";

import pic7 from "../assets/events/Ice1.JPG";
import pic8 from "../assets/events/Ice2.JPG";
import pic9 from "../assets/events/Ice3.JPG";

import pic10 from "../assets/events/road1.jpg";
import pic11 from "../assets/events/road2.jpg";
import pic12 from "../assets/events/road3.jpg";

import pic13 from "../assets/events/tour1.jpg";
import pic14 from "../assets/events/tour2.jpg";
import pic15 from "../assets/events/tour3.jpg";

import pic16 from "../assets/events/tech1.jpg";
import pic17 from "../assets/events/tech2.jpg";
import pic18 from "../assets/events/tech3.jpg";

import pic19 from "../assets/events/spec1.jpg";
import pic20 from "../assets/events/spec2.jpg";
import pic21 from "../assets/events/spec3.jpg";

import pic22 from "../assets/events/cyber1.jpg";
import pic23 from "../assets/events/cyber2.jpg";
import pic24 from "../assets/events/cyber3.jpg";

import pic25 from "../assets/events/lunch1.jpg";
import pic26 from "../assets/events/lunch2.jpg";
import pic27 from "../assets/events/lunch3.jpg";

import Event from "../components/Events/Event";
import Cabinet from "../components/Events/Cabinet";

const hero1 = {
  title: "DEEPFAKE WORKSHOP",
  subTitleHead: "DEEPFAKE WORKSHOP",
  subTitle: "helping students to engage with the revolutionary technology",
  content: `SoftDesk recently hosted a workshop led by esteemed advisor Sir Ali Javed on the cutting-edge topic of Deepfakes. Held on June 5, 2023, the event saw students engaging with this revolutionary technology, combining AI and image manipulation. Under Sir Ali Javed's guidance, participants explored the creation of realistic yet synthetic content by altering faces in videos or images. The workshop concluded with certificate distribution, acknowledging students' active involvement and commitment to expanding their knowledge in this emerging field.`,
  img1: pic1,
  img2: pic2,
  img3: pic3,
};

const event1 = {
  title: "TECHNOMELA",
  subTitleHead: "TechnoMela",
  subTitle: "empowering Students in Tech & Personal Branding",
  content:
    "Softdesk, the tech society of UET Taxila, hosted TechnoMela, a two-session seminar aimed at empowering students with insights into personal branding and the future of tech in Pakistan. The first session, led by Sumer Singh Rajpurohit, focused on creating personal brands, emphasizing consistency, authenticity, and creativity. The second session, led by Syed Husnain Tanweer Kazmi, delved into the future of tech in Pakistan, stressing the importance of continuous learning and collaboration. With over 200 attendees, TechnoMela provided a platform for students to learn from industry experts and connect with peers to foster student growth in the tech industry.",
  img1: pic4,
  img2: pic5,
  img3: pic6,
};

const hero2 = {
  title: "ICEBREAKING 2K21",
  subTitleHead: "ICEBREAKING",
  subTitle: "Fostering Community & Collaboration",
  content: ` Softdesk at UET Taxila organized "Ice Breaking," aiming to foster camaraderie among 20-session software engineering students. The event kicked off with introductions and team formation to encourage interaction. Various team-building activities and games followed, promoting effective communication and teamwork. Students shared humorous anecdotes and participated in a "guess the song" challenge, showcasing their talents. Refreshments were provided, allowing students to network and exchange contact information. The event received positive feedback, with students expressing satisfaction and eagerness to engage further.`,
  img1: pic7,
  img2: pic8,
  img3: pic9,
};

const event2 = {
  title: "ROADMAP TO BECOME A SOFTWARE ENGINEER",
  subTitleHead: "ROADMAP",
  subTitle: "Insights from IT Head, SoftDesk",
  content:
    'Softdesk, UET Taxila, hosted an enlightening seminar titled "Roadmap to becoming a software engineer" by esteemed speaker Shahzaib Ahmed. The session guided students on achieving success in software engineering, emphasizing the importance of clear goals and a passion for technology. Ahmed discussed different software engineering fields and their respective roadmaps, encouraging students to stay updated with technological trends. The interactive session saw active participation from students, who left feeling inspired and motivated.',
  img1: pic10,
  img2: pic11,
  img3: pic12,
};

const hero3 = {
  title: "RAMADAN FUTSAL TOURNAMENT 2019",
  subTitleHead: "",
  subTitle: "Promoting Sportsmanship and Unity at the University",
  content: `The Ramzan Futsal Tournament 2019 promoted healthy competition among university students, held in the evenings on the campus football ground, attracting teams from different departments, officiated by trained referees, fostering sportsmanship and camaraderie, with winners awarded trophies and certificates, reflecting the success of Softdesk's initiative to encourage physical activity and teamwork.`,
  img1: pic13,
  img2: pic14,
  img3: pic15,
};

const event3 = {
  title: "TECHREX",
  subTitleHead: "",
  subTitle: "Softdesk's Interdepartmental Coding & Design Showdown",
  content:
    "Softdesk's Techrex competition, held in the Software Department's CG Lab, featured coding and design challenges, fostering creativity and skill development among students across departments, with experienced judges evaluating participants' work and awarding certificates and prizes, reflecting Softdesk's commitment to nurturing talent and promoting innovation in technology.",
  img1: pic16,
  img2: pic17,
  img3: pic18,
};

const hero4 = {
  title: "Tech Spectrum",
  subTitleHead: "",
  subTitle: "Empowering Junior Students for IT Careers",
  content: `The "Tech Spectrum" event in November 2023 provided junior students with insights into software engineering and IT careers through talks by final year students. Topics covered included Mobile App Development, Website Development, Cloud Computing, Data Science, Cybersecurity, and UI/UX Design. Post-event support includes tech guidance, surveys, course info, WhatsApp groups, project meetings, expert sessions, and certificates to empower students for IT careers.`,
  img1: pic19,
  img2: pic20,
  img3: pic21,
};

const event4 = {
  title: "Cyber Security",
  subTitleHead: "",
  subTitle: "Unveiling Pakistan's Cyber Landscape3",
  content:
    "On January 17, 2024, SoftDesk hosted a cybersecurity event with Mr. Ammar Mazhar, Pakistan's Leading Cyber Sleuth, sharing insights from his five-year experience at FIA's CyberCrime Reporting Center. Attendees gained valuable knowledge on cyber threats and their impact on Pakistan, along with FIA's strategies to combat them, enhancing awareness among all session students.",
  img1: pic22,
  img2: pic23,
  img3: pic24,
};

const hero5 = {
  title: "Softdesk's Alumni & Annual Lunch 2024",
  subTitleHead: "",
  subTitle: "Bridging Past and Present in IT",
  content: `Softdesk's Alumni & Annual Lunch 2024, held on January 30, warmly welcomed alumni from various IT domains. Keynote speakers and panel discussions explored coding, testing, and backend development. Attendees gained valuable insights from experts and connected during networking breaks. The event provided students a unique chance to engage with industry professionals, fostering growth and knowledge exchange within the IT community.`,
  img1: pic25,
  img2: pic26,
  img3: pic27,
};

const Events = () => {
  return (
    <div>
      <Hero
        title={hero5.title}
        subTitleHead={hero5.subTitleHead}
        subTitle={hero5.subTitle}
        content={hero5.content}
        img1={hero5.img1}
        img2={hero5.img2}
        img3={hero5.img3}
      />

      <Event
        title={event4.title}
        subTitleHead={event4.subTitleHead}
        subTitle={event4.subTitle}
        content={event4.content}
        img1={event4.img1}
        img2={event4.img2}
        img3={event4.img3}
      />

      <Hero
        title={hero4.title}
        subTitleHead={hero4.subTitleHead}
        subTitle={hero4.subTitle}
        content={hero4.content}
        img1={hero4.img1}
        img2={hero4.img2}
        img3={hero4.img3}
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
        title={hero1.title}
        subTitleHead={hero1.subTitleHead}
        subTitle={hero1.subTitle}
        content={hero1.content}
        img1={hero1.img1}
        img2={hero1.img2}
        img3={hero1.img3}
      />

      <Event
        title={event2.title}
        subTitleHead={event2.subTitleHead}
        subTitle={event2.subTitle}
        content={event2.content}
        img1={event2.img1}
        img2={event2.img2}
        img3={event2.img3}
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

      <Event
        title={event3.title}
        subTitleHead={event3.subTitleHead}
        subTitle={event3.subTitle}
        content={event3.content}
        img1={event3.img1}
        img2={event3.img2}
        img3={event3.img3}
      />
      <Hero
        title={hero3.title}
        subTitleHead={hero3.subTitleHead}
        subTitle={hero3.subTitle}
        content={hero3.content}
        img1={hero3.img1}
        img2={hero3.img2}
        img3={hero3.img3}
      />

      <Cabinet />
    </div>
  );
};

export default Events;
