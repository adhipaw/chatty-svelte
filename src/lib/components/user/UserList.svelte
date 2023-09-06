<script lang="ts">
	import { UserPreferedStatus, UserStatus } from '../../../interface/user/status';
	import type { User } from '../../../interface/user/user';
	import UserItemPrivate from './UserItemPrivate.svelte';

	export const users: Array<User> = [
		{
			username: 'use1',
			status: UserStatus.ONLINE,
			preferedStatus: UserPreferedStatus.DO_NOT_DISTURB,
			avatar: 'https://picsum.photos/200',
			displayName: 'bambang',
			id: '1'
		},
		{
			username: 'use1',
			status: UserStatus.OFFLINE,
			preferedStatus: UserPreferedStatus.DO_NOT_DISTURB,
			avatar: 'https://picsum.photos/200',
			displayName: 'bambang',
			id: '1'
		},
		{
			username: 'use1',
			status: UserStatus.OFFLINE,
			preferedStatus: UserPreferedStatus.DEFAULT,
			avatar: 'https://picsum.photos/200',
			displayName: 'bambang',
			id: '1',
			currentPlaying: 'War Thunder'
		},
		{
			username: 'use2',
			status: UserStatus.ONLINE,
			preferedStatus: UserPreferedStatus.IDLE,
			avatar: 'https://picsum.photos/200',
			displayName: 'parksoe',
			id: '3'
		}
	];
</script>

<ul class="flex flex-col gap-y-2">
	{#each users as user}
		<UserItemPrivate {user} />
	{/each}
</ul>
