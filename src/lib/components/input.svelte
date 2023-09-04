<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	export let required: boolean | undefined = undefined;
	export let name: string;
	export let type: 'text' | 'number' | 'password' | 'email';
	export let id: string | undefined = undefined;
	export let label: string | undefined = undefined;
	export let helperText: string | undefined = undefined;
	export let ref: HTMLElement | undefined = undefined;
	export let minlength: number | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let validator:
		| {
				onSuccesText: string;
				onErrorText: string;
				fallback: (value: string) => PromiseLike<boolean | undefined>;
		  }
		| undefined = undefined;
	let active = false;
	let isValid: boolean | undefined = undefined;

	function getHelperClass(isValid: boolean | undefined) {
		if (typeof isValid === 'undefined') return 'text-white/60 text-xs mb-4';
		return isValid ? 'text-xs mb-2 text-green-600' : 'text-xs mb-2 text-red-600';
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
	{minlength}
	{maxlength}
	bind:this={ref}
	{type}
	id={id ? id : name}
	{required}
	{name}
	on:focusin={() => {
		active = true;
	}}
	on:focusout={() => {
		active = false;
	}}
	on:change={async (e) => {
		if (e.currentTarget.value != '') {
			if (validator) {
				$: isValid = await validator.fallback(e.currentTarget.value);
				console.log(isValid);
				return;
			}
		}
		return (isValid = undefined);
	}}
	class={active && helperText
		? ' bg-black/50 text-white w-full text-base p-2 outline-none rounded-sm mb-1'
		: ' bg-black/50 text-white w-full text-base p-2 outline-none rounded-sm mb-4'}
/>

{#if helperText && active}
	<p
		in:fly={{
			y: 5,
			opacity: 0,
			easing: backOut
		}}
		out:fly={{
			y: 5,
			opacity: 0,
			easing: backOut
		}}
		class={getHelperClass(isValid)}
	>
		{getHelperMessage(isValid)}
	</p>
{/if}
