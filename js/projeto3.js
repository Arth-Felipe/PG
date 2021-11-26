import * as THREE from 'https://threejs.org/build/three.module.js';
import Stats from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/libs/stats.module.js';
import {GUI} from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/libs/dat.gui.module.js';

let stats, scene, renderer, windowWidth, windowHeight
let mouseX = 0, mouseY = 0;

//Definindo objetos
const geometry = new THREE.CylinderGeometry( 10, 5, 20, 32 );
const material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
const cilindro = new THREE.Mesh(geometry, material);

const torusGeometry = new THREE.TorusKnotGeometry( 10, 3, 31, 4, 6, 3 );
const torusMaterial = new THREE.MeshPhongMaterial( { color: 0xff0080 } );
const torusKnot = new THREE.Mesh( torusGeometry, torusMaterial );

const piramideGeometry = new THREE.TetrahedronGeometry();
const piramideMaterial = new THREE.MeshPhongMaterial( { color: 0x993399 } );
const piramide = new THREE.Mesh( piramideGeometry, piramideMaterial );

const esferaGeometry = new THREE.SphereGeometry( 5, 32, 20 );
const esferaMaterial = new THREE.MeshPhongMaterial( { color: 0x5589f2 } );
const esfera = new THREE.Mesh( esferaGeometry, esferaMaterial );

const retanguloGeometry = new THREE.BoxGeometry( 1, 2, 1 );
const retanguloMaterial = new THREE.MeshPhongMaterial( {color: 0x0dfffb} );
const retangulo = new THREE.Mesh( retanguloGeometry, retanguloMaterial );

//Definindo as 3 visões
const views = [
	{
		left: 0,
		bottom: 0,
		width: 0.5,
		height: 1.0,
		background: new THREE.Color(0x474444),
		eye: [ 0, 300, 1800 ],
		up: [ 0, 1, 0 ],
		fov: 30,
		updateCamera: function ( camera, scene, mouseX ) {
			camera.position.x += mouseX * 0.01;
			camera.position.x = Math.max( Math.min( camera.position.x, 200 ), - 200 );
			camera.lookAt( scene.position );
		}
	},
	{
		left: 0.5,
		bottom: 0,
		width: 0.5,
		height: 0.5,
		background: new THREE.Color(0x757171),
		eye: [ 0, 1800, 0 ],
		up: [ 0, 0, 1 ],
		fov: 45,
		updateCamera: function ( camera, scene, mouseX ) {
			camera.position.x -= mouseX * 0.01;
			camera.position.x = Math.max(Math.min( camera.position.x, 200 ), - 200);
			camera.lookAt(camera.position.clone().setY(0));
		}
	},
	{
		left: 0.5,
		bottom: 0.5,
		width: 0.5,
		height: 0.5,
		background: new THREE.Color(0x948f8f),
		eye: [ 1400, 800, 1400 ],
		up: [ 0, 1, 0 ],
		fov: 60,
		updateCamera: function (camera, scene, mouseX) {
			camera.position.y -= mouseX * 0.01;
			camera.position.y = Math.max( Math.min( camera.position.y, 200 ), - 200 );
			camera.lookAt( scene.position );
		}
	}
];

const container = document.getElementById('container');

for ( let ii = 0; ii < views.length; ++ ii ) {
	const view = views[ii];
	const camera = new THREE.PerspectiveCamera(view.fov, window.innerWidth / window.innerHeight, 1, 10000);
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

function iniciando(){

// Adicionando os objetos em cena
scene.add( torusKnot );
scene.add( piramide );
scene.add( esfera );
scene.add( retangulo );
scene.add(cilindro);

// translação dos objetos
piramide.translateX(40);
esfera.translateX(23);
cilindro.translateX(-25);
cilindro.translateZ(15);
retangulo.translateX(60)

// escala dos objetos
piramide.scale.set(10, 10, 10);
esfera.scale.set(1.5, 1.5, 1.5);
cilindro.scale.set(1, 1.8, 1);
retangulo.scale.set(5, 5, 5);

// rotação dos objetos
torusKnot.rotation.set(0.3, 2.9, 0);
piramide.rotation.set(0, 1, 1);
esfera.rotation.set(0, 1, 1);
retangulo.rotation.set(1, 1, 0);
}

renderer = new THREE.WebGLRenderer( {antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

stats = new Stats();
document.addEventListener('mousemove', onDocumentMouseMove);

const gui = new GUI()
const cubeFolder = gui.addFolder('Rotacionar Cilindro')
cubeFolder.add(cilindro.rotation, 'x', 0, Math.PI * 2)
cubeFolder.add(cilindro.rotation, 'z', 0, Math.PI * 2)
cubeFolder.open()

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

function animate(){
	//Renderizando e realizando os movimentos
	render();
	stats.update();
	requestAnimationFrame(animate);
	spinObject(torusKnot);
	moveObjectUp(esfera);
	moveObjectFoward(torusKnot);
	resizeObject(piramide);
	spinObject(retangulo);
}


iniciando();
animate();