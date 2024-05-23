import ProjectCard from "./ProjectCards.jsx";
import dictionary from "../../Images/screenshots/dictionary_compressed.jpg";
import signup from "../../Images/screenshots/signup_compressed.jpg";
import space from "../../Images/screenshots/space_compressed.jpg";
import portfolio from "../../Images/screenshots/oldportfolio_compressed.jpg";
import snapshot from "../../Images/screenshots/snapshot_compressed.jpg";
import designo from "../../Images/screenshots/designo.jpg";
import lootlookout from "../../images/screenshots/Loot-look-out.png";
const Projects = () => {
  const projectData = [
    {
      imageSrc: `${lootlookout}`,
      name: "Loot Look Out 💎 COMING SOON",
      subtitle: "A full-stack web app for time-sensitive deals.",
      description:
        "Created a full-stack application designed for users to find and share limited-time deals. Implemented real-time updates and developed efficient data handling to ensure users receive the most current information, with a responsive front-end design that ensures a seamless user experience.",
      tech: ["MongoDB", "Express", "React", "Tailwind"],
      githubLink: "https://github.com/GeorgeFlood/Designo",
      liveDemoLink: "https://cozy-sprite-c52331.netlify.app/",
    },
    {
      imageSrc: `${designo}`,
      name: "Designo 🔨",
      subtitle: "An eye-catching portfolio for a creative agency.",
      description:
        "Designed and developed a modern portfolio focusing on visual appeal and user engagement. Integrated dynamic animations and intuitive user interfaces with smooth transitions to enhance user interaction.",
      tech: ["React", "CSS"],
      githubLink: "https://github.com/GeorgeFlood/Designo",
      liveDemoLink: "https://cozy-sprite-c52331.netlify.app/",
    },
    {
      imageSrc: `${snapshot}`,
      name: "Snapshot 📸",
      subtitle: "A user-centric photo-sharing platform.",
      description:
        "Built a platform where users can upload, share, and explore photos. Emphasized user experience and performance optimization by creating interactive user profiles and robust backend integration to support high traffic and data management.",
      tech: ["React", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/snapshot-web",
      liveDemoLink: "https://george-photosnap.netlify.app/",
    },
    {
      imageSrc: `${portfolio}`,
      name: "Old Portfolio 🎨",
      subtitle: "My previous portfolio showcasing my skills and projects.",
      description:
        "Designed my initial portfolio to display my skills and past projects. Utilized modular SCSS for maintainability and interactive JavaScript components to enhance user interaction, focusing on an engaging and professional online presence.",
      tech: ["HTML", "Javascript", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/hello-world-portfolio",
      liveDemoLink: "https://georgeflood.github.io/hello-world-portfolio/",
    },
    {
      imageSrc: `${space}`,
      name: "Space Tourism 🚀",
      subtitle: "A visually appealing space exploration site.",
      description:
        "Developed a captivating website for space tourism, providing users with information and visuals about different celestial destinations. Implemented smooth navigation and eye-catching visual effects to enhance user engagement.",
      tech: ["HTML", "Javascript", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/space-tourism",
      liveDemoLink: "https://georgeflood.github.io/space-tourism/index.html",
    },
    {
      imageSrc: `${dictionary}`,
      name: "Dictionary App 📚",
      subtitle: "A sleek dictionary app for quick word definitions.",
      description:
        "Created a dictionary application that allows users to quickly find definitions and expand their vocabulary. Integrated a third-party API for real-time data, with a modern, responsive interface for efficient data retrieval and display.",
      tech: ["React", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/dictionary-app",
      liveDemoLink: "https://georgeflood.github.io/dictionary-app/",
    },
    {
      imageSrc: `${signup}`,
      name: "Sign up Form ✍️",
      subtitle: "A modern sign-up form for user registration.",
      description:
        "Developed an aesthetically pleasing and functional sign-up form focusing on form validation and user experience. Implemented smooth transitions to provide a user-friendly registration process.",
      tech: ["React", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/signup-react",
      liveDemoLink: "https://georgeflood.github.io/signup-react/",
    },
  ];

  return (
    <div className="projects">
      <div className="projects__intro" id="project">
        <h4>PORTFOLIO</h4>
        <h3>From Idea to URL: Converting Concepts into Clicks 🧩</h3>
      </div>

      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          imageSrc={project.imageSrc}
          name={project.name}
          subtitle={project.subtitle}
          description={project.description}
          tech={project.tech}
          githubLink={project.githubLink}
          liveDemoLink={project.liveDemoLink}
          reversed={index % 2 === 1}
        />
      ))}
    </div>
  );
};

export default Projects;
