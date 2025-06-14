// Quote.js
import "./style.css";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "./useIntersectionObserver";

export default function Quote() {
  const text1 = '"Being strong doesnt mean making others feel weak,'.split(" ");
  const text2 =
    'Be a tall tree that offers shade, not a shadow that blocks the light."'.split(
      " "
    );
  const [ref, isIntersecting] = useIntersectionObserver();

  const renderText = (textArray, startIndex = 0) => {
    return textArray.map((word, index) => (
      <motion.span
        key={startIndex + index}
        initial={{
          opacity: 0,
          filter: "blur(4px)",
          scale: 0.92,
        }}
        animate={{
          opacity: isIntersecting ? 1 : 0,
          filter: isIntersecting ? "blur(0px)" : "blur(4px)",
          scale: isIntersecting ? 1 : 0.92,
        }}
        transition={{
          delay: isIntersecting ? (startIndex + index) * 0.1 : 0,
          duration: 0.5,
        }}
      >
        {word}{" "}
      </motion.span>
    ));
  };

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-[2rem]">{renderText(text1)}</h3>
      <h3 className="text-xl">{renderText(text2, text1.length)}</h3>
    </div>
  );
}
