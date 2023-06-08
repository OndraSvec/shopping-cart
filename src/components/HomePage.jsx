import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const HomePage = () => (
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
      <p>placeholder</p>
      <div className="emptyBox"></div>
      <div className="emptyBox"></div>
    </div>
  </div>
);

export default HomePage;
