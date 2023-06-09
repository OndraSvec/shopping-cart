import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";
import model from "../assets/apparel-model.jpg";
import modelSmall from "../assets/apparel-model-small.jpg";
import { useState } from "react";
import LeftPage from "./LeftPage";
import RightPage from "./RightPage";

const HomePage = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="homePage">
      <LeftPage>
        <p>Just Dropped</p>
        <p>summer surf collection</p>
        <Link to="products">
          shop now <BsArrowUpRight />
        </Link>
      </LeftPage>
      <RightPage>
        <img
          src={modelSmall}
          alt="apparel-model-loading"
          className={`${
            imgLoaded
              ? "homePage-model notDisplayed"
              : "homePage-model displayed"
          }`}
        />
        <img
          onLoad={() => setImgLoaded(true)}
          alt="apparel-model"
          className={`${
            imgLoaded
              ? "homePage-model displayed"
              : "homePage-model notDisplayed"
          }`}
          src={model}
        />
      </RightPage>
    </div>
  );
};

export default HomePage;
