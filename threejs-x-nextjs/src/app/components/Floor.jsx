import React from "react";

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