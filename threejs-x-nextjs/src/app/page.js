"use client"

import { extend } from '@react-three/fiber'
import css from "./globals.css"
import { Canvas } from '@react-three/fiber';
import React from 'react'
import Floor from "./components/Floor";

export default function page() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        {/* The ambientLight component creates the scene white */}
        <ambientLight color={"white"} intensity={0.3} />
        <Floor position={[0, -1, 0]} />

      </Canvas>
    </div>
  );
}
