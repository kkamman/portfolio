"use client";

import { Canvas, ThreeElements } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function Mesh(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.material,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );

      gsap.fromTo(
        ref.current.scale,
        { x: 0, y: 0, z: 0 },
        { x: 1.2, y: 1.2, z: 1.2, duration: 1, ease: "power4" }
      );

      gsap.fromTo(
        ref.current.rotation,
        { x: 0, y: 0, z: 0 },
        {
          x: Math.PI,
          y: Math.PI,
          z: Math.PI,
          duration: 2,
          ease: "power4",
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <mesh {...props} ref={ref}>
      <tetrahedronGeometry args={[2.5, 0]} />
      <meshStandardMaterial color={"#111"} opacity={0} transparent={true} />
    </mesh>
  );
}

export default function Background() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <pointLight position={[10, 30, 30]} intensity={2} />
      <Mesh />
    </Canvas>
  );
}
