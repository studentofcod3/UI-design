import React, { useEffect } from "react";

import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from "three";

function Cube() {
  let camera, scene, renderer, cube;

  useEffect(() => {
    // Init scene
    scene = new Scene();

    // Init Camera (perspective camera)
    camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // Init renderer
    renderer = new WebGLRenderer();

    // Set size
    renderer.setSize(150, 150);

    // Render to canvas element
    document.getElementById("3d-animation").appendChild(renderer.domElement);

    // Init BoxGeometry object
    const geometry = new BoxGeometry(2, 2, 2);

    // Create material with color
    const material = new MeshBasicMaterial({ color: 0x1658dd });

    // Mesh geometry and material
    cube = new Mesh(geometry, material);

    // Add to scene
    scene.add(cube);

    // Position camera
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate cube (value on right dictates speed)
      cube.rotation.x += 0.02;
      cube.rotation.y += 0.02;

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
    renderer.setSize(300, 300);
  };

  window.addEventListener("resize", onWindowResize, false);

  return <div id='3d-animation'></div>;
}

export default Cube;
