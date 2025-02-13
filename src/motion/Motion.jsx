import { motion } from "framer-motion";
import { useState } from "react";

const Motion = ({children}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.
    getBoundingClientRect();
    

    // Calculate the rotation values
    const x = (clientX - left - width / 2) / 15;
    const y = -(clientY - top - height / 2) / 15;

    setRotateX(y);
    setRotateY(x);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="perspective-1000">
      <motion.div
       
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateX,
          rotateY,
          transition: { type: "spring", stiffness: 100, damping: 10 },
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        
        {children}
      </motion.div>
    </div>
  );
};

export default Motion;
