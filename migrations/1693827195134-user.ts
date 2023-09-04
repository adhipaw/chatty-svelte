import type { MigrationInterface, QueryRunner } from 'typeorm';

export class User1693827195134 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(
			' ALTER TABLE `users` ADD `subscribe_news` BOOLEAN NOT NULL AFTER `password`, ADD `online` INT NOT NULL AFTER `subscribe_news`, ADD `created_at` DATE NOT NULL AFTER `online`, ADD `updated_at` DATE NOT NULL AFTER `created_at` '
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public async down(queryRunner: QueryRunner): Promise<void> {}
}
