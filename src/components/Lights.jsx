const Lights = () => {
    return (
        <>
           <ambientLight intensity={0.6}/>
           <spotLight color={'white'} penumbra={0.9} position={[10,10,5]} castShadow/>
        </>
    )
}

export default Lights;