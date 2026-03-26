import { Canvas } from "@react-three/fiber"
import { Cloud, Clouds, OrbitControls, Sky } from "@react-three/drei"

const SkyBackGround = () => {
  return (
    <Canvas camera={{position: [0, 0, 10]}}>
        <Sky sunPosition={[100, 20, 100]} />
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} />
        <Clouds>
            <Cloud position={[0, 0, 0]} scale={1.5} speed={0.1} />
        </Clouds>
        <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default SkyBackGround