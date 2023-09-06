<script lang="ts">
	export let type: 'Title' | 'Subtitle' | 'Body' | 'Caption' | 'Overline' | 'Button' = 'Body';
	export let component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a' = 'p';
	export let className: string = '';

	function getTypeClass() {
		switch (type) {
			case 'Title':
				return 'text-white text-2xl font-bold font-display';
			case 'Subtitle':
				return 'text-white text-xl font-bold font-display';
			case 'Body':
				return 'text-white text-base font-display';
			case 'Caption':
				return 'text-white text-sm font-display';
			case 'Overline':
				return 'text-white text-xs font-display';
			case 'Button':
				return 'text-white text-base font-bold font-display';
		}
	}
</script>

{#if component === 'h1'}
	<h1 class={getTypeClass() + ' ' + className}><slot /></h1>
{:else if component === 'h2'}
	<h2 class={getTypeClass() + ' ' + className}><slot /></h2>
{:else if component === 'h3'}
	<h3 class={getTypeClass() + ' ' + className}><slot /></h3>
{:else if component === 'h4'}
	<h4 class={getTypeClass() + ' ' + className}><slot /></h4>
{:else if component === 'h5'}
	<h5 class={getTypeClass() + ' ' + className}><slot /></h5>
{:else if component === 'h6'}
	<h6 class={getTypeClass() + ' ' + className}><slot /></h6>
{:else if component === 'p'}
	<p class={getTypeClass() + ' ' + className}><slot /></p>
{:else if component === 'span'}
	<span class={getTypeClass()}><slot /></span>
{/if}
