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


// translação do objeto
piramide.translateX(40);
esfera.translateX(23);

// escala do objeto
piramide.scale.set(10, 10, 10);
esfera.scale.set(1.5, 1.5, 1.5);

// rotação do objeto
piramide.rotation.set(0, 1, 1);
esfera.rotation.set(0, 1, 1);



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

// Criando objeto Lathe
const points = [];
for ( let i = 0; i < 8; i ++ ) {
	points.push(new THREE.Vector2( Math.sin( i * 0.8 ) * 1.2 + 5, ( i - 5 ) * 2 ));
}
const latheGeometry = new THREE.LatheGeometry(points);
const latheMaterial = new THREE.MeshPhongMaterial();
// definindo objeto de textura
const texture = new THREE.TextureLoader().load("./imgs/akatsuki.jpg");
// adicionando à textura do objeto a configuração criada acima
latheMaterial.map = texture
// finalizando objeto e adicionando-o à cena
const lathe = new THREE.Mesh(latheGeometry, latheMaterial);
scene.add(lathe);

// translação do objeto lathe
lathe.translateX(-20);
lathe.translateZ(25);
// escala do objeto lathe
lathe.scale.set(1.5, 2, 1);
// rotação do objeto lathe
lathe.rotation.set(0, 1.2, 1);