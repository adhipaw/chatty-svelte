<script>
	import ListItem from '$lib/components/common/ListItem.svelte';
	import PrimaryAside from '$lib/components/wraper/PrimaryAside.svelte';
	import Fa from 'svelte-fa';
	import { faPlus, faSuitcaseRolling, faUserGroup } from '@fortawesome/free-solid-svg-icons';
	import FindOrCreateConversation from './components/FindOrCreateConversation.svelte';
	import Typhography from '$lib/components/common/typhography/Typhography.svelte';
	import UserList from '$lib/components/user/UserList.svelte';
</script>

<PrimaryAside>
	<FindOrCreateConversation slot="header" />
	<div slot="main" class="p-2 font-display">
		<section class="mb-2">
			<ul class="flex flex-col gap-1">
				<ListItem><Fa icon={faUserGroup} size="md" class="w-6" /><a href="./">Friends</a></ListItem>
				<ListItem
					><Fa icon={faSuitcaseRolling} size="md" class="w-6" /><a href="./">Library</a></ListItem
				>
			</ul>
		</section>
		<section>
			<div class="flex justify-between px-2 mb-1">
				<Typhography type="Overline" className="uppercase">Conversations</Typhography>
				<Fa icon={faPlus} size="sm" class="w-6 text-white" />
			</div>
			<UserList />
		</section>
	</div>
</PrimaryAside>
<slot />
