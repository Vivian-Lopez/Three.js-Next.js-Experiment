import React from "react";
import {useLoader} from "@react-three/fiber"
import { TextureLoader } from "three";

// Define the file path as a constant
// const textureFilePath = "/texture.jpg";

function Box(props) {
    // const texture = useLoader(TextureLoader, textureFilePath);
    // You might notice that I am passing components props to mesh
    // The reason I am doing this is to make my compnents reusable
    // This will allow me to have multiple boxes positioned in different
    // areas or with different dimensions when I want that
    return (
        <mesh {...props} receiveShadow={true} castShadow>
            <boxBufferGeometry />
            <meshPhysicalMaterial color={"white"} />
        </mesh>
    )
}

export default Box;