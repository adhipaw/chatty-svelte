<script lang="ts">
	import bg from '$lib/images/login-bacground.svg';
	import Input from '../../lib/components/input.svelte';
	import Select from '../../lib/components/select.svelte';
	import { API_URL } from '$lib/static/url';
	import axios from 'axios';
	import { DATES, MONTH, YEARS } from '$lib/static/date_list';
	import Chackbox from '$lib/components/chackbox.svelte';

	let subscribeElement: any;

	async function register(ev: SubmitEvent) {
		ev.preventDefault();
		console.log(subscribeElement);
		const element = ev.currentTarget as HTMLFormElement;
		const formData = new FormData(element);
		const data = {
			email: formData.get('email'),
			display_name: formData.get('displayname'),
			username: formData.get('username'),
			password: formData.get('password'),
			bitrh_day: `${formData.get('year')}/${formData.get('month')}/${formData.get('date')}`,
			subscribe_news: subscribeElement.checked
		};
		const response = await axios.post(API_URL + 'register', data);
	}

	const validateEmail = async (val: string) => {
		if (val === '') return;
		const response = await axios.post(API_URL + 'register/check', { email: val });
		if (response.data?.email) return true;
		return false;
	};

	const validateUsername = async (val: string) => {
		if (val === '') return;
		if (val.length <= 3) return false;
		const response = await axios.post(API_URL + 'register/check', { username: val });
		if (response.data?.username) return true;
		return false;
	};
</script>

<div id="main" class="h-screen w-screen overflow-hidden flex justify-center items-center">
	<img src={bg} alt="bg-app" class="h-screen w-full z-[-10] fixed top-0 left-0" />
	<div
		id="resizeable-wrapper"
		class="flex justify-start items-center flex-col w-screen h-screen md:w-[25rem] md:h-fit bg-primary-dark p-8 rounded-[.2rem] ease-in-out transition-[height] duration-300"
	>
		<h1 class="font-display text-lg text-white mb-2">Create An Account</h1>
		<form
			on:submit={register}
			class="flex flex-col justify-center items-start w-full"
			autocomplete="on"
		>
			<Input
				type="email"
				name="email"
				label="Email"
				helperText="Email to register"
				required
				validator={{
					fallback: validateEmail,
					onErrorText: 'Email are registired!',
					onSuccesText: 'You can use this Email!'
				}}
			/>
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
				minlength={3}
				maxlength={30}
				validator={{
					fallback: validateUsername,
					onErrorText: 'Username Existed!',
					onSuccesText: 'You can use this username!'
				}}
				required
				helperText="Use only alphabet and numeric"
			/>
			<Input
				type="password"
				name="password"
				label="password"
				required
				minlength={8}
				maxlength={40}
			/>
			<label for="label" class="text-slate-400 font-display uppercase text-xs mb-1 font-semibold"
				>Date Of Birth <span class="text-red-600">*</span></label
			>
			<div class="flex justify-between w-full gap-2">
				<Select name="month" id="month" options={MONTH} placeholder="Month" />
				<Select name="date" id="date" options={DATES} placeholder="Date" />
				<Select name="year" id="year" options={YEARS} placeholder="Year" />
			</div>

			<div class="flex gap-2 items-start mb-4">
				<input
					bind:this={subscribeElement}
					type="checkbox"
					class="flex-shrink-0 m-1"
					name="suscribe"
					id="suscribe"
				/>
				<label class="text-xs text-slate-300" for="name"
					>(Optional) It’s okay to send me emails with Discord updates, tips, and special offers.
					You can opt out at any time.</label
				>
			</div>

			<button
				class="w-full bg-btn-primary p-2 rounded-sm text-white font-display mb-2"
				type="submit">Register</button
			>
			<p class="text-slate-300 text-xs">
				By Registering, you accept <span class="text-blue-400">Terms and Condition</span> and
				<span class="text-blue-400">Privacy Condition</span>
			</p>
		</form>
	</div>
</div>
