<script lang="ts">
	import { stringify } from 'postcss';
	export let name: string;
	export let placeholder: string | undefined = undefined;
	export let id: string | undefined = undefined;
	export let options: Record<string, string>;
</script>

<select
	required
	class="bg-black/50 text-white w-full text-base p-2 outline-none rounded-sm mb-4"
	{name}
	{id}
>
	{#if placeholder}
		<option value="" disabled selected>{placeholder}</option>
	{/if}
	{#each Object.entries(options) as [key, value]}
		<option class="" value={key}>{value}</option>
	{/each}
</select>

<style>
	option {
		@apply border-none font-display;
	}
	select option:hover {
		@apply bg-slate-900;
	}
	select option:not(:checked) {
		@apply bg-black/60 p-4;
	}
	select option:is(:checked) {
		@apply bg-black/80;
	}
</style>
