import React from "react";
import Particles from "@/components/ui/Particles/Particles";

const StarryBackground: React.FC = () => {
  return (
    <Particles
      particleCount={300}
      particleSpread={8}
      speed={0.1}
      particleBaseSize={250}
      sizeRandomness={2}
      particleColors={["#ffffff"]}
      alphaParticles={true}
      disableRotation={false}
      moveParticlesOnHover={true}             
      particleHoverFactor={1.2}              
      className="absolute inset-0 z-0"
    />
  );
};

export default StarryBackground;
