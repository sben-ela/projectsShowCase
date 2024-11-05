import server from "./assets/server.jpg";
import projectImage4 from "./assets/project4.jpg";
import PingPong from './assets/pingPong.jpg'
import byadeq from './assets/byadeq.jpg'
import market from './assets/market.jpg'
import inception from './assets/inception.jpg'
import Notepad from './assets/notePad.jpg'

export const projectDetails = [
  {
    title: "Web Server",
    image: server,
    concepts: "HTTP Server, Request Handling, Multiplexing, C++",
    description: `Develop a custom HTTP server from scratch in C++ to handle client requests efficiently. This project delves into networking fundamentals, HTTP methods, and status codes, with an emphasis on multiplexing and multi-threading to manage multiple client connections simultaneously. You’ll use sockets for efficient data transfer and explore techniques in C++ to build a high-performance, concurrent server.`,
    githubLink: "https://github.com/sben-ela/server",
  },

  {
    title: "Inception",
    image: inception,
    concepts: "Containerization, Docker Networking",
    description: `Develop a fully containerized environment for a multi-service app using Docker. Configure services like Nginx, MySQL, and internal networking to simulate a production-ready infrastructure for modern applications.`,
    githubLink: "https://github.com/sben-ela/inception",
  },
  
  {
    title: "ft_irc",
    image: projectImage4,
    concepts: "IRC Protocol, Real-Time Chat",
    description: `Create an IRC server to handle real-time messaging between clients. This project delves into socket programming for managing client connections and channels, offering insights into protocol handling and message broadcasting.`,
    githubLink: "https://github.com/sben-ela/Ft_irc",
  },
  
  {
    title: "ft_transcendence",
    image: PingPong,
    concepts: "Full-Stack Development, WebSockets, 3D Gaming",
    description: `Develop a full-stack web application with real-time multiplayer features using WebSockets. The back-end is built with Nest.js, leveraging PostgreSQL for database management, while the front-end utilizes React for user interactions and Three.js to render a 3D gaming environment. This project provides hands-on experience in 3D graphics, game physics, and creating an immersive, real-time multiplayer experience.`,
    githubLink: "https://github.com/sben-ela/ft_transcendence",
  },
  
  
  {
    title: "Philosophers Problem",
    image: byadeq,
    concepts: "Concurrency, Synchronization",
    description: `Implement the classic concurrency problem where multiple "philosophers" share resources without conflict. This project uses mutexes and semaphores to explore the fundamentals of multi-threaded programming and synchronization techniques.`,
    githubLink: "https://github.com/sben-ela/Philosophers",
  },

  {
    title: "Notepad App",
    image: Notepad,
    concepts: "RESTful API, State Management, MongoDb, React.js, Express.js",
    description: `Create a dynamic notepad app with React.js, featuring RESTful API and secure data storage via MongoDB or PostgreSQL. This project introduces essential web development concepts like user authentication, middleware, and front-end and back-end integration.`,
    githubLink: "https://github.com/sben-ela/notePad",
  },  

  {
    title: "E-Commerce Platform",
    image: market,
    concepts: "Microservices, Event-Driven Architecture, React, Express.js",
    description: `Build a scalable e-commerce platform using microservices and event-driven architecture. The back-end is powered by Express.js for handling core functionalities and inter-service communication through gRPC or REST, following domain-driven design principles. The front-end, developed with React, provides a dynamic and responsive user interface.`,
    githubLink: "https://github.com/sben-ela/E-commerce-website",
  },
  

  {
    title: "Cub3D",
    image: 'https://user-images.githubusercontent.com/55356071/112175592-a8cb2280-8bf7-11eb-8508-c3a13220fb8f.gif',
    concepts: "Ray Casting, 3D Graphics, C Programming language, Mlx",
    description: `Develop a first-person 3D maze game using ray-casting techniques. This project involves player movement, collision detection, and basic rendering, teaching the fundamentals of 3D graphics and interactive game environments with C programming.`,
    githubLink: "https://github.com/sben-ela/cub3D",
  }
];
