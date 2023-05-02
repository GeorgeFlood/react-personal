import ProjectCard from "./ProjectCards";
import dictionary from "../../public/screenshots/dictionary.png";
import signup from "../../public/screenshots/signup.png";
import weather from "../../public/screenshots/weather.png";
import space from "../../public/screenshots/space.png";
import portfolio from "../../public/screenshots/oldportfolio.png";
import dashboard from "../../public/screenshots/dashboard.png";
const Projects = () => {
  const projectData = [
    {
      imageSrc: `${dictionary}`,
      name: "Dictionary App 📚",
      description:
        "Experience the convenience of a Dictionary App that swiftly delivers word definitions and noun forms. Unveil the power of language with this compact and user-friendly tool, your ideal pocket companion for expanding your vocabulary and mastering word usage with ease.",
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
        "Introducing a sleek, classic weather app! Offering accurate forecasts and user-friendly design, this app combines functionality with a visually appealing interface, demonstrating my commitment to creating delightful user experiences.",
      tech: ["React", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/weatherApp-react",
      liveDemoLink: "https://georgeflood.github.io/weatherApp-react/",
    },
    {
      imageSrc: `${space}`,
      name: "Space Tourism 🚀",
      description:
        "Explore the cosmos with a captivating space-tourism website, designed to ignite your interstellar wanderlust. Navigate the stars effortlessly through stunning visuals and an intuitive interface, showcasing the boundless possibilities of cosmic adventures.",
      tech: ["HTML", "Javascript", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/space-tourism",
      liveDemoLink: "https://georgeflood.github.io/space-tourism/index.html",
    },
    {
      imageSrc: `${dashboard}`,
      name: "Dashboard 📊",
      description:
        "Experience a thoughtfully designed dashboard, seamlessly blending style and functionality. With its intuitive layout and visually appealing interface, this dashboard simplifies data management and enhances user interaction for an efficient and enjoyable experience.",
      tech: ["HMTL", "Javascript", "CSS"],
      githubLink: "https://github.com/GeorgeFlood/project-7",
      liveDemoLink: "https://georgeflood.github.io/project-7/",
    },
    {
      imageSrc: `${portfolio}`,
      name: "Old Portfolio 🎨",
      description:
        "My previous portfolio, a display of my creativity and skill, as I've evolved as a designer, I've embraced a more modern, clean aesthetic to better showcase my work and deliver an enhanced user experience, highlighting my growth and adaptability.",
      tech: ["HMTL", "Javascript", "SCSS"],
      githubLink: "https://github.com/GeorgeFlood/hello-world-portfolio",
      liveDemoLink: "https://georgeflood.github.io/hello-world-portfolio/",
    },
    // Add more project data objects here
  ];

  return (
    <div className="projects">
      <div className="projects__intro" id="project">
        <h4>PORTFOLIO</h4>
        <h3>
          Crafting seamless digital experiences to bring your ideas to life. 🧩
        </h3>
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
