<script lang="ts">
	import bg from '$lib/images/login-bacground.svg';
	import Input from '../../components/input.svelte';

	function check(val: string) {
		if (val != 'adhi') {
			return true;
		}
		return false;
	}
</script>

<div id="main" class="h-screen w-screen overflow-hidden flex justify-center items-center">
	<img src={bg} alt="bg-app" class="h-screen w-full z-[-10] fixed top-0 left-0" />
	<div
		class="flex justify-start items-center flex-col w-screen h-screen md:w-[25rem] md:h-fit bg-primary-dark p-8 rounded-[.2rem] ease-in-out transition-all duration-300"
	>
		<h1 class="font-display text-lg text-white mb-2">Create An Account</h1>
		<form action="" class="flex flex-col justify-center items-start w-full">
			<Input type="email" name="email" label="Email" required />
			<Input
				type="text"
				name="displayname"
				label="displayname"
				required
				helperText="This is how others see you."
			/>
			<Input
				type="text"
				name="username"
				label="username"
				required
				helperText="Hanya boleh mengunkan huruf"
			/>
			<Input type="password" name="password" label="password" required />
			<button class="w-full bg-blue-400 p-2 rounded-sm text-white font-display mb-1" type="submit"
				>Register</button
			>
		</form>
	</div>
</div>
