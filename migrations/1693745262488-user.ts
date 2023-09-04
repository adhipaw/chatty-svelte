import { type MigrationInterface, type QueryRunner, Table } from 'typeorm';

export class User1693745262488 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'users',
				columns: [
					{ name: 'id', type: 'varchar', length: '36', isNullable: false, isPrimary: true },
					{ name: 'display_name', type: 'varchar', length: '255', isNullable: false },
					{ name: 'username', type: 'varchar', length: '255', isNullable: false },
					{ name: 'email', type: 'varchar', length: '255', isNullable: false },
					{ name: 'password', type: 'varchar', length: '255', isNullable: false }
				]
			}),
			true
		);
	}

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	public async down(_queryRunner: QueryRunner): Promise<void> {}
}
