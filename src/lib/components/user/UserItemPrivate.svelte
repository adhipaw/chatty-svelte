<script lang="ts">
	import { faClose, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import type { User } from '../../../interface/user/user';
	import ProfileAvatar from '../common/image/ProfileAvatar.svelte';
	import Typhography from '../common/typhography/Typhography.svelte';
	export let user: User;
</script>

<li
	class="bg-inherit hover:bg-white/10 px-1 text-white/70 hover:text-white rounded-primary flex gap-2 items-center"
>
	<ProfileAvatar
		src={user.avatar}
		preferedStatus={user.preferedStatus}
		status={user.status}
		size="sm"
	/>
	<div class="flex flex-col justify-start items-start">
		<Typhography type="Caption" className="capitalize font-semibold">{user.displayName}</Typhography
		>
		{#if user.currentPlaying}
			<Typhography type="Overline" className="capitalize text-white/70"
				><b class="text-white/90">Playing</b> {user.currentPlaying}</Typhography
			>
		{/if}
	</div>
	<div class="ml-auto cursor-pointer hidden">
		<Fa icon={faClose} size="md" class="w-6 text-white/70" />
	</div>
</li>

<style>
	.close-btn {
		display: none;
	}
	li:hover > .close-btn {
		display: block;
	}
</style>
