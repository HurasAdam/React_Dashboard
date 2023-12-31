export function SellerCard({ ...props }) {
  const { id, name, userName, imgSrc } = props;

  return (
    <div key={id} className="topSeller">
      <div className="topSellerImg">
        <img src={imgSrc} alt="" />
      </div>
      <p className="topSeller_name">
        {name} <span>{userName}</span>
      </p>
      <a href="#" className="button_one btn">
        Follow
      </a>
    </div>
  );
}
