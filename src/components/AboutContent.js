import React from 'react';
import './AboutContent.css';
import { Link } from 'react-router-dom';
import Wallpaper1 from "../assets/web-wallpaper1.jpg"
import Wallpaper2 from "../assets/web-wallpaper2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1 className='about-header'>Who am I?</h1>
    <section>
        <p>I'm a passionate and detail-oriented Front End Developer with a solid foundation in HTML, CSS, JavaScript, and ReactJS. My journey in web development has been a thrilling exploration of turning ideas into interactive and visually appealing experiences. 🚀</p>

        <h2>Skills:</h2>
        <ul>
            <li><strong>HTML/CSS:</strong> I excel in crafting clean, semantic HTML and elegant, responsive CSS to bring designs to life. 💻</li>
            <li><strong>JavaScript:</strong> With a strong command of JavaScript, I bring functionality to the forefront of user experiences. 🛠️</li>
            <li><strong>ReactJS:</strong> I specialize in building robust and scalable web applications using ReactJS. ⚛️</li>
        </ul>

        <h2>Projects:</h2>
        <ul>
            <li>
                <strong>Weather App (ReactJS):</strong>
                <p>Developed a dynamic weather application using ReactJS, integrating with a weather API to provide real-time updates on weather conditions. The user-friendly interface allows users to easily check the weather for any location. 🌐</p>
            </li>
            <li>
                <strong>Amazon Clone (HTML/CSS/JavaScript):</strong>
                <p>Successfully replicated the Amazon website using HTML, CSS, and JavaScript. This project involved meticulous attention to detail to recreate the layout, design, and functionality of the popular e-commerce platform. 🛍️</p>
            </li>
            <li>
                <strong>Portfolio Website (ReactJS):</strong>
                <p>Designed and implemented a personal portfolio website using ReactJS. This platform not only showcases my technical skills but also reflects my creative approach to web design, providing an interactive and engaging user experience. 🔗</p>
            </li>
            <li>
                <strong>Calculator (HTML/CSS/JavaScript):</strong>
                <p>Created a fully functional calculator using HTML, CSS, and JavaScript. The calculator supports basic arithmetic operations and provides a clean, intuitive interface for users to perform calculations effortlessly. 🧮</p>
            </li>
            <li>
                <strong>Todo List (HTML/CSS/JavaScript):</strong>
                <p>Developed a task management application with HTML, CSS, and JavaScript. This todo list allows users to add, delete, and mark tasks as complete, providing a simple yet effective solution for organizing daily activities. ✅</p>
            </li>
        </ul>

        <h2>Responsive Design:</h2>
        <p>Ensuring a seamless user experience across all devices is a priority for me. I employ responsive design principles to guarantee that every website and application I develop is accessible and visually appealing on various screen sizes. 📱</p>

        <h2>Tools and Workflow:</h2>
        <ul>
            <li>Version Control: Git/GitHub for efficient collaboration and code management. 🔄</li>
        </ul>

        <h2>Continuous Learning:</h2>
        <p>The tech world evolves rapidly, and I'm committed to staying ahead. I consistently explore new technologies, frameworks, and best practices to enhance my skills and deliver cutting-edge solutions. 📈</p>

        <p>Let's collaborate and turn your ideas into extraordinary digital experiences! Feel free to explore my projects, and don't hesitate to reach out if you have a project in mind or just want to connect. I'm excited about the possibilities that lie ahead in the ever-evolving landscape of web development. 🚀</p>
    </section>
        <Link to="/contact">
            <button className='btn'>CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={Wallpaper1} className='img' alt='image'/>
            </div>
            <div className='img-stack bottom'>
                <img src={Wallpaper2} className='img' alt='image'/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
