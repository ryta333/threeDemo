import * as THREE from 'three';

// 创建场景对象.
const scene = new THREE.Scene();

// 创建网格模型
// const sphereGeometry = new THREE.SphereGeometry(60, 40, 40); // 创建球体
const boxGeometry = new THREE.BoxGeometry(100, 100, 100);

// 材质对象
const meterial = new THREE.MeshLambertMaterial({
    color: 0x0000ff
});

// 网格模型对象Mesh
const mesh = new THREE.Mesh(boxGeometry, meterial);

scene.add(mesh) // 添加到场景中

/**
 * 设置光源
 */
// 点光源
const point = new THREE.PointLight(0xffffff);
point.position.set(400, 200, 300); // 光源位置
scene.add(point);

// 环境光
const ambient = new THREE.AmbientLight(0x444444);
scene.add(ambient);

/**
 * 相机设置
 */

const width = window.innerWidth;
const height = window.innerHeight;
const k = width / height;
const s = 200; // 三维场景显示范围控制系数, 系数越大显示的范围越大
const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
camera.position.set(200, 300, 200); // 相机位置
camera.lookAt(scene.position);

/**
 * 创建渲染对象
 */

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); // 渲染区域尺寸
renderer.setClearColor(0xb9d3ff, 1) // 背景色
document.body.appendChild(renderer.domElement); // 插入canvas对象

function render() {
    renderer.render(scene,camera);//执行渲染操作
    mesh.rotateY(0.01);//每次绕y轴旋转0.01弧度
    requestAnimationFrame(render);
}

render();
