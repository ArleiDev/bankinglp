import  { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ bgImg }:{bgImg:string}) => {
    const ref = useRef<HTMLDivElement | null>(null);  // Tipando a ref como HTMLDivElement

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e:any) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-zinc-900"
    >
      <div
        style={{
        
         borderRadius: '20px',
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          backgroundImage: `url(${bgImg})`, // Aplique o fundo passado via props
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-4 grid place-content-center rounded-lg shadow-lg"
      ></div>
    </motion.div>
  );
};

export default TiltCard;
