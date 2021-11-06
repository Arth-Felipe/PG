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

// Criando o objeto pirâmide
const piramideGeometry = new THREE.TetrahedronGeometry();
const piramideMaterial = new THREE.MeshPhongMaterial( { color: 0x993399 } );
const piramide = new THREE.Mesh( piramideGeometry, piramideMaterial );
scene.add( piramide );

//Criando o objeto círculo
const esferaGeometry = new THREE.SphereGeometry( 5, 32, 20 );
const esferaMaterial = new THREE.MeshBasicMaterial( { color: 0x5589f2 } );
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

// Criando objeto Lathe
const points = [];
for ( let i = 0; i < 8; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
const latheGeometry = new THREE.LatheGeometry(points, 5, 6, 6.3);
const latheMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );
// finalizando objeto e adicionando-o à cena
const lathe = new THREE.Mesh(latheGeometry, latheMaterial);
scene.add(lathe);

// translação do objeto lathe
lathe.translateX(-25);
lathe.translateZ(15);
// escala do objeto lathe
lathe.scale.set(1, 1.2, 1);
// rotação do objeto lathe


//Translação, rotação e escala do Retângulo
retangulo.translateX(60)
retangulo.scale.set(5, 5, 5);
retangulo.rotation.set(1, 1, 0)

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