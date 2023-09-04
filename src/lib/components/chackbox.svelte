<script lang="ts">
	export let label: string;
	export let name: string;
	export let ref: HTMLInputElement | undefined = undefined;
</script>

<div class="flex gap-2 items-start mb-4">
	<input bind:this={ref} type="checkbox" class="flex-shrink-0 m-1" id={name} />
	<label class="text-xs text-slate-300" for={name}>{label}</label>
</div>
