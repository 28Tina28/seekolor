import { useEffect, useRef, useState } from 'react';
import { Component, ErrorInfo, ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

class ThreeFallback extends Component<{ children: ReactNode }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('Three.js error, fallback:', error.message);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0a0a15] to-black opacity-90" />
      );
    }
    return this.props.children;
  }
}

function ArchitecturalSpace() {
  const groupRef = useRef<THREE.Group>(null);
  const openingRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (openingRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 0.5) * 0.05 + 0.95;
      openingRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111" metalness={0.8} roughness={0.6} />
      </mesh>
      <mesh position={[-4, 0, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#1a1a2a" metalness={0.3} roughness={0.7} />
      </mesh>
      <mesh position={[4, 0, 0]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#1a1a2a" metalness={0.3} roughness={0.7} />
      </mesh>
      <group position={[0, 0, -4]}>
        <mesh>
          <planeGeometry args={[8, 8]} />
          <meshStandardMaterial color="#0a0a15" metalness={0.5} roughness={0.8} />
        </mesh>
        <mesh ref={openingRef} position={[0, 0, 0.05]}>
          <planeGeometry args={[2.5, 4]} />
          <meshStandardMaterial color="#c88a4a" emissive="#c88a4a" emissiveIntensity={0.3} transparent opacity={0.6} />
        </mesh>
      </group>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 2, 0]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.2} roughness={0.9} />
      </mesh>
      <LightBeam />
      <group position={[0, 0, -4]}>
        <mesh position={[-1.3, 2, 0]}>
          <boxGeometry args={[0.08, 4.1, 0.2]} />
          <meshStandardMaterial color="#333" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[1.3, 2, 0]}>
          <boxGeometry args={[0.08, 4.1, 0.2]} />
          <meshStandardMaterial color="#333" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, 4.05, 0]}>
          <boxGeometry args={[2.6, 0.08, 0.2]} />
          <meshStandardMaterial color="#333" metalness={0.7} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

function LightBeam() {
  const count = 60;
  const positions = useRef(new Float32Array(count * 3));
  const speeds = useRef(new Float32Array(count));
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      positions.current[i * 3] = (Math.random() - 0.5) * 6;
      positions.current[i * 3 + 1] = (Math.random() - 0.5) * 6 - 1;
      positions.current[i * 3 + 2] = (Math.random() - 0.5) * 2 - 3;
      speeds.current[i] = 0.005 + Math.random() * 0.015;
    }
  }, []);
  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(state.clock.elapsedTime * speeds.current[i] * 10 + i) * 0.002;
      pos[i * 3] += Math.sin(state.clock.elapsedTime * speeds.current[i] * 5 + i) * 0.001;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions.current} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#c88a4a" transparent opacity={0.4} blending={THREE.AdditiveBlending} />
    </points>
  );
}

interface EntranceProps {
  onEnter: () => void;
}

export default function Entrance({ onEnter }: EntranceProps) {
  const [hovered, setHovered] = useState(false);
  const dlRef = useRef<THREE.DirectionalLight>(null);

  return (
    <div className="absolute inset-0">
      <ThreeFallback>
      <Canvas
        camera={{ position: [0, 0.5, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <color attach="background" args={['#050508']} />
        <ambientLight intensity={0.2} />
        <directionalLight ref={dlRef} position={[0, 5, 3]} intensity={1.5} color="#c88a4a" />
        <pointLight position={[0, 3, -3]} intensity={0.8} color="#c88a4a" />
        <ArchitecturalSpace />
      </Canvas>
      </ThreeFallback>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center max-w-lg px-6">
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.3em] text-white/90 mb-4">COLOR AI</h1>
          <p className="text-sm md:text-base font-light tracking-[0.15em] text-white/40 mb-12">沉浸式色彩人格探索</p>
        </div>
        <button
          onClick={onEnter}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="pointer-events-auto px-12 py-4 border border-white/20 rounded-full text-white/70 text-sm tracking-[0.2em] transition-all duration-700 hover:bg-white/5 hover:border-white/40 hover:text-white/90 relative overflow-hidden group"
        >
          <span className="relative z-10">走进空间</span>
          <div className={`absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-transparent transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
        </button>
        <p className="mt-16 text-[10px] tracking-[0.3em] text-white/15 animate-pulse">点击进入你的色彩旅程</p>
      </div>
    </div>
  );
}
