import { SellerCard } from "../sellerCard/SellerCard";
import topSeller from "../../dummyData/topSeller"
export function MainRightBottom() {
  return (
    <div className="bottomRightCard">
   
      <div className="bottomCard_name">
        <h2>Top Seller</h2>
        <a href="#">View More</a>
      </div>
      <div className="bottomRightCard_content">
      {topSeller &&
        topSeller.map((person) => {
          return <SellerCard key={person.id} {...person} />;
        })}
        </div>
    </div>
  );
}
