import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import model from "../assets/apparel-model.jpg";
import modelSmall from "../assets/apparel-model-small.jpg";
import { useState } from "react";

const HomePage = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="homePage">
      <div className="leftHome">
        <div className="emptyBox"></div>
        <div className="emptyBox"></div>
        <p>Just Dropped</p>
        <p>summer surf collection</p>
        <Link to="products">
          shop now <BsArrowUpRight />
        </Link>
      </div>
      <div className="rightHome">
        {!imgLoaded && <img src={modelSmall} className="homePage-model" />}
        <img
          onLoad={() => setImgLoaded(true)}
          className={`${
            imgLoaded
              ? "homePage-model displayed"
              : "homePage-model notDisplayed"
          }`}
          src={model}
        />
        <div className="emptyBox"></div>
        <div className="emptyBox"></div>
      </div>
    </div>
  );
};

export default HomePage;
