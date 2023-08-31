import React from "react";
// import { extend } from '@react-three/drei'
// import { meshPhysicalMaterial } from 'three'; // Import 'meshPhysicalMaterial' from 'three'
// import { Box } from '@react-three/fiber'; // Import 'Box' from '@react-three/fiber'
// import {boxBufferGeometry} from '@react-three/drei'

function Floor(props) {
    return (
        <mesh {...props} receiveShadow>
            {/* <Box args={[20, 1, 10]} /> {/* Use 'Box' from '@react-three/fiber' */}
            {/* <meshPhysicalMaterial color='white' /> */}
            <boxBufferGeometry args={[20,1,10]} />
            <meshPhysicalMaterial color='white' />
        </mesh>
    )
}

export default Floor;