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
      description:
        "A full-stack web app designed for my Fortnite-obsessed nephew. The app collects email and desired skins, storing the data in MongoDB. It checks the Fortnite store API daily and sends email notifications if the desired skin is in stock. I handled both front-end and back-end development.",
      tech: ["Node", "React", "Tailwind"],
      githubLink: "https://github.com/GeorgeFlood/Designo",
      liveDemoLink: "https://cozy-sprite-c52331.netlify.app/",
    },
    {
      imageSrc: `${designo}`,
      name: "Designo 🔨",
      description:
        "Designo is an experienced creative agency focused on delivering custom web, app, and graphic design solutions. They emphasize strategic, agile methodologies and client collaboration to create impactful and meaningful digital branding experiences.",
      tech: ["React", "CSS"],
      githubLink: "https://github.com/GeorgeFlood/Designo",
      liveDemoLink: "https://cozy-sprite-c52331.netlify.app/",
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
