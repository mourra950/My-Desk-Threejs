import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';





const scenemodel = new URL('../models/scene.gltf', import.meta.url);
//init renderer/scene /camera/lights
//3d model loader
const loader = new GLTFLoader();
const scene = new THREE.Scene();
//camera
//##########################################
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 20, 0);//camera position
camera.lookAt(0, 0, 0);

//camera rotation
//###########################################
//lights
//const light = new THREE.PointLight(0xFFE0BD, 2, 1000);
const sun = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
scene.add(sun);

//
const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer( { canvas } );
renderer.setClearColor(new THREE.Color(0x0C2D48));
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
controls.enableDamping = true
renderer.outputEncoding = THREE.sRGBEncoding;   


function render() {
    //window resizing
    if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
     
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
        // html2canvas(htmlContainer).then(canvas1=> {
        //     console.log(gltf.scene.getObjectByName('screen').material)
        //     // Create a Three.js texture from the canvas
        //     const texture = new THREE.CanvasTexture(canvas1);
        //     const material = new THREE.MeshBasicMaterial({map: texture});
        //     gltf.scene.getObjectByName('screen').material=material
        //    
        console.log(gltf.scene.getObjectByName('screen').material)
        //   });

        // html2canvas(htmlContainer).then(canvas => {
        //     // Create a Three.js texture from the canvas
        //     const texture = new THREE.CanvasTexture(canvas);
          
            
        //     const material = new THREE.MeshBasicMaterial({map: texture});
        //     gltf.scene.getObjectByName('screen').material=material
        //     // Render the scene
        //     //renderer.render(scene, camera);
        //   });
        
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
const button = document.getElementById('my-button');
button.addEventListener('click', () => {
  alert('Button clicked!');
});

//to start requestion animation frame loop like while(1)








    

   
    
    
    requestAnimationFrame(render);
