import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
import {GUI} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/libs/dat.gui.module.js';

let x, y, z

// Criando a cena e posicionando a câmera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Renderizando
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0x3d3c3c );
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 20, 100);
controls.update();

// Adição de luz à cena
var light = new THREE.PointLight(0xFFFFFF);
light.position.set(-10, 15, 50);
scene.add(light);

var light2 = new THREE.PointLight(0xFFFFFF);
light2.position.set(5, 40, -50);
scene.add(light2);

var ambientLight = new THREE.AmbientLight( 0xffffff, 0.1);
scene.add(ambientLight);

// Criando o objeto do nó de torus (toro ou toróide)
const torusGeometry = new THREE.TorusKnotGeometry( 10, 3, 31, 4, 6, 3 );
const torusMaterial = new THREE.MeshPhongMaterial( { color: 0xff0080 } );
const torusKnot = new THREE.Mesh( torusGeometry, torusMaterial );
torusKnot.rotation.set(0.3, 2.9, 0);
scene.add( torusKnot );

// Criando o objeto pirâmide
const piramideGeometry = new THREE.TetrahedronGeometry();
const piramideMaterial = new THREE.MeshPhongMaterial( { color: 0x993399 } );
const piramide = new THREE.Mesh( piramideGeometry, piramideMaterial );
scene.add( piramide );

//Criando o objeto círculo
const esferaGeometry = new THREE.SphereGeometry( 5, 32, 20 );
const esferaMaterial = new THREE.MeshPhongMaterial( { color: 0x5589f2 } );
const esfera = new THREE.Mesh( esferaGeometry, esferaMaterial );
scene.add( esfera );

//Criando retângulo
const retanguloGeometry = new THREE.BoxGeometry( 1, 2, 1 );
const retanguloMaterial = new THREE.MeshPhongMaterial( {color: 0x0dfffb} );
const retangulo = new THREE.Mesh( retanguloGeometry, retanguloMaterial );
scene.add( retangulo );

// translação do objeto
piramide.translateX(40);
esfera.translateX(23);

// escala do objeto
piramide.scale.set(10, 10, 10);
esfera.scale.set(1.5, 1.5, 1.5);

// rotação do objeto
piramide.rotation.set(0, 1, 1);
esfera.rotation.set(0, 1, 1);

// Criando objeto cilindro
const geometry = new THREE.CylinderGeometry( 10, 5, 20, 32 );
const material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
const cilindro = new THREE.Mesh(geometry, material);
scene.add(cilindro);

// translação do objeto cilindro
cilindro.translateX(-25);
cilindro.translateZ(15);
// escala do objeto cilindro
cilindro.scale.set(1, 1.8, 1);

//Translação, rotação e escala do Retângulo
retangulo.translateX(60)
retangulo.scale.set(5, 5, 5);
retangulo.rotation.set(1, 1, 0)

const gui = new GUI()
const cubeFolder = gui.addFolder('Rotacionar Cilindro')
cubeFolder.add(cilindro.rotation, 'x', 0, Math.PI * 2)
cubeFolder.add(cilindro.rotation, 'z', 0, Math.PI * 2)
cubeFolder.open()
const cameraFolder = gui.addFolder('Zoom da Câmera')
cameraFolder.add(camera.position, 'z', 20, 100)
cameraFolder.open()

// Função de animação do objeto
function spinObject(obj) {
	obj.rotation.x += 0.1;
	obj.rotation.y += 0.01;
	obj.rotation.z += 0.05;
}

function moveObjectUp(obj) {
	obj.position.y += 0.8;	

	if (obj.position.y >= 40) {
		obj.position.y = obj.position.y - 35;
	}
}

function moveObjectFoward(obj) {
	obj.position.z += 0.8;

	if (obj.position.z >= 40) {
		obj.position.z = obj.position.y - 35;
	}
}

function resizeObject(obj) {
	obj.scale.x += 1;
	if (obj.scale.x >= 50) {
		obj.scale.x = obj.scale.x - 100;
	}
}

function animate() {
	requestAnimationFrame(animate);
	spinObject(torusKnot);
	moveObjectFoward(torusKnot);
	moveObjectUp(esfera);
	resizeObject(piramide)
	renderer.render( scene, camera );
}

animate();
