import * as THREE from 'three'

import { useState, useRef, Suspense } from 'react';
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing';

import { Canvas, useFrame, useThree } from '@react-three/fiber';

import { Loader, PointerLockControls, Cloud, Float, useTexture, useVideoTexture } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import Lights from '../components/Lights.jsx';
import Floor from '../components/Floor.jsx';
import '../index.css';







function Plane(props) {
  const ref = useRef()
  const [hovered, hover] = useState(null)
  console.log(hovered)
  
  const imageTexture = useTexture('./textures/Wallpaper.jpg')

  return (
    <Select  dpr={[3]} antialias = {true} enabled={hovered}>
      
      <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <planeGeometry args={[4,3]}/>
        <meshStandardMaterial side={THREE.DoubleSide} map={imageTexture} />
      </mesh>
     
    </Select>
  )
}

function Plane2(props) {
  const ref = useRef()
  const [hovered, hover] = useState(null)
  console.log(hovered)


  
   


  
  return (
    <Select enabled={hovered}>
      
      <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <planeGeometry args={[4,3]}/>
        <Suspense >
        {/* <meshStandardMaterial color="black" side={THREE.DoubleSide}/> */}
        <VideoMaterial url='textures/video.mp4'/>
        </Suspense>
  
      </mesh>
     
    </Select>
  )
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter
  texture.anisotropy = 256;
  return <meshBasicMaterial map={texture} toneMapped={true} />
}

const BasicScene = ({ children }) => {
    return (
      <div>
        <Canvas dpr={[1,2]} gl={{ antialias: true, anisotropy: 256 }} shadows camera={{ fov: 50 }}>
        
          {/* <Lights /> */}
  
          <Physics gravity={[0, -9.8, 0]}>
            {children}
            <Floor rotation={[Math.PI / -2, 0, 0]} color="Beige" />
          </Physics>
          
          <PointerLockControls />
          <Selection>

            <EffectComposer multisampling={64} autoClear={false}>
               <Outline blur visibleEdgeColor="red" edgeStrength={200} width={1000} />
            </EffectComposer> 
            
            <Plane castShadow receiveShadow position={[-3, 2, -4]} rotation-y={Math.PI/4}/>
  
            <Plane2 castShadow receiveShadow position={[3, 2, -4]}  rotation-y={-Math.PI/4}/>
          
          </Selection>


         <Cloud position={[0,20,0]}
             opacity={0.5}
             speed={1} // Rotation speed
             width={100} // Width of the full cloud    
             depth={1.5} // Z-dir depth
             segments={200} // Number of particles
          /> 
        
        </Canvas>
  
        <Loader />
      </div>
    );
  };
  
  export default BasicScene;
  