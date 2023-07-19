"use client";

import { Canvas, ThreeElements } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

function Mesh(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);

    function handleColorSchemeChange(e: MediaQueryListEvent) {
      setDarkMode(e.matches);
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleColorSchemeChange);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleColorSchemeChange);
    };
  }, []);

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
        { x: 1.2, y: 1.2, z: 1.2, duration: 2, ease: "power4" }
      );

      gsap.fromTo(
        ref.current.rotation,
        { x: Math.PI, y: Math.PI, z: Math.PI * 0.5},
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
      <tetrahedronGeometry args={[4, 0]} />
      <meshStandardMaterial color={"white"} opacity={0} transparent={true} />
    </mesh>
  );
}

export default function Background() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} color={"#818cf8"} />
      <Mesh />
    </Canvas>
  );
}
