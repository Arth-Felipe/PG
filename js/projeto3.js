const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry(.1, 5, 1);
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.translateX(-2);

const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube2 = new THREE.Mesh( geometry2, material2 );
scene.add( cube2 );
cube2.translateX(0);

const geometry3 = new THREE.ConeGeometry();
const material3 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
const cube3 = new THREE.Mesh( geometry3, material3 );
scene.add( cube3 );
cube3.translateX(2);

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
    cube3.rotation.x += 0.01;
    cube3.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

