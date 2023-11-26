import {motion, useAnimation} from 'framer-motion';
import React from "react";

export default function MovingBall() {
    const controls = useAnimation();

  const trianglePath = [
    { x: 100, y: -100 },
    { x: 300, y: -100 },
    { x: 200, y: -300 },
    { x: 100, y: -100 },
  ];
  const animate = async () => {
    // Loop through the points in the triangle path
    for (const point of trianglePath) {
      // Animate the circle to the current point
      await controls.start({ x: point.x, y: point.y, transition: { duration: 5 } });
    }
  };

  // Trigger the animation when the component mounts
  React.useEffect(() => {
    animate();
  }, []);
  return (
    <motion.div
    style={{
      width: 30,
      height: 30,
      borderRadius: "50%",
      position: "absolute",
    }}
    className='bg-[#ffadad] -z-10'
    animate={controls}
    transition={{repeat:Infinity}}
  />
  )
}
