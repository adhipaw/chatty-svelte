import { userRepository } from '$lib/server/repository/user';
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	if (body.email) {
		const result = await userRepository.findOne({ where: { email: body.email } });
		body.email = false;
		if (result === null) body.email = true;
		console.log(result);
	}
	if (body.username) {
		const result = await userRepository.findOne({ where: { username: body.username } });
		body.username = false;
		if (result === null) body.username = true;
	}
	return json(body, { status: 200 });
};
