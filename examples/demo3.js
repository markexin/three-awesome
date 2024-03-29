import * as THREE from 'three';
import { GLTFLoader } from '../GLTFLoader.min.js';

// 创建场景
const scene = new THREE.Scene();

// 创建摄像机
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set( 0, 0.5, 3.8);

// 创建渲染器
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// 将渲染器的背景颜色设置为白色
renderer.setClearColor(0xffffff);

// 将渲染器的输出添加到HTML文档中
document.body.appendChild(renderer.domElement);

// 使用GLTFLoader加载模型
const loader = new GLTFLoader();
loader.load('./examples/sofa/ImageToStl.com_koltuk.glb', function (gltf) {
    // 获取加载的模型
    const model = gltf.scene;
    
    // 将模型添加到场景中
    scene.add(model);

    // 创建一个环境光源
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // 创建一个定向光源
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // 渲染场景
    renderer.render(scene, camera);
});

// const scene = new THREE.Scene();
// const loader = new GLTFLoader(); //创建一个GLTF加载器

// // 场景
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// // 将渲染器的背景颜色设置为白色
// renderer.setClearColor(0xffffff);
// document.body.appendChild( renderer.domElement );

// // 相机
// const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
// camera.position.set( 0, 0, 0);
// camera.far = 100000.00;
// camera.fov = 45;

// // 灯光
// const light = new THREE.AmbientLight( 0x404040 ); 
// scene.add(light)


// // 材质着色
// const depthMaterial = new THREE.MeshDepthMaterial();

// loader.load( './examples/sofa/ImageToStl.com_koltuk.glb', function ( gltf ) {
    // gltf.scene.traverse((child) => {
    //     if (child.isMesh) {
    //         child.material = depthMaterial;
    //     }
    // });
// 	scene.add( gltf.scene );
// }, undefined, function ( error ) {
// 	console.error( error );
// } );


// renderer.render( scene, camera );



