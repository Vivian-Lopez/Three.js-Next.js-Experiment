"use client"

import css from "./globals.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import OrbitControls from "./components/OrbitControls";
import Light from "./components/LightBulb";
import Floor from "./components/Floor";
import Draggable from "./components/Draggable";
import {Suspense} from "react";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.6} />
        {/* <Light position={[0, 3, 0]} /> */}
        {/* <Draggable> */}
        <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>
        {/* </Draggable> */}
        <OrbitControls />
        {/* <Floor position={[0, -1, 0]} /> */}
      </Canvas>
      <div style={{color: "#FFFFFF"}}>
          Brap
      </div>
    </div>
  );
}