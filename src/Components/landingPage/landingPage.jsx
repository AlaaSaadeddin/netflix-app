import "./landingPage.css"
import Header from "../header/header";
import CardText from "../cardText/cardText";
import Input from "../Common/Input/input";
import StoryCard from "../Common/StoryCard/storyCard";
import Footer from "../Common/footer/footer";

const LandingPage = () => {
  return (
    <section>
    <main>
      <div className="overly-background">
          <Header />
          <CardText />
          <Input />
      </div>
    </main>
    <StoryCard />
    <StoryCard />
    <StoryCard />
    <Footer />
    </section>
  );
};

export default LandingPage;
