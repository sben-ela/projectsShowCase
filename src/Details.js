import server from "./assets/server.jpg";
import projectImage4 from "./assets/project4.jpg";
import PingPong from './assets/pingPong.jpg'
import byadeq from './assets/byadeq.jpg'
import market from './assets/market.jpg'
import inception from './assets/inception.jpg'
import cube from './assets/cube.jpeg'
import Notepad from './assets/notePad.jpg'
export const projectDetails = [
  {
    title: "Webserve",
    image: server,
    concepts: "HTTP Server from Scratch, Socket Programming, Request Handling",
    description: `Develop a custom HTTP server that can handle client requests, parse headers, and serve static files. By creating a web server from scratch, you’ll gain a strong understanding of networking fundamentals, HTTP methods, status codes, and how data flows through an HTTP request-response cycle. The project will involve setting up a server to listen on specified ports, handling requests through sockets, and implementing multi-threading for concurrent connections.`,
    githubLink: "https://github.com/sben-ela/server",
  },
  
  {
    title: "Inception",
    image: inception,
    concepts: "Containerization, Multi-Service Architecture, Nginx, MySQL, Docker Networking",
    description: `Create a fully containerized infrastructure for a multi-service web application. Using Docker, you'll deploy services such as Nginx for web traffic management, MySQL for database storage, and custom application containers. This project will help you learn about Docker Compose, network linking, and managing service dependencies within a containerized ecosystem. It’s an excellent exercise in microservices, load balancing, and deploying applications using containerization.`,
    githubLink: "https://github.com/sben-ela/inception  ",
  },
  
  {
    title: "ft_irc",
    image: projectImage4,
    concepts: "IRC Protocol, Sockets, Real-Time Chat, Client-Server Architecture",
    description: `Develop an IRC (Internet Relay Chat) server that allows multiple clients to connect, join channels, and communicate in real-time. This project focuses on low-level socket programming to handle multiple client connections and channel management. By building this server, you will dive deep into real-time communication protocols, multi-threaded server architecture, and techniques for managing client states and message broadcasting.`,
    githubLink: "https://github.com/marineks/Ft_irc",
  },
  
  {
    title: "ft_transcendence",
    image: PingPong,
    concepts: "Full-Stack Development, Real-Time Web Applications, Websockets, Authentication",
    description: `Develop a full-stack web application that integrates real-time capabilities such as chat and gaming. This project combines front-end and back-end development, authentication, database management, and WebSocket integration for real-time features. The application can include multiplayer gameplay, user accounts, and leaderboards, giving you experience with technologies such as Express.js, PostgreSQL, and front-end frameworks like React.`,
    githubLink: "https://github.com/sben-ela/ft_transcendence",
  },
  
  {
    title: "Philosophers Problem",
    image: byadeq,
    concepts: "Concurrency, Synchronization, Deadlock Prevention, Threading",
    description: `Implement the classic computer science problem known as the Dining Philosophers Problem to learn about concurrency and synchronization. This project focuses on managing shared resources, preventing deadlocks, and utilizing threading or processes to handle simultaneous tasks. You'll use mutexes or semaphores to synchronize the access to resources and explore the fundamentals of multithreaded programming.`,
    githubLink: "https://github.com/sben-ela/Philosophers",
  },
  {
    title: "Notepad App",
    image: Notepad,
    concepts: "Full-Stack Development, RESTful API, CRUD Operations, State Management",
    description: `Create a simple yet powerful notepad application where users can create, edit, delete, and organize their notes. This full-stack project uses Express.js for the backend API to manage CRUD (Create, Read, Update, Delete) operations and React.js for a dynamic, responsive front-end. The project introduces you to setting up RESTful APIs, handling state management on the client side, and securely storing data with a MongoDB or PostgreSQL database. This app will teach you essential web development skills, such as implementing user authentication, using middleware for security, and managing front-end and back-end interactions seamlessly.`,
    githubLink: "https://github.com/sben-ela/notePad",
  },  
  {
    title: "E-Commerce Platform",
    image: market,
    concepts: "Microservices, Event-Driven Architecture, Order and Payment Processing",
    description: `Develop an e-commerce platform with a microservices architecture, where each service (e.g., catalog, payment, order, and user) operates independently. The project requires the use of Docker for containerization, Kafka for event streaming, and gRPC or REST for communication. Gain hands-on experience with service decoupling, ensuring scalability, fault tolerance, and managing inter-service communication.`,
    githubLink: "https://github.com/sben-ela/E-commerce-website",
  },
  {
    title: "Cube3D",
    image: cube,
    concepts: "Ray Casting, 3D Rendering, Math for Graphics, Game Development",
    description: `Develop a first-person perspective 3D game engine that renders a maze using ray-casting techniques. This project focuses on simulating a 3D environment using 2D mathematics and involves creating a simple game world where players can navigate through corridors and walls. By working on Cube3D, you’ll learn about ray-casting algorithms, handling player movement and collision, and the basics of rendering graphics efficiently. This project provides hands-on experience with game physics, matrix transformations, and building interactive environments with C.`,
    githubLink: "https://github.com/sben-ela/cub3D",
  }
  
]
