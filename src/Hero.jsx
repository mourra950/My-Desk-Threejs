import './canvas.css'
import { useControls } from 'leva'
import { Canvas } from '@react-three/fiber'
import { Model as Room } from './assets/Model/Room.jsx'
import { BakeShadows, Box, CameraControls, Center, Environment, Float, OrbitControls, OrthographicCamera, PerspectiveCamera, Sky, Stage, Stars } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize } from 'postprocessing'

import * as THREE from 'three'
function Hero() {
    const { bloom, intensity, luminanceThreshold, luminanceSmoothing, fov, position } = useControls('Camera', {
        fov: {
            value: 50,
            min: 0,
            max: 100
        },
        bloom: {
            value: 0.1,
            min: 0,
            max: 50,
            step: 0.0001
        },
        intensity: {
            value: 0,
            min: 0,
            max: 10
        },
        luminanceThreshold: {
            value: 1.66,
            min: 0,
            max: 10,
            step: 0.0001

        },
        luminanceSmoothing: {
            value: 0.86,
            min: 0,
            max: 1,
            step: 0.0001
        },
        color: { value: '#FFFFFF' },
        position: {
            value: [2.5, 1.5, -2.5],
            min: -10,
            max: 10,
            step: 0.0001
        },
    });




    const { tone } = useControls('Tone', {
        tone: {
            options: [THREE.NoToneMapping, THREE.LinearToneMapping, THREE.ReinhardToneMapping, THREE.CineonToneMapping, THREE.ACESFilmicToneMapping],
        }
    }
    );
    const { AmbientIntensity, AmbientColor } = useControls('Ambient Light', {
        AmbientIntensity: {
            value: 0,
            min: 0,
            max: 50,
            step: 0.001
        },
        AmbientColor: { value: '#FFFFFF' }
    }
    );
    const { envMapIntensity, presetEnv } = useControls('Enviroment', {
        envMapIntensity: {
            value: 5.20,
            min: 0,
            max: 50,
            step: 0.001
        },
        presetEnv: {
            options: ['city', 'sunset']
        }
    }
    );

    return (
        <>
            <Canvas
                shadows
                gl={{ toneMapping: tone }}
                camera={{
                    fov: 5,
                    near: 0.1,
                    far: 2000,
                }}
            >
                <OrthographicCamera makeDefault near={0.001} scale={0.016} position={position} />

                {/* <directionalLight /> */}
                {/* <pointLight position={[0, 5, 0]} color={color} intensity={intensity} /> */}
                <ambientLight intensity={AmbientIntensity} color={AmbientColor} />
                {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25}  /> */}
                <Stars radius={100} depth={150} count={5000} factor={4} saturation={0} fade speed={2} />
                <Environment
                    background
                    preset={presetEnv}
                    rotation={[1, intensity * Math.PI / 2, 0]}
                // files="./courtyard_1k.hdr"
                />
                <Center>
                    <Room rotatez={intensity} envMapIntensity={envMapIntensity} />
                </Center>
                <CameraControls />

                <EffectComposer>
                    <Bloom
                        intensity={bloom} // The bloom intensity.
                        blurPass={undefined} // A blur pass.
                        width={Resizer.AUTO_SIZE} // render width
                        height={Resizer.AUTO_SIZE} // render height
                        kernelSize={KernelSize.LARGE} // blur kernel size
                        luminanceThreshold={luminanceThreshold} // luminance threshold. Raise this value to mask out darker elements in the scene.
                        luminanceSmoothing={luminanceSmoothing} // smoothness of the luminance threshold. Range is [0, 1]
                    />

                </EffectComposer>
            </Canvas>
        </>
    );
}

export default Hero;
