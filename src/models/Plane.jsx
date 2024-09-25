import React, { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane2.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene)
    const { actions } = useAnimations(animations, ref)

    useEffect(() => {
        if (isRotating) {
            actions['Dynamic pose'].play();
        } else {
            actions['Dynamic pose'].stop();
        }
    }, [actions, isRotating])

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane