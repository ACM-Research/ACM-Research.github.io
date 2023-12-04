import React from "react";
import "../styles/main.css";
import "../styles/navbar.css";
import Navbar from "./navbar.js";

import Anish from "../assets/Leads/Anish.png";
import Naveen from "../assets/Leads/Naveen.png";
import Nivedha from "../assets/Leads/Nivedha.png";
import Philip from "../assets/Leads/Philip.png";
import Rishit from "../assets/Leads/Rishit.png";
import Rohan from "../assets/Leads/Rohan.png";
import Rowan from "../assets/Leads/Rowan.png";
import Saanvi from "../assets/Leads/Saanvi.png";
import Victoria from "../assets/Leads/Victoria.jpg";
import Vivi from "../assets/Leads/Vivi.png";

export const Main = () => {
  return (
    <div className="module-border-wrap">
      <div className="navbarContainer">
        <Navbar />
      </div>

      <div>
        <h3 className="schedHeader">About: </h3>{" "}
        <p className="text">
          ACM Research offers a semester-long program where, under the
          mentorship of a UTD faculty member and a student lead, participants
          collaborate on diverse research projects, each focusing on a unique
          research topic, covering a range of niches.
        </p>
        <br />
        <h3 className="schedHeader">Itinerary: </h3>{" "}
        <h4 className="text">
          8:00 pm - 8:10 pm → Symposium Start
          <br />
          8:10 pm - 9:10 pm → First 5 Presentations
          <br />
        </h4>
        <div className="projTitle">
          <span className="tab"></span>Beyond Gaming
          <br />
          <span className="tab"></span>Exploring Decentralized Apps
          <br />
          <span className="tab"></span>ForensicSight
          <br />
          <span className="tab"></span>Leveraging Explainable AI
          <br />
          <span className="tab"></span>Conceal and Reveal
        </div>
        <h4 className="text">
          9:10 pm - 9:20 pm → Break Time with Dinner Served
          <br />
          9:20 pm - 10:20 pm → Last 5 Presentations
          <br />
        </h4>
        <div className="projTitle">
          <span className="tab"></span>Coding Semantics
          <br />
          <span className="tab"></span>Auditory Unveil
          <br />
          <span className="tab"></span>Scaffold
          <br />
          <span className="tab"></span>Blockchain-Based Fed Learning
          <br />
          <span className="tab"></span>Enhancing Cancer Detection
        </div>
        <h4 className="text">
          10:20 pm - 10:30 pm → Judge Deliberation + Winner Announcement
          <br />
          10:30 pm Onward → Poster Walk{" "}
        </h4>
      </div>

      <h1 className="projHeader">Beyond Gaming</h1>
      <div className="imgContainer">
        <img className="researchLeadImage" src={Vivi} alt="Research Lead" />
      </div>
      <div className="researchLeadCaption">
        <h3>
          Research Lead: <br /> Vaishnavi Josyula
        </h3>
      </div>
      <div className="participantsList">
        <p>
          {" "}
          <u>Participants:</u> <br />
          Abbas Khawaja <br />
          Jose Garcia <br />
          Korbin Shulz <br />
          Sowresh Mecheri-Senthil <br />
          Terrell Johnson <br />
        </p>
      </div>
      <div className="summaryContainer">
        <p className="summary">
          Streaming has become a popular form of online entertainment with AI
          streamers recently gaining traction. In this project, you will combine
          multiple neural networks to create a virtual streamer who can play
          games, interact with the chat, and create engaging content, among
          other aspects. Ultimately, you will deploy the streamer to a streaming
          platform like Twitch.{" "}
        </p>
      </div>

      <h1 className="projHeader">Exploring Decentralized Apps</h1>
      <div className="imgContainer">
        <img className="researchLeadImage" src={Rishit} alt="Research Lead" />
      </div>
      <div className="researchLeadCaption">
        <h3>
          Research Lead: <br /> Rishit Viral
        </h3>
      </div>
      <div className="participantsList">
        <p>
          {" "}
          <u>Participants:</u> <br />
          Ridwan Shakoor <br />
        </p>
      </div>
      <div className="summaryContainer">
        <p className="summary">
          Decentralized applications have emerged as a transformative force in
          the world of blockchain technology, enabling transparent, secure, and
          censorship-resistant interactions on a global scale. Among the
          emerging blockchain platforms, Solana stands out for its
          high-performance capabilities and scalability, making it a promising
          foundation for building dApps that can handle complex tasks and
          accommodate growing user demands. In this project, we delve into the
          exciting realm of decentralized applications on the Solana blockchain,
          exploring their potential to revolutionize industries and reshape the
          way we engage with digital services. Through comprehensive analysis
          and hands-on development, we aim to uncover Solana's unique features
          and advantages while addressing challenges and providing insights into
          the future landscape of decentralized applications.{" "}
        </p>
      </div>

      <h1 className="projHeader">ForensicSight</h1>
      <div className="imgContainer">
        <img className="researchLeadImage" src={Nivedha} alt="Research Lead" />
      </div>
      <div className="researchLeadCaption">
        <h3>
          Research Lead: <br /> Nivedha Sreenivasan
        </h3>
      </div>
      <div className="summaryContainer">
        <p className="summary">
          To assist forensics experts in identifying what events took place at
          the scene of a crime, you will learn the basics of image
          classification and train a model using convolutional neural networks
          (CNNs) to classify bloodstain patterns commonly found in crime scenes
          into three categories: passive, transfer, and impact.{" "}
        </p>
      </div>
      <h1 className="projHeader">Leveraging Explainable AI</h1>
      <div className="imgContainer">
        <img className="researchLeadImage" src={Rowan} alt="Research Lead" />
        <p className="researchLeadCaption">Rowan</p>
        <br />
      </div>

      <h1 className="projHeader">Conceal and Reveal</h1>
      <div className="imgContainer">
        <img className="researchLeadImage" src={Victoria} alt="Research Lead" />
        <p className="researchLeadCaption">Victoria</p>
        <br />
      </div>

      <h1 className="header">Intermission</h1>
      <hr />
      <br />

      <h1 className="projHeader">Coding Semantics</h1>
      <div className="imgContainer">
        <img className="researchLeadImage" src={Anish} alt="Research Lead" />
        <p className="researchLeadCaption">Anish</p>
        <br />
      </div>

      <h1 className="projHeader">Auditory Unveil</h1>
      <div className="imgContainer">
        <img className="researchLeadImage" src={Saanvi} alt="Research Lead" />
        <p className="researchLeadCaption">Saanvi</p>
        <br />
      </div>

      <h1 className="projHeader">Scaffold</h1>
      <div className="imgContainer">
        <img className="researchLeadImage" src={Naveen} alt="Research Lead" />
        <p className="researchLeadCaption">Naveen</p>
        <br />
      </div>

      <h1 className="projHeader">Blockchain-Based Federated Learning</h1>
      <div className="imgContainer">
        <img className="researchLeadImage" src={Rohan} alt="Research Lead" />
        <p className="researchLeadCaption">Rohan</p>
        <br />
      </div>

      <h1 className="projHeader">Enhancing Cancer Detection</h1>
      <div className="imgContainer">
        <img className="researchLeadImage" src={Philip} alt="Research Lead" />
        <p className="researchLeadCaption">Philip</p>
        <br />
      </div>
    </div>
  );
};

export default Main;
