import "./storyCard.css";
import tv from "../../../Images/tv.png";

const StoryCard = () => {
  return (
    <div className="story-card-container">
      <div className="text">
        <h1>Enjoy on your TV.</h1>
        <h2>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </h2>
      </div>
      <div className="story-img">
        <img src={tv} alt="tv" />
        <div className="story-video">
        <video
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          autoPlay
          playsInline
          muted
          loop
        ></video>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
