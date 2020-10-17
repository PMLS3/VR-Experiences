//https://threejs.org/docs/index.html#Manual/Getting_Started/Creating_a_scene

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 2, 2, 2 );
var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var cube = new THREE.Mesh( geometry, material );
scene.add(cube);

camera.position.z = 5;
camera.position.y = 1.2;

function render() {
	requestAnimationFrame( render );
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}

render();