function PageAbout() {
  return (
      <section className="about-page">
        <div className="about-wrapper">
          <div className="about-container">
            <h2>Welcome to Movie Galaxy!</h2>  
          </div>
          <div className="about-info">
            <div className="info-left">
              <div className="info-left-box">
                <p>Movie Galaxy provides movie listings in 4 categories: popular, top-rated, coming soon and now playing. While finding movie information, go ahead and click on the heart icon below the movie poster to make them appear in your favourite page!</p>
              </div>
            </div>
            <div className="info-right">
              <p>Movie Galaxy movie database website uses the TMDB API but is not endorsed or certified by TMDB.</p>
              <div className="tmbd-container">
                <img className="tmdb-img" src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg" alt="TMDB Logo" />
              </div>
            </div>
          </div>          
        </div>
      </section>
  );
}

export default PageAbout;
