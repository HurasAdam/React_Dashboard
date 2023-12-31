import { BsFillHeartFill } from "react-icons/bs";
function CardMain({ imgSrc, title, hearts }) {
  return (
    <div className="card_main">
      <img src={imgSrc} alt="" />
      <div className="card_main_name">
        <h2>{title}</h2>
        <div className="card_icon">
          <i>
            <BsFillHeartFill /> <span>{hearts}</span>
          </i>
        </div>
      </div>
      <div className="stats">
        <p>Current Bid <span>1.2 ETH</span></p>
        <p>Ending in <span>1d:12h:10m</span></p>
      </div>
      <div className="card_button">
        <a href="" className="button_one btn">Place a Bid</a>
        <a href="" className="button_two btn">History</a>
      </div>
    </div>
  );
}

export default CardMain;
