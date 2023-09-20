 
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Loading() {
  const canvasRef = useRef(null);
  const [toend, setToEnd] = useState(false);
  const [animatestep, setAnimateStep] = useState(0);
  const [acceleration, setAcceleration] = useState(0);
  const [groupRotation, setGroupRotation] = useState(0);
  const [groupPositionZ, setGroupPositionZ] = useState(0);
  const [meshOpacity, setMeshOpacity] = useState(1);
  const [ringCoverOpacity, setRingCoverOpacity] = useState(0);
  const [ringOpacity, setRingOpacity] = useState(0);
  const [ringScale, setRingScale] = useState(0.9);

  useEffect(() => {
    const $wrap = canvasRef.current;
    const canvassize = 500;
    const length = 30;
    const radius = 5.6;
    const rotatevalue = 0.035;
    const pi2 = Math.PI * 2;

    let animateId;
    let camera, scene, renderer;
    let group, mesh, ringcover, ring;

    function start() {
      setToEnd(true);
    }
    
    function back() {
      setToEnd(false);
    }

    function easing(t, b, c, d) {
      if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
      return (c / 2) * ((t -= 2) * t * t + 2) + b;
    }

    function render() {
      let progress;

      setAnimateStep((prevStep) => Math.max(0, Math.min(240, toend ? prevStep + 1 : prevStep - 4)));
      setAcceleration(easing(animatestep, 0, 1, 240));

      if (acceleration > 0.35) {
        progress = (acceleration - 0.35) / 0.65;
        setGroupRotation(-Math.PI / 2 * progress);
        setGroupPositionZ(50 * progress);
        progress = Math.max(0, (acceleration - 0.97) / 0.03);
        setMeshOpacity(1 - progress);
        setRingCoverOpacity(progress);
        setRingOpacity(progress);
        setRingScale(0.9 + 0.1 * progress);
      }

      renderer.render(scene, camera);
    }

    function animate() {
      setGroupRotation((prevRotation) => prevRotation + rotatevalue + acceleration);
      render();
      animateId = requestAnimationFrame(animate);
    }

    function init() {
      camera = new THREE.PerspectiveCamera(65, 1, 1, 10000);
      camera.position.z = 150;

      scene = new THREE.Scene();
      group = new THREE.Group();
      scene.add(group);

      mesh = new THREE.Mesh(
        new THREE.TubeGeometry(new THREE.Curve(createVector, createVector)),
        new THREE.MeshBasicMaterial({
          color: 0xffffff
        })
      );
      group.add(mesh);

      ringcover = new THREE.Mesh(
        new THREE.PlaneGeometry(50, 15, 1),
        new THREE.MeshBasicMaterial({ color: 0xd1684e, opacity: 0, transparent: true })
      );
      ringcover.position.x = length + 1;
      ringcover.rotation.y = Math.PI / 2;
      group.add(ringcover);

      ring = new THREE.Mesh(
        new THREE.RingGeometry(4.3, 5.55, 32),
        new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0, transparent: true })
      );
      ring.position.x = length + 1.1;
      ring.rotation.y = Math.PI / 2;
      group.add(ring);

      renderer = new THREE.WebGLRenderer({
        antialias: true
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(canvassize, canvassize);
      renderer.setClearColor('#d1684e');

      $wrap.appendChild(renderer.domElement);

      animate();
    }

    function createVector(t) {
      var x = length * Math.sin(pi2 * t),
          y = radius * Math.cos(pi2 * 3 * t),
          z, tt;

      tt = t % 0.25 / 0.25;
      tt = t % 0.25 - (2 * (1 - tt) * tt * -0.0185 + tt * tt * 0.25);
      if (Math.floor(t / 0.25) === 0 || Math.floor(t / 0.25) === 2) {
        tt *= -1;
      }
      z = radius * Math.sin(pi2 * 2 * (t - tt));

      return new THREE.Vector3(x, y, z);
    }

    init();

    return () => {
      cancelAnimationFrame(animateId);
      $wrap.removeChild(renderer.domElement);
    };
  }, []);  

  return <div ref={canvasRef} />;
}

 
