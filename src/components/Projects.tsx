import { FaGithub } from "react-icons/fa";

const projectsData = [
  {
    title: "Spotify Map",
    description:
      "Web application that generates a 3D-visual map of the co-occurrences between Spotify Playlists to find recommendations for a user. Implemented using the Node2Vec Python algorithm and Spotify’s integrated API and authentication. Our team is currently looking at other graph algorithms to increase scalability.",
    githubLink: "https://github.com/OrlandoH27/Spotify-Playlist-Map",
  },

  {
    title: "TBDEngine",
    description:
      "Created a game engine from scratch in C++ similar to Unity. I participated in the Physics team and was responsible for implementing how objects would interact with other objects and their environment.",
    githubLink: "https://github.com/aggie-coding-club/Engine-12",
  },

  {
    title: "Aggie Parts Picker",
    description:
      "Using a database that’s automatically populated with recipe information, alongside its generated embedding, from web scraping websites in order to use RAG to create an AI model that can intuitively respond to text queries from the users about recipes of interest. The AI model then outputs recipe information that can be sorted into meal plans (ingredients from stores or restaurants), which are then sorted into the user’s school schedule, adjusting for travel time and distance using Google Maps API. This project is a web app created using React.",
    githubLink: "https://github.com/orgs/hh24teamX/repositories",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mb-5">
      <h2>Projects</h2>
      <div className="row">
        {projectsData.map(({ title, description, githubLink }, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div className="h-100 p-3 bg-light rounded shadow-sm object">
              <h5>{title}</h5>
              <p
                className="text-dark mb-0 border border-3 border-dark rounded-3"
                style={{ backgroundColor: "blanchedalmond" }}
              >
                {description}
              </p>
              <div className="mt-auto align-self-end">
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-maroon icon-link"
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
