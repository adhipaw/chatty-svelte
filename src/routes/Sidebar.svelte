<script>
	import logo from '$lib/images/logo-channel.avif';
</script>

<div
	class="bg-gray-900 text-purple-lighter flex-none w-16 p-2 flex flex-col items-center justify-center md:block overflow-y-auto"
>
	<div
		class="relative cursor-pointer mb-4 border-b border-gray-600 pb-2 flex flex-col items-center justify-center"
	>
		<div
			class="parent-icon bg-gray-500 w-11 h-11 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden hover:rounded-xl"
		>
			<img src="https://cdn.discordapp.com/embed/avatars/0.png" alt="" />
		</div>
	</div>

	<div class="relative cursor-pointer mb-4s pb-2 flex flex-col items-center justify-center">
		<div
			class="parent-icon bg-gray-500 w-11 h-11 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden object-cover hover:rounded-xl"
		>
			<img src={logo} alt="" />
		</div>
	</div>

	<div class="cursor-pointer flex flex-col items-center justify-center">
		<div
			class="bg-gray-500 opacity-25 w-11 h-11 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden"
		>
			<svg
				class="fill-current h-10 w-10 block"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<path
					d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z"
				/>
			</svg>
		</div>
	</div>
</div>

<style>
	.parent-icon::before {
		content: '';
		position: absolute;
		width: 0.5rem;

		transform: translate(-2rem, 0px);
		height: 0.7rem;
		background-color: white;
		border-radius: 5px;
	}
	.parent-icon:hover::before {
		height: 1.5rem;
	}
	.parent-icon.active::before {
		height: 1.8rem;
	}
</style>
