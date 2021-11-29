<script context="module" lang="ts">
	export const prerender = true;
	//export const ssr = false;
</script>

<script lang="ts">
	import {
		Canvas,
		Scene,
		PerspectiveCamera,
		Points,
		DirectionalLight,
		PointsMaterial,
		BufferGeometry,
		WebGLRenderer,
		AmbientLight,
		MathUtils,
		Float32BufferAttribute,
		OrbitControls
	} from 'svelthree';

	import gsap from 'gsap';

	const vertices = [];

	for (let i = 0; i < 3000; i++) {
		const x = MathUtils.randFloatSpread(1000);
		const y = MathUtils.randFloatSpread(1000);
		const z = MathUtils.randFloatSpread(1000);

		vertices.push(x, y, z);
	}

	const geometry = new BufferGeometry();
	geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));

	const material = new PointsMaterial({
		color: 0x888888,
		size: 10,
		sizeAttenuation: true
	});

	function handleScroll(e) {
		let obj = getPoints();
		gsap.to(obj.scale, {
			duration: 1,
			x: obj.scale.x + e.deltaY / 500,
			y: obj.scale.y + e.deltaY / 500,
			z: obj.scale.z + e.deltaY / 500,
			ease: 'elastic.out'
		});
	}

	let getPoints;
</script>

<h1>SvelteKit + <a href="https://github.com/vatro/svelthree">svelthree</a> Integration Test</h1>
<Canvas
	let:sti
	w={800}
	h={600}
	interactive
	on:wheel={handleScroll}
	style="margin: auto; border: 1px solid;"
>
	<Scene {sti} let:scene id="scene1" props={{ background: 0xedf2f7 }}>
		<PerspectiveCamera {scene} id="cam1" props={{ position: [0, 0, 2000], lookAt: [0, 0, 0] }} />

		<DirectionalLight {scene} />

		<AmbientLight {scene} props={{ color: 0xffffff, intensity: 1 }} />

		<Points
			{scene}
			{geometry}
			{material}
			mat={{ color: 0xff3e00 }}
			pos={[0, 0, 0]}
			interact
			bind:getPoints
		/>
		<OrbitControls {scene} autoRotate enableDamping />
	</Scene>

	<WebGLRenderer {sti} sceneId="scene1" camId="cam1" config={{ antialias: true, alpha: false }} />
</Canvas>
