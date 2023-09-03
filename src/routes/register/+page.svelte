<script lang="ts">
	import bg from '$lib/images/login-bacground.svg';
	import Input from '../../components/input.svelte';
	import Select from '../../components/select.svelte';
	import { API_URL } from '$lib/static/url';
	import axios from 'axios';

	async function register(ev: SubmitEvent) {
		ev.preventDefault();
		const element = ev.currentTarget as HTMLFormElement;
		const formData = new FormData(element);
		const response = await axios({ data: formData, url: API_URL + 'register', method: 'post' });
		console.log(response);
	}
</script>

<div id="main" class="h-screen w-screen overflow-hidden flex justify-center items-center">
	<img src={bg} alt="bg-app" class="h-screen w-full z-[-10] fixed top-0 left-0" />
	<div
		id="resizeable-wrapper"
		class="flex justify-start items-center flex-col w-screen h-screen md:w-[25rem] md:h-fit bg-primary-dark p-8 rounded-[.2rem] ease-in-out transition-[height] duration-300"
	>
		<h1 class="font-display text-lg text-white mb-2">Create An Account</h1>
		<form on:submit={register} class="flex flex-col justify-center items-start w-full">
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
			<label for="label" class="text-slate-400 font-display uppercase text-xs mb-1 font-semibold"
				>Date Of Birth <span class="text-red-600">*</span></label
			>
			<div class="flex justify-between w-full gap-2">
				<Select name="month" id="month" options={{ '1': 'January', '2': 'Febuary' }} />
				<Select name="month" id="date" options={{ '1': 'January' }} />
				<Select name="month" id="year" options={{ '1': 'January' }} />
			</div>

			<button class="w-full bg-blue-400 p-2 rounded-sm text-white font-display mb-1" type="submit"
				>Register</button
			>
		</form>
	</div>
</div>
