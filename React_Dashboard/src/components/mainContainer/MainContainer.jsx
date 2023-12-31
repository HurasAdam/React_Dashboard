import "./mainContainer.css";
import Banner from "../../img/1.jpg";
import CardMain from "../card/CardMain";
import card_one from "../../img/card1.jpg"
import card_two from "../../img/card2.jpg"
import card_three from "../../img/card3.jpg"
import card_four from "../../img/card4.jpg"
import card_five from "../../img/card5.jpg"
import card_six from "../../img/card6.jpg"
import { MainRightTop } from "../mainRightTop/MainRightTop";
import { MainRightBottom } from "../mainRightBottom/MainRightBottom";
export function MainContainer() {
  return (
    <div className="mainContainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="textContainer">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded by Alexa An</p>
            <div className="bid">
              <a href="#" className="button_one">
                Bid Now
              </a>
              <p>
                Ending in <span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button_two">
                Popular
              </a>
            </div>
            <div className="filter_buttons">
                <a href="" className="button_one">All</a>
                <a href="" className="button_two">Ilustration</a>
                <a href="" className="button_two">Art</a>
                <a href="" className="button_two">Games</a>
            </div>
          </div>

          <main>
            <CardMain imgSrc={card_one} title={"Cubic Thunder"} hearts={"62"}/>
            <CardMain imgSrc={card_two} title={"Pokemon Ball"} hearts={"46"}/>
            <CardMain imgSrc={card_three} title={"Pyramid God"} hearts={"22"}/>
            <CardMain imgSrc={card_four} title={"Stunning Cube"} hearts={"77"}/>
            <CardMain imgSrc={card_five} title={"Star Crystal"} hearts={"37"}/>
            <CardMain imgSrc={card_six} title={"Crystal Bird"} hearts={"19"}/>
            <CardMain imgSrc={card_four} title={"Stunning Cube"} hearts={"77"}/>
            <CardMain imgSrc={card_one} title={"Cubic Thunder"} hearts={"62"}/>

          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTop/>
        <MainRightBottom/>
      </div>
    </div>
  );
}
