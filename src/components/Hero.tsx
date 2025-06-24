const Hero = () => {
  return (
    <section
      id="home"
      className="text-center bg-light py-5 mb-5 rounded-3 border border-dark object"
    >
      <h2 className="text-center fw-bold">Hello</h2>
      <h3 className="text-center fw-bold">my name is</h3>
      <div className="row justify-content-center">
        {/* Nested row to center content */}
        <div className="col-lg-6 col-md-8 col-sm-10">
          {/* Adjust these column classes to control width */}
          <div className="hero-bg border border-dark border-5 rounded-5">
            <h1 className="fw-bold text-center display-2 text-white">
              Orlando Haye
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
