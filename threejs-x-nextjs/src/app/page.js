"use client"

import React from 'react'
import css from "./globals.css"
import { extend } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber';
import Floor from "./components/Floor";
import LightBulb from './components/LightBulb';
import Box from './components/Box'

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
        <LightBulb position={[0, 3, 0]} />
        <Box rotateX={3} rotateY={0.2} />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
