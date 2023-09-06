<script>
	import '../app.css';
	import Sidebar from './Sidebar.svelte';
	// import { getAnalytics } from 'firebase/analytics';
	// import { initializeApp } from 'firebase/app';
	// import { onMount } from 'svelte';
	// import { initializeAuth } from 'firebase/auth';
	// import { firebaseConfig } from '$lib/firebase';
	// onMount(() => {
	// 	const app = initializeApp(firebaseConfig);
	// 	const auth = initializeAuth(app);
	// 	const analytics = getAnalytics(app);
	// });
</script>

<div class="h-screen overflow-hidden flex w-screen">
	<Sidebar />
	<slot />
</div>
