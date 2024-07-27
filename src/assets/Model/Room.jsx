/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Room2.glb
*/

import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, useGLTF } from '@react-three/drei'
function updateMaterials(materials, envMapIntensity, cubex) {
  Object.keys(materials).forEach((key) => {
    materials[key].envMapIntensity = envMapIntensity

  })
}
export function Model({ envMapIntensity, rotatez, ...props }) {
  const [cubex, setCubex] = useState(0)
  const [cubey, setCubey] = useState(0)
  const [cubez, setCubez] = useState(0)
  const { nodes, materials } = useGLTF('./Room.glb')
  updateMaterials(materials, envMapIntensity, cubex)
  return (
    <mesh {...props} rotation={[0, rotatez, 0]} dispose={null}>

      <mesh geometry={nodes.Plane.geometry} material={materials.carpet} position={[-1.07, 0.2, -0.72]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials.Material} position={[-0.16, -0.06, 0.45]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials.walls} position={[-0.06, 1.8, 2.56]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials.walls} position={[-2.51, 1.8, 0.52]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.001']} position={[-0.18, 0.11, -1.14]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials.Desk} position={[-0.17, 0.58, 1.74]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['leaf node']} position={[-2.37, 2.29, 1.23]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['leaf node.001']} position={[-2.37, 2.29, 0.86]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['leaf node.002']} position={[-2.37, 1.9, 0.86]} />
      <mesh geometry={nodes.Plane004.geometry} material={materials['leaf node.004']} position={[-2.37, 1.75, 0.6]} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['leaf node.003']} position={[-2.37, 1.75, 0.23]} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['leaf node.005']} position={[-2.37, 1.9, -0.02]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['dumbell tire']} position={[-1.39, 0.32, -0.52]} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['dumbell tire']} position={[-1.39, 0.32, -0.87]} />
      <mesh geometry={nodes.Cylinder003.geometry} material={materials.metal} position={[-1.4, 0.32, -0.7]} />
      <mesh geometry={nodes.Cylinder004.geometry} material={materials['dumbell tire']} position={[-1.79, 0.32, -0.53]} />
      <mesh geometry={nodes.Cylinder005.geometry} material={materials['dumbell tire']} position={[-1.79, 0.32, -0.88]} />
      <mesh geometry={nodes.Cylinder006.geometry} material={materials.metal} position={[-1.8, 0.32, -0.71]} />
      <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.001']} position={[-2.34, 2.49, -0.56]} />
      <mesh geometry={nodes.Circle.geometry} material={materials['white face']} position={[-2.36, 2.53, -0.53]} />
      <mesh geometry={nodes.Circle001.geometry} material={materials.Lindkdin} position={[-2.36, 2.51, -1.26]} />
      <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.004']} position={[-2.35, 2.56, -1.27]} />

      <group {...props} dispose={null}>
        <mesh geometry={nodes.Cube.geometry} material={materials['plastic black']} position={[-0.11, 0.96, 2.02]} />
        <mesh geometry={nodes.Cylinder.geometry} material={materials['plastic black']} position={[-0.11, 1.22, 2.04]} />
        <group position={[-0.11, 1.44, 1.97]} rotation={[0, Math.PI, 0]}>
          <mesh geometry={nodes.Cube001_1.geometry} material={materials['plastic black']} />
          <mesh geometry={nodes.Cube001_2.geometry} material={materials.screen}>

          </mesh>
          <Html occlude='blending'
            distanceFactor={0.4}
            transform
            position={[0, 0, 0.032]}
          >
            <div className='test4'>
              <iframe src='https://mourra950.github.io/Portofolio/'></iframe>
            </div>
          </Html>
        </group>
      </group></mesh>
  )
}

useGLTF.preload('./Room.glb')
