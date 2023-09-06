<script lang="ts">
	import { faCircle, faMinus, faMoon } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { UserStatus, UserPreferedStatus } from '../../../../interface/user/status';

	export let src: string;
	export let size: 'sm' | 'md' | 'lg' = 'sm';
	export let haveNotification: boolean = false;
	export let status: UserStatus = UserStatus.OFFLINE;
	export let preferedStatus: UserPreferedStatus = UserPreferedStatus.DEFAULT;
	export let className: string = '';

	function getSizeClass() {
		switch (size) {
			case 'sm':
				return 'w-9 h-9';
			case 'md':
				return 'w-12 h-12';
			case 'lg':
				return 'w-16 h-16';
		}
	}
	function getBadgeColor() {
		if (status === UserStatus.OFFLINE) return 'bg-primary-dark/90';
		switch (preferedStatus) {
			case UserPreferedStatus.DEFAULT:
				return 'bg-green-500';
			case UserPreferedStatus.DO_NOT_DISTURB:
				return 'bg-red-500';
			case UserPreferedStatus.IDLE:
				return 'bg-primary-dark/90';
		}
	}
	function getIcon() {
		switch (preferedStatus) {
			case UserPreferedStatus.DEFAULT:
				return faCircle;
			case UserPreferedStatus.DO_NOT_DISTURB:
				return faMinus;
			case UserPreferedStatus.IDLE:
				return faMoon;
		}
	}
</script>

<div class={`rounded-full m-1 relative ${getSizeClass()} ${className}`}>
	<img {src} class="rounded-full" alt="User Profile" />
	{#if haveNotification}
		<div
			class="absolute w-4 h-4 bg-red-500 rounded-full top-0 right-0 flex justify-center items-center p-2 bg-primary-dark/90"
		>
			<div class="flex justify-center items-center">
				<Fa flip icon={faMinus} />
			</div>
		</div>
	{/if}
	<div
		class="absolute w-5 h-5 rounded-full bottom-[-.1rem] right-[-.1rem] flex p-1 justify-center items-center bg-primary-dark/80"
	>
		<div class={`flex w-4 h-3 justify-center items-center rounded-full ${getBadgeColor()}`}>
			<Fa size="xs" class="rounded-sm text" icon={getIcon()} />
		</div>
	</div>
</div>
