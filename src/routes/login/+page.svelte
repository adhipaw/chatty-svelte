<script>
	import bg from '$lib/images/login-bacground.svg';
</script>

<div id="main" class="h-screen w-screen overflow-hidden flex justify-center items-center">
	<img src={bg} alt="bg-app" class="h-screen w-full z-[-10] fixed top-0 left-0" />
	<div
		class="flex justify-start items-center flex-col w-screen h-screen md:w-[25rem] md:h-fit bg-primary-dark p-8 rounded-[.2rem]"
	>
		<h1 class="font-display text-lg text-white">Welcome Back!</h1>
		<p class="text-white/50 mb-4">We are Exited To See You Again!</p>
		<form action="" class="flex flex-col justify-center items-start w-full">
			<label for="username" class="text-slate-400 font-display uppercase text-xs mb-1"
				>Email *</label
			>
			<input
				type="text"
				id="username"
				name="username"
				class="bg-black/50 text-white w-full text-base p-2 outline-none rounded-sm mb-4"
			/>
			<label for="password" class="text-slate-400 font-display uppercase text-xs mb-1"
				>password *</label
			>
			<input
				type="text"
				id="password"
				name="password"
				class="bg-black/50 text-white w-full text-base p-2 outline-none rounded-sm mb-1"
			/>
			<a href="./pelupa" class="text-blue-400 text-sm mb-4">Forgot Your password?</a>
			<button class="w-full bg-blue-400 p-2 rounded-sm text-white font-display mb-1" type="button"
				>Log In</button
			>
			<p class="text-white/50 text-sm">
				Need an account? <a href="./register" class="text-blue-400 text-sm">Register</a>
			</p>
		</form>
	</div>
</div>
