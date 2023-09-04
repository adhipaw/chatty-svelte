import type { MigrationInterface, QueryRunner } from 'typeorm';

export class User1693828177642 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query('ALTER TABLE `users` CHANGE `online` `online` BOOLEAN NOT NULL');
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public async down(queryRunner: QueryRunner): Promise<void> {}
}
