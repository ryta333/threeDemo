import * as THREE from 'three';
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const meterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(0, 0, 10));
points.push(new THREE.Vector3(61, 20, 10));
points.push(new THREE.Vector3(23, 30, 10));

const geometery = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometery, meterial);

function render() {
  points.push(new THREE.Vector3(Math.random() * 20, Math.random()  * 25, Math.random()  * 20));
  const geometery = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometery, meterial);
  scene.add(line);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();
