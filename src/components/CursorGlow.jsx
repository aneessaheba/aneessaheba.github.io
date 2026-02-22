import { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const current = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    // Smooth follow with lerp
    const loop = () => {
      current.current.x += (pos.current.x - current.current.x) * 0.1;
      current.current.y += (pos.current.y - current.current.y) * 0.1;
      if (glowRef.current) {
        glowRef.current.style.left = `${current.current.x}px`;
        glowRef.current.style.top = `${current.current.y}px`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div id="cursor-glow" ref={glowRef} />;
};

export default CursorGlow;
