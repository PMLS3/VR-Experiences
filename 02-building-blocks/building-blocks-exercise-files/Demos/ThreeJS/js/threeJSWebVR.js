if ( WEBVR.isAvailable() === false ) {
	document.body.appendChild( WEBVR.getMessage() );
}

var container;
var camera, scene, renderer;
var effect, controls;
var cube;
var room;

setupScene();

function setupScene() {
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 10 );
	scene.add( camera );

	controls = new THREE.VRControls( camera );
	controls.standing = true;

	room = new THREE.Mesh(
		new THREE.BoxGeometry( 6, 6, 6, 8, 8, 8 ),
		new THREE.MeshBasicMaterial( { color: 0xeeeeee, wireframe: true } )
	);
				
	scene.add( room );

	var geometry = new THREE.BoxGeometry( 1,1,1 );
	cube = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } ) );
	cube.position.z = - 4;
	cube.position.y = -2;
	room.add(cube);

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setClearColor( 0x505050 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	effect = new THREE.VREffect( renderer );

	if ( WEBVR.isAvailable() === true ) {
		document.body.appendChild( WEBVR.getButton( effect ) );
	}

	render();
}

function render() {
	controls.update();
	effect.requestAnimationFrame( render );
	cube.rotation.y = cube.rotation.y + 0.01;
	effect.render( scene, camera );
}


		