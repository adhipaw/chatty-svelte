<script lang="ts">
	import type { INPUTTYPE } from './input';
	export let required: boolean | undefined = undefined;
	export let name: string;
	export let type: 'text' | 'number' | 'password' | 'email';
	export let id: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let helperText: string | undefined = undefined;
	export let validator:
		| { onSuccesText: string; onErrorText: string; fallback: (value: string) => boolean }
		| undefined = undefined;
	let active = false;
	let isValid: boolean | undefined = undefined;

	function getHelperClass(isValid: boolean | undefined, active: boolean) {
		let className = 'input-out';
		if (!helperText || !active) return className;
		className = 'input-in ';
		if (typeof isValid === 'undefined') return (className += 'text-white/60 text-xs mb-4');
		return (className += isValid ? 'text-xs mb-4 text-green-600' : 'text-xs mb-4 text-red-600');
	}

	function getHelperMessage(isValid: boolean | undefined) {
		if (typeof isValid === 'undefined') return helperText;
		return isValid ? validator?.onSuccesText : validator?.onErrorText;
	}
</script>

{#if label}
	<label
		for={id ? id : name}
		class="text-slate-400 font-display uppercase text-xs mb-1 font-semibold"
		>{label} <span class="text-red-600">*</span></label
	>
{/if}

<input
	{type}
	id={id ? id : name}
	{required}
	name="email"
	on:focusin={() => {
		active = true;
	}}
	on:focusout={() => {
		active = false;
	}}
	on:change={(e) => {
		if (e.currentTarget.value != '') {
			if (validator) {
				return (isValid = validator.fallback(e.currentTarget.value));
			}
		}
		return (isValid = undefined);
	}}
	class={active && helperText
		? ' bg-black/50 text-white w-full text-base p-2 outline-none rounded-sm mb-1'
		: ' bg-black/50 text-white w-full text-base p-2 outline-none rounded-sm mb-4'}
/>

<p class={getHelperClass(isValid, active)}>{getHelperMessage(isValid)}</p>

<style>
	.input-in {
		animation-name: input-in;
		animation-duration: 0.5s;
		display: block;
	}
	.input-out {
		animation-name: input-in;
		animation-duration: 0.5s;
		display: none;
		animation-direction: reverse;
	}
	@keyframes input-in {
		0% {
			opacity: 0;

			transform: translateY(10px);
		}
		100% {
			opacity: 1;

			transform: translateY(0px);
		}
	}
</style>
