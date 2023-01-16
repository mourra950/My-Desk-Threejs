import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { CSS3DRenderer,CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer.js';

const scenemodel = new URL('../models/scene.gltf', import.meta.url);
//const floortext = new URL('../models/floor.png', import.meta.url);
let content ='<div>' +
'<h1>This is an H1 Element.</h1>' +
'<span class="large">Hello Three.js cookbook</span>' +
'<textarea> And this is a textarea</textarea>' +
'</div>';
//init renderer/scene /camera/lights
//3d model loader
const loader = new GLTFLoader();
const scene = new THREE.Scene();
//camera
//##########################################
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 500);//camera config
camera.position.set(0, 0, 15);//camera position
camera.lookAt(0, 0, 0);

//camera rotation
//###########################################
//lights
//const light = new THREE.PointLight(0xFFE0BD, 2, 1000);
const sun = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
//renderer and linking it to the html
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setClearColor(0xEEEEEE); //background color

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
controls.enableDamping = true
// controls.enableRotate = true
renderer.outputEncoding = THREE.sRGBEncoding;   
//scene.add(light);
scene.add(sun);
// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 5;
//this function is called to render every frame during runtime and to adjust screensize in case something changed
function render() {
    //window resizing
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(render);
}

let floor;



loader.load(
    // resource URL
    scenemodel.href,
    // called when the resource is loaded
    function (gltf) {
        scene.add(gltf.scene);
        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
    },
    // called while loading is progressing
    function (xhr) {

        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        
    },
    // called when loading has errors
    function (error) {

        console.log('An error happened');

    }
);





//function to check if we need to resize the screen pixels height and width
function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
        renderer.setSize(width, height, false);
    }
    return needResize;
}


//to start requestion animation frame loop like while(1)
requestAnimationFrame(render);


function createCSS3DObject(content) 
    {
      // convert the string to dome elements
      var wrapper = document.createElement('div');
      wrapper.innerHTML = content;
      var div = wrapper.firstChild;

      // set some values on the div to style it.
      // normally you do this directly in HTML and 
      // CSS files.
      div.style.width = '370px';
      div.style.height = '370px';
      div.style.opacity = 0.7;
      div.style.background = new THREE.Color(Math.random() * 0xffffff).getStyle();

      // create a CSS3Dobject and return it.
      var object = new CSS3DObject(div);
      return object;
    }
    createCSS3DObject(content) ;