<script lang="ts">
	import checkImg from '$lib/images/icons/check.png';
	import type { SvelteComponent } from 'svelte';
	export let name: string;
	export let fields: Array<{ label: string; value: string }>;
</script>

<fieldset class="mb-4">
	{#each fields as field}
		<div class="flex flex-nowrap gap-2 items-start">
			<input
				class="rounded-sm flex-shrink-0"
				type="radio"
				{name}
				id={field.label}
				value={field.value}
			/>
			<label for={field.label} class="text-slate-300 text-xs">{field.label}</label>
		</div>
	{/each}
</fieldset>
