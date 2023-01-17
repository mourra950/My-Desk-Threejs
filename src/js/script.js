import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const backgroundmusicurl = new URL('../sounds/lofi.mp3', import.meta.url);


let timer=0
const scenemodel = new URL('../models/scene.gltf', import.meta.url);
//init renderer/scene /camera/lights
//3d model loader
const loader = new GLTFLoader();
const scene = new THREE.Scene();
//camera
//##########################################
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 20, 5);//camera position
camera.lookAt(0, 0, 0);
const cubearray = new Array();//array to iterate over cubes
let n = 0;
//camera rotation
//###########################################
//lights
//const light = new THREE.PointLight(0xFFE0BD, 2, 1000);
const sun = new THREE.HemisphereLight(0xffffff, 0x0000FF, 0.3);
scene.add(sun);
const directionalLight = new THREE.DirectionalLight( 0x4255ff, 0.4 );

scene.add( directionalLight );
//
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer( { canvas } );
renderer.setClearColor(new THREE.Color(0x0C2D48));
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
controls.enableDamping = true
renderer.outputEncoding = THREE.sRGBEncoding;   
const listener = new THREE.AudioListener();
camera.add(listener);
const sound = new THREE.Audio(listener);
const audioLoader = new THREE.AudioLoader();
audioLoader.load(backgroundmusicurl.href, function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(true);
    sound.setVolume(0.2);
});

const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
function createcube() {
    let material = new THREE.MeshPhongMaterial({ color: Math.random() * (16777215) });
    let cube = new THREE.Mesh(geometry, material);
    px = (Math.random() * (40 - -40) + -40);
    pz = (Math.random() * (40 - -40) + -40);
    cube.position.set(px, 20, pz);
    scene.add(cube);
    cubearray.push(cube);
    n++;
  }


function render() {
    if (timer > 4) {
        timer = 0;
        createcube();
      }
    //window resizing
    if (n > 0) {
        cubearray.forEach((element, index) => {
          element.position.y -= 0.04;
          if (element.position.y < -5) {
            cubearray.splice(index, 1);
            scene.remove(element);
            element.geometry.dispose();
            element.material.dispose();
          }
        });
      }
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
     timer++;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}




loader.load(
    // resource URL
    scenemodel.href,
    // called when the resource is loaded
    function (gltf) {
        scene.add(gltf.scene);
        
        gltf.animations; // Array<THREE.AnimationClip>
        //gltf.scene.scale.set(10,10,10); // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
        let placeholder=gltf.scene.getObjectByName('lightsource');
        directionalLight.position.set(2,2,-13);
        
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
    document.addEventListener('keyup', (event) => {
        if (event.key == 'm') {
            if (sound.isPlaying)
                sound.stop();
            else {
                sound.play();
            }
        }
    
    }, false);