import React from 'react';
import '../styles/main.css';
import '../styles/navbar.css';
import Navbar from './navbar.js';
import Entry from './entry.js';

import Anish from '../assets/Leads/Anish.png';
import Naveen from '../assets/Leads/Naveen.png';
import Nivedha from '../assets/Leads/Nivedha.png';
import Philip from '../assets/Leads/Philip.png';
import Rishit from '../assets/Leads/Rishit.png';
import Rohan from '../assets/Leads/Rohan.png';
import Rowan from '../assets/Leads/Rowan.png';
import Saanvi from '../assets/Leads/Saanvi.png';
import Victoria from '../assets/Leads/Victoria.jpg';
import Vivi from '../assets/Leads/Vivi.png';
import MrPeechi from '../assets/mr-peechi.png';

export const Main = () => {
    return (
        <div className="module-border-wrap">
            <div className="navbarContainer">
                <Navbar />
            </div>

            <div>
                <h3 className="schedHeader">About</h3>
                <p className="text">
                    ACM Research offers a semester-long program where, under the mentorship of a UTD faculty member and
                    a student lead, participants collaborate on diverse research projects, each focusing on a unique
                    research topic, covering a range of niches.
                </p>
                <h3 className="schedHeader">Itinerary</h3>
                <p className="text">8:00 pm - 8:10 pm → Symposium Start</p>
                <p className="text">8:10 pm - 9:10 pm → First 5 Presentations</p>
                <div className="projTitle">
                    <span className="tab">Beyond Gaming</span>
                    <span className="tab">Exploring Decentralized Apps</span>
                    <span className="tab">ForensicSight</span>
                    <span className="tab">Leveraging Explainable AI</span>
                    <span className="tab">Conceal and Reveal</span>
                </div>
                <p className="text">9:10 pm - 9:20 pm → Break Time with Dinner Served</p>
                <p className="text">9:20 pm - 10:20 pm → Last 5 Presentations</p>
                <div className="projTitle">
                    <span className="tab">Coding Semantics</span>
                    <span className="tab">Auditory Unveil</span>
                    <span className="tab">Scaffold</span>
                    <span className="tab">Blockchain-Based Fed Learning</span>
                    <span className="tab">Enhancing Cancer Detection</span>
                </div>
                <p className="text">10:20 pm - 10:30 pm → Judge Deliberation + Winner Announcement</p>
                <p className="text">10:30 pm Onward → Poster Walk</p>
            </div>
            <div className="peechi">
                <img src={MrPeechi} alt="Mr. Peechi" className="peechi-img" />
            </div>

            <Entry
                src={Vivi}
                lead="Vaishnavi Josyula"
                participants={[
                    'Abbas Khawaja',
                    'Jose Garcia',
                    'Korbin Shulz',
                    'Sowresh Mecheri-Senthil',
                    'Terrell Johnson',
                ]}
                name="Beyond Gaming"
                summary="Streaming has become a popular form of online entertainment with AI streamers recently gaining traction.
        In this project, you will combine multiple neural networks to create a virtual streamer who can play games,
        interact with the chat, and create engaging content, among other aspects. Ultimately, you will deploy the streamer
        to a streaming platform like Twitch."
            />

            <Entry
                src={Rishit}
                lead="Rishit Viral"
                participants={['Ridwan Shakoor']}
                name="Exploring Decentralized Apps"
                summary="Decentralized applications have emerged as a transformative force in the world of blockchain technology, enabling transparent, secure,
        and censorship-resistant interactions on a global scale. Among the emerging blockchain platforms, Solana stands out for its high-performance
        capabilities and scalability, making it a promising foundation for building dApps that can handle complex tasks and accommodate growing
        user demands. In this project, we delve into the exciting realm of decentralized applications on the Solana blockchain, exploring their
        potential to revolutionize industries and reshape the way we engage with digital services. Through comprehensive analysis and hands-on
        development, we aim to uncover Solana's unique features and advantages while addressing challenges and providing insights
        into the future landscape of decentralized applications."
            />

            <Entry
                src={Nivedha}
                lead="Nivedha Sreenivasan"
                participants={['Aarushi Gupta', 'Abis Naqvi', 'Amulya Rayabhagi', 'Sriram Sendhil', 'Zara Iqbal']}
                name="ForensicSight"
                summary="To assist forensics experts in identifying what events took place at the scene of a crime, you will
        learn the basics of image classification and train a model using convolutional neural networks (CNNs)
        to classify bloodstain patterns commonly found in crime scenes into three categories: passive, transfer, and impact."
            />

            <Entry
                src={Rowan}
                lead="Rowan White"
                participants={['Aaron Barthwal', 'Khiem Nguyen', 'Laya Srinivas', 'Ram Gudur', 'Sanya Oak']}
                name="Leveraging Explainable AI"
                summary="AI is often seen as less biased than humans, but it can inherit biases from human-curated data,
affecting its decisions. For example, biased hiring practices can lead AI to unfairly rank job resumes
based on names. AI's inner workings are often unclear, creating transparency issues. This project delves
into various AI models and how XAI can unveil their operations. As a team, you'll select a model and a
real-world issue to explore, then use XAI to examine and improve that model."
            />

            <Entry
                src={Victoria}
                lead="Victoria Vynnychok"
                participants={['Aaryaa Moharir', 'Daniel Suh', 'Ermina Ashraf', 'Izma Khurram', 'Lerich Osay']}
                name="Conceal and Reveal"
                summary="Steganography is used to conceal information within plain sight, while Steganalysis is employed to reveal
        this information. You will hide messages within images and then utilize various techniques to detect and unveil
        the concealed content. Afterward, you will train a machine learning model to classify images that contain hidden information."
            />

            <hr />
            <h1 className="header">Intermission</h1>
            <hr />

            <Entry
                src={Anish}
                lead="Anish Nyalakonda"
                participants={['Ahmad Bajwa', 'Aditya Kumar', 'Atharva Biyani', 'Jack Le', 'Pranava Ravindran']}
                name="Coding Semantics"
                summary="We will be developing a sentiment analysis model for detecting whether a movie review is positive or negative.
        Specifically, we will be delving into Natural Language Processing (NLP) to construct a sentiment analysis model.
        Our primary objective is to create a Neural Network that is capable of ascertaining whether a given movie review carries
        a positive or negative sentiment so that we can unravel the intricate emotions embedded within movie reviews"
            />

            <Entry
                src={Saanvi}
                lead="Saanvi Bala"
                participants={['George Contreras', 'Harper Wood', 'Leila Igwegbe', 'Oscar Lay', 'Thejaswin Kumaran']}
                name="Auditory Unveil"
                summary="This project focuses on using audio analysis techniques in combination with a Convolutional Neural Network (CNN) model to detect
    emotions in speech. It's designed to provide a framework for understanding and recognizing emotions in spoken language, which has
    practical applications in various fields, including human-computer interaction, sentiment analysis, and mental health monitoring."
            />

            <Entry
                src={Naveen}
                lead="Naveen Mukkatt"
                participants={['Elijah Walker', 'Luigi Victorelli', 'Matthew Biji', 'Sophie Tran']}
                name="Scaffold"
                summary="Humans break down complex tasks into simpler steps, so what if we took the same approach towards
        teaching AIs how to navigate their environment? In Scaffold, you will try to answer this question
        by studying various reinforcement learning algorithms and applying them to AIs as they learn to navigate
        their environment. The AI will be piloting a 3D character in a game engine, so if you have familiarity
        with game design or Unity/Unreal (hi ATEC majors), you're an ideal fit!"
            />

            <Entry
                src={Rohan}
                lead="Rohan Dave"
                participants={[
                    'Akshat Sharma',
                    'Bryant Hargreaves',
                    'Dhruv Bansal',
                    'Timothy Naumov',
                    'Viswaretas Kotra',
                ]}
                name="Blockchain-Based Federated Learning"
                summary="Large model training demands immense computing power. Federated learning presents an innovative solution by leveraging
        distributed devices instead of relying on a single machine. Blockchain's distinct properties form an ideal base for interactions
        in this setup. You will learn the basics of deep learning and blockchain to implement federated learning using Ethereum."
            />

            <Entry
                src={Philip}
                lead="Philip Lee"
                participants={['Ela Guo', 'Dravin Raj', 'Joshua Valiaveedu', 'Rishabh Medhi']}
                name="Enhancing Cancer Detection"
                summary="We aim to rigorously evaluate the efficiency of a Large Language Model (LLM) represented by RoBERTa
    in addressing a critical classification challenge: the early detection of cancer. Throughout this study, you will gain a
    deep understanding of the Transformer Architecture which laid the foundation for all LLMs, and provide insights into addressing
    critical real-world challenges, contributing to your knowledge of both machine learning and medical applications."
            />
        </div>
    );
};

export default Main;
