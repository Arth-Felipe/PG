/* import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js';
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

function moveObjectOrbital(obj, t) {        
    obj.rotation.x += 0.2;
    obj.position.y = 20*Math.cos(t) + 0;
    obj.position.z = 20*Math.sin(t) + 0; // These to strings make it work
}

var t = 0;
function animate() {
	requestAnimationFrame(animate);
	spinObject(torusKnot);
	moveObjectFoward(torusKnot);
	moveObjectUp(esfera);
	resizeObject(piramide)

	t += 0.01;  
	moveObjectOrbital(retangulo, t)
	renderer.render( scene, camera );
}

animate();
 */

import * as THREE from 'https://threejs.org/build/three.module.js';
import Stats from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/libs/stats.module.js';

let stats, scene, renderer, windowWidth, windowHeight
let mouseX = 0, mouseY = 0;

const views = [
	{
		left: 0,
		bottom: 0,
		width: 0.5,
		height: 1.0,
		background: new THREE.Color( 0.5, 0.5, 0.7 ),
		eye: [ 0, 300, 1800 ],
		up: [ 0, 1, 0 ],
		fov: 30,
		updateCamera: function ( camera, scene, mouseX ) {
			camera.position.x += mouseX * 0.05;
			camera.position.x = Math.max( Math.min( camera.position.x, 2000 ), - 2000 );
			camera.lookAt( scene.position );
		}
	},
	{
		left: 0.5,
		bottom: 0,
		width: 0.5,
		height: 0.5,
		background: new THREE.Color( 0.7, 0.5, 0.5 ),
		eye: [ 0, 1800, 0 ],
		up: [ 0, 0, 1 ],
		fov: 45,
		updateCamera: function ( camera, scene, mouseX ) {
			camera.position.x -= mouseX * 0.05;
			camera.position.x = Math.max(Math.min( camera.position.x, 2000 ), - 2000);
			camera.lookAt(camera.position.clone().setY(0));
		}
	},
	{
		left: 0.5,
		bottom: 0.5,
		width: 0.5,
		height: 0.5,
		background: new THREE.Color( 0.5, 0.7, 0.7 ),
		eye: [ 1400, 800, 1400 ],
		up: [ 0, 1, 0 ],
		fov: 60,
		updateCamera: function (camera, scene, mouseX) {
			camera.position.y -= mouseX * 0.05;
			camera.position.y = Math.max( Math.min( camera.position.y, 1600 ), - 1600 );
			camera.lookAt( scene.position );
		}
	}
];

init();
animate();

function init() {
	const container = document.getElementById('container');

	for ( let ii = 0; ii < views.length; ++ ii ) {
		const view = views[ii];
		const camera = new THREE.PerspectiveCamera(view.fov, window.innerWidth / window.innerHeight, 1, 10000);
		/* camera.position.fromArray(view.eye);
		camera.up.fromArray(view.up); */
		camera.position.set(0, 0, 100);
		view.camera = camera;
	}

	scene = new THREE.Scene();

	// Adição de luz à cena
	var light = new THREE.PointLight(0xFFFFFF);
	light.position.set(-10, 15, 50);
	scene.add(light);

	var light2 = new THREE.PointLight(0xFFFFFF);
	light2.position.set(5, 40, -50);
	scene.add(light2);

	var ambientLight = new THREE.AmbientLight( 0xffffff, 0.1);
	scene.add(ambientLight);

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

	//Criando retângulo
	const retanguloGeometry = new THREE.BoxGeometry(1, 2, 1);
	const retanguloMaterial = new THREE.MeshPhongMaterial({color: 0x0dfffb});
	const retangulo = new THREE.Mesh(retanguloGeometry, retanguloMaterial);
	scene.add(retangulo);
	//Translação, rotação e escala do Retângulo
	retangulo.translateX(60)
	retangulo.scale.set(10, 10, 10);
	retangulo.rotation.set(1, 1, 0);

	// Criando o objeto pirâmide
	const piramideGeometry = new THREE.TetrahedronGeometry();
	const piramideMaterial = new THREE.MeshPhongMaterial( { color: 0x993399 } );
	const piramide = new THREE.Mesh( piramideGeometry, piramideMaterial );
	scene.add( piramide );
	piramide.translateX(40);
	piramide.scale.set(10, 10, 10);
	piramide.rotation.set(0, 1, 1);

	//Criando o objeto círculo
	const esferaGeometry = new THREE.SphereGeometry( 5, 32, 20 );
	const esferaMaterial = new THREE.MeshPhongMaterial( { color: 0x5589f2 } );
	const esfera = new THREE.Mesh( esferaGeometry, esferaMaterial );
	scene.add( esfera );
	esfera.translateX(23);
	esfera.scale.set(1.5, 1.5, 1.5);
	esfera.rotation.set(0, 1, 1);

	// Criando o objeto do nó de torus (toro ou toróide)
	const torusGeometry = new THREE.TorusKnotGeometry( 10, 3, 31, 4, 6, 3 );
	const torusMaterial = new THREE.MeshPhongMaterial( { color: 0xff0080 } );
	const torusKnot = new THREE.Mesh( torusGeometry, torusMaterial );
	torusKnot.rotation.set(0.3, 2.9, 0);
	scene.add( torusKnot );

	//const count = geometry1.attributes.position.count;
	//geometry1.setAttribute( 'color', new THREE.BufferAttribute( new Float32Array( count * 3 ), 3 ) );

	//const geometry2 = geometry1.clone();
	//const geometry3 = geometry1.clone();

	/* const color = new THREE.Color();
	const positions1 = geometry1.attributes.position;
	const positions2 = geometry2.attributes.position;
	const positions3 = geometry3.attributes.position; */
	//const colors1 = geometry1.attributes.color;
	/* const colors2 = geometry2.attributes.color;
	const colors3 = geometry3.attributes.color; */

	/* const material = new THREE.MeshPhongMaterial( {
		color: 0xffffff,
		flatShading: true,
		vertexColors: true,
		shininess: 0
	} ); */

	/* const wireframeMaterial = new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, transparent: true } );

	let mesh = new THREE.Mesh( geometry1, material );
	let wireframe = new THREE.Mesh( geometry1, wireframeMaterial );
	mesh.add( wireframe );
	mesh.position.x = - 400;
	mesh.rotation.x = - 1.87;
	scene.add( mesh );

	mesh = new THREE.Mesh( geometry2, material );
	wireframe = new THREE.Mesh( geometry2, wireframeMaterial );
	mesh.add( wireframe );
	mesh.position.x = 400;
	scene.add( mesh );

	mesh = new THREE.Mesh( geometry3, material );
	wireframe = new THREE.Mesh( geometry3, wireframeMaterial );
	mesh.add( wireframe );
	scene.add( mesh ); */

	renderer = new THREE.WebGLRenderer( {antialias: true });
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	stats = new Stats();
	//container.appendChild(stats.dom);
	document.addEventListener('mousemove', onDocumentMouseMove);
}

function onDocumentMouseMove( event ) {
	mouseX = (event.clientX - windowWidth/2);
	mouseY = (event.clientY - windowHeight/2);
}

function updateSize() {
	if (windowWidth != window.innerWidth || windowHeight != window.innerHeight) {
		windowWidth = window.innerWidth;
		windowHeight = window.innerHeight;
		renderer.setSize(windowWidth, windowHeight);
	}
}

function animate() {
	render();
	stats.update();
	requestAnimationFrame(animate);
}

function render() {
	updateSize();
	for (let ii = 0; ii < views.length; ++ ii) {
		const view = views[ii];
		const camera = view.camera;
		view.updateCamera(camera, scene, mouseX, mouseY);
		const left = Math.floor( windowWidth * view.left);
		const bottom = Math.floor(windowHeight * view.bottom);
		const width = Math.floor(windowWidth * view.width);
		const height = Math.floor(windowHeight * view.height);

		renderer.setViewport(left, bottom, width, height);
		renderer.setScissor(left, bottom, width, height);
		renderer.setScissorTest(true);
		renderer.setClearColor(view.background);

		camera.aspect = width / height;
		camera.updateProjectionMatrix();
		renderer.render(scene, camera);
	}
}