"use client";

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Icosahedron, Torus, Octahedron } from "@react-three/drei";
import * as THREE from "three";

/**
 * A slowly rotating distorted icosahedron — the centerpiece of the hero.
 * Material distortion creates an organic, liquid-metal feel.
 */
function HeroBlob() {
  const meshRef = React.useRef<THREE.Mesh>(null);
  const matRef = React.useRef<any>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.y = t * 0.12;
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    if (matRef.current) {
      // Subtle distortion pulsing
      matRef.current.distort = 0.32 + Math.sin(t * 0.5) * 0.06;
    }
  });

  return (
    <group>
      <Icosahedron ref={meshRef as any} args={[1.6, 12]}>
        {/* @ts-ignore */}
        <MeshDistortMaterial
          ref={matRef}
          color="#7c5cff"
          emissive="#3a1d8f"
          emissiveIntensity={0.35}
          roughness={0.18}
          metalness={0.85}
          distort={0.35}
          speed={1.6}
        />
      </Icosahedron>
    </group>
  );
}

/** Orbiting wireframe satellites — adds depth without overwhelming the blob. */
function OrbitingShapes() {
  const groupRef = React.useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.04;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1.4} floatIntensity={1.2}>
        <Torus args={[0.32, 0.08, 16, 64]} position={[3, 1, -1]}>
          <meshStandardMaterial
            color="#ff6b9d"
            emissive="#ff2d72"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </Torus>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <Octahedron args={[0.36]} position={[-3.2, -1.4, 0.5]}>
          <meshStandardMaterial
            color="#5ce1e6"
            emissive="#1aa7ad"
            emissiveIntensity={0.4}
            roughness={0.25}
            metalness={0.7}
          />
        </Octahedron>
      </Float>

      <Float speed={2.4} rotationIntensity={1.8} floatIntensity={1.2}>
        <mesh position={[2.6, -1.9, 1]}>
          <dodecahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial
            color="#ffd166"
            emissive="#b8860b"
            emissiveIntensity={0.4}
            roughness={0.3}
            metalness={0.7}
            wireframe
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.4}>
        <mesh position={[-2.4, 1.7, -0.8]}>
          <tetrahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color="#a78bfa"
            emissive="#6d28d9"
            emissiveIntensity={0.45}
            roughness={0.2}
            metalness={0.85}
          />
        </mesh>
      </Float>
    </group>
  );
}

/** Subtle camera parallax that follows the mouse. */
function CameraParallax() {
  useFrame((state) => {
    const { camera, pointer } = state;
    const targetX = pointer.x * 0.6;
    const targetY = -pointer.y * 0.4;
    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 6], fov: 50 }}
    >
      <CameraParallax />
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -3, -2]} intensity={2} color="#7c5cff" />
      <pointLight position={[5, 3, 2]} intensity={1.5} color="#ff6b9d" />

      <HeroBlob />
      <OrbitingShapes />

      <Environment preset="city" />
    </Canvas>
  );
}
