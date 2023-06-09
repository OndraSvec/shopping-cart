import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const Carousel = ({ children }) => {
  const [width, setWidth] = useState();
  const carouselRef = useRef(null);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);
  return (
    <motion.div ref={carouselRef} className="carousel">
      <motion.div
        className="inner-carousel"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {children.map((item) => (
          <motion.div key={nanoid()}>{item}</motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Carousel;

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};
