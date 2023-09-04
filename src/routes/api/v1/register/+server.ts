import { userRepository } from '$lib/server/repository/user';
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import crypto from 'crypto';
import bcrypt from 'bcrypt';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	const password = await bcrypt.hash(body.password, 10);

	const result = await userRepository.insert({
		email: body.email,
		id: crypto.randomUUID(),
		displayName: body.display_name,
		username: body.username,
		subscribeNews: body.subscribe_news,
		online: false,
		password
	});

	return json({ result }, { status: 201 });
};
