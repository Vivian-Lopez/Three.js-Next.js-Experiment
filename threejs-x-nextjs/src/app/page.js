"use client"

// import React from 'react'
// import css from "./globals.css"
// import { Canvas } from '@react-three/fiber';
// import Floor from "./components/Floor";
// import LightBulb from './components/LightBulb';
// import Box from './components/Box'
// import { OrbitControls } from './components/OrbitControls';
// import Controls from './components/OrbitControls';
// import Draggable from './components/Draggable';

// export default function page() {
//   return (
//     <div className={css.scene}>
//       <Canvas
//         shadows
//         className={css.canvas}
//         camera={{
//           position: [-6, 7, 7],
//         }}
//       >
//         {/* The ambientLight component creates the scene white */}
//         <ambientLight color={"white"} intensity={0.3} />
//         <LightBulb position={[0, 3, 0]} />
//         <Draggable>
//           <Box rotateX={3} rotateY={0.2} />
//         </Draggable>
//         <Controls />
//         <Floor position={[0, -1, 0]} />
//       </Canvas>
//     </div>
//   );
// }
import css from "./globals.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import OrbitControls from "./components/OrbitControls";
import Light from "./components/LightBulb";
import Floor from "./components/Floor";
import Draggable from "./components/Draggable";

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        {/* <Light position={[0, 3, 0]} /> */}
        {/* <Draggable> */}
            <Box rotateX={3} rotateY={0.2} />
        {/* </Draggable> */}
        <OrbitControls />
        {/* <Floor position={[0, -1, 0]} /> */}
      </Canvas>
    </div>
  );
}