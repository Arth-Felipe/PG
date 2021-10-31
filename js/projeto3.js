// Criando a cena e posicionando a câmera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 50;

// Renderizando
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Criando o objeto do nó de torus (toro ou toróide)
const torusGeometry = new THREE.TorusKnotGeometry( 10, 3, 31, 4, 6, 3 );
const torusMaterial = new THREE.MeshPhongMaterial( { color: 0xff0080 } );
const torusKnot = new THREE.Mesh( torusGeometry, torusMaterial );
torusKnot.rotation.set(0.3, 2.9, 0);
scene.add( torusKnot );

// Adição de luz à cena
var light = new THREE.PointLight(0xFFFFFF);
light.position.set(-10, 15, 50);
scene.add(light);

// Função de animação do objeto
function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();