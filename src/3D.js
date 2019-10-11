import React, { useEffect } from "react";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxBufferGeometry,
  EdgesGeometry,
  LineBasicMaterial,
  LineSegments
} from "three";

function Cube() {
  let camera, scene, renderer, line;

  useEffect(() => {
    // Init scene
    scene = new Scene();

    // Init Camera (perspective camera)
    camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      500
    );

    // Position camera
    camera.position.set(0, 0, 200);
    camera.lookAt(0, 0, 0);

    // Init renderer
    renderer = new WebGLRenderer();

    // Set size
    renderer.setSize(300, 300);

    // Render to canvas element
    document.getElementById("3d-animation").appendChild(renderer.domElement);

    // Init Geometry object
    let geometry = new BoxBufferGeometry(100, 100, 100);

    let edges = new EdgesGeometry(geometry);

    // Create material with color
    const material = new LineBasicMaterial({ color: 0xdddddd });

    // Mesh edges and material
    line = new LineSegments(edges, material);

    // Add to scene
    scene.add(line);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate
      line.rotation.y += 0.02;

      renderer.render(scene, camera);
    };
    animate();
  }, []);

  const onWindowResize = () => {
    // Camera frustum aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    // After making changes to aspect
    camera.updateProjectionMatrix();
    // Reset size
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  };

  window.addEventListener("resize", onWindowResize, false);

  return <div id='3d-animation'></div>;
}

export default Cube;
