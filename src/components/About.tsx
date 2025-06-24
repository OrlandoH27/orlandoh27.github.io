import Profile from "../assets/Profile_Image.jpg";

const About = () => {
  return (
    <section id="about" className="py-5">
      {/* Added py-5 for vertical spacing */}
      <div className="container">
        {/* Added Bootstrap container for centering and max-width */}
        <h2 className="display-4 mb-5 text-maroon text-center fw-bold">
          About Me
        </h2>
        <div className="row align-items-center">
          {/* Bootstrap row to arrange columns */}
          {/* Left Column - About Text */}
          <div className="col-md-8 mb-4 mb-md-0">
            {/* Column for text, takes 8/12 width on medium+ screens */}
            <div className="p-4 rounded-3 shadow-sm object text-dark text-start">
              <p className="lead fw-bold">
                Hello! I'm Orlando Haye, a passionate Junior Computer Science
                Major attending Texas A&M University, and I am from Houston, Tx.
                I enjoy building or being a part of full stack projects and
                constantly learning new technologies. <br /> <br />
                If I want to have fun, you can find me watching and playing
                basketball, skateboarding with friends, producing music (my
                favorite genre is hip-hop), and playing video games.
                <br /> <br />I have always wanted to be a developer since I was
                very young, so I get excited at each step I take towards that
                dream. Whether it be backend, frontend, fullstack, or game
                development, challenging myself with programming problems, while
                allowing my personality and creativity to seep through is always
                exciting.
                <br /> <br />
                I'm Orlando, and I could be your new favorite developer!
              </p>
            </div>
          </div>
          {/* Right Column - Profile Picture */}
          <div className="col-md-4 text-center">
            {/* Column for image, takes 4/12 width on medium+ screens */}
            <img
              src={Profile} // Use the imported image variable
              alt="Profile Picture" // Important for accessibility
              className="img-fluid rounded-circle shadow-lg border border-5 border-dark" // Bootstrap classes for responsive, circular, and shadowed image
              style={{ maxWidth: "250px", height: "auto" }} // Adjust size as desired
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
