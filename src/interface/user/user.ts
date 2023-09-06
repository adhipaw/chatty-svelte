import type { UserStatus, UserPreferedStatus } from './status';

export interface User {
	id: string;
	displayName: string;
	username: string;
	status: UserStatus;
	preferedStatus: UserPreferedStatus;
	currentPlaying?: string;
	avatar: string;
}
