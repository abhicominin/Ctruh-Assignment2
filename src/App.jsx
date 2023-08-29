import { Canvas } from "@react-three/fiber";
import { Sky, Stage } from '@react-three/drei';
import ThreeModel from './components/ThreeModel.jsx';
import BaseCharacter from './ui/BaseCharacter.jsx';
import BaseScene from './ui/BaseScene.jsx';
function App() {
  return (
    <BaseScene>
    {/* <BaseBox text={false} position={[0, 0.5, 0]} args={[2, 1, 2]} color="red" />
    <BaseBox text={false} position={[5, 1, 0]} args={[1.5, 2, 1.3]} color="orange" />
    <BaseBox text={false} position={[0, 0.5, 5]} args={[3, 1, 1.3]} color="green" /> */}
    <BaseCharacter controls position={[0, 2, 0]} args={[0.5]} color="yellow" />
    <Stage>
    

    <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, -5]} />
    <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, 10]} />
    <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-10, 0, 5]} />
    <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-5, 0, -5]} />
    <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[0, 0, -10]} />
    <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[10, 0, 5]} />
    <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-10, 0, -5]} />
    <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-6, 0, -7]} />
    <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[6, 0, 7]} />
    <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[6, 0, -7]} />
    <ThreeModel args={[0.5, 2, 0.5]} scale={0.5} position={[-6, 0, 7]} />
    </Stage>
    <Sky />
    
  </BaseScene> 
  );
}

export default App;
