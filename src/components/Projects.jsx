import ProjectCard from "./ProjectCards.jsx";
import dictionary from "../../Images/screenshots/dictionary_compressed.jpg";
import signup from "../../Images/screenshots/signup_compressed.jpg";
import weather from "../../Images/screenshots/weather_compressed.jpg";
import space from "../../Images/screenshots/space_compressed.jpg";
import portfolio from "../../Images/screenshots/oldportfolio_compressed.jpg";
import snapshot from "../../Images/screenshots/snapshot_compressed.jpg";
const Projects = () => {
  const projectData = [
    {
      imageSrc: `${dictionary}`,
      name: "Dictionary App 📚",
      description:
        "Discover a swift Dictionary App for quick word definitions and noun forms. Try enhance your vocabulary and master English effortlessly with this handy pocket companion.",
      tech: ["React", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/dictionary-app",
      liveDemoLink: "https://georgeflood.github.io/dictionary-app/",
    },
    {
      imageSrc: `${signup}`,
      name: "Sign up Form ✍️",
      description:
        "Experience a sleek, modern sign-up form designed for user-friendliness. Streamline registration with this visually appealing and efficient solution, making signing up a breeze..",
      tech: ["React", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/signup-react",
      liveDemoLink: "https://georgeflood.github.io/signup-react/",
    },
    {
      imageSrc: `${weather}`,
      name: "Weather App ☀️",
      description:
        " a sleek weather app with precise forecasts and an intuitive design. Merging functionality and aesthetics, it highlights my commitment to exceptional user experiences.",
      tech: ["React", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/weatherApp-react",
      liveDemoLink: "https://georgeflood.github.io/weatherApp-react/",
    },
    {
      imageSrc: `${space}`,
      name: "Space Tourism 🚀",
      description:
        "Uncover the universe with a captivating site that fuels your space cravings. Effortlessly explore the cosmos using eye-catching visuals and smooth navigation, showcasing limitless celestial escapades.",
      tech: ["HTML", "Javascript", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/space-tourism",
      liveDemoLink: "https://georgeflood.github.io/space-tourism/index.html",
    },
    {
      imageSrc: `${snapshot}`,
      name: "Snapshot 📸",
      description:
        "Snapshot is a robust web platform designed for photographers. It offers a subscription-based service enabling users to host and share their photography stories on custom domains. Designed with a fully responsive layout.",
      tech: ["React", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/snapshot-web",
      liveDemoLink: "https://george-photosnap.netlify.app/",
    },
    {
      imageSrc: `${portfolio}`,
      name: "Old Portfolio 🎨",
      description:
        "My previous portfolio reflecting creativity and skill. As a designer, I've adopted a modern, clean aesthetic to showcase work and improve user experience, showcasing my growth and adaptability.",
      tech: ["HTML", "Javascript", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/hello-world-portfolio",
      liveDemoLink: "https://georgeflood.github.io/hello-world-portfolio/",
    },
    // Add more project data objects here
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
