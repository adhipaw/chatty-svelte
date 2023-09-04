import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'nishly',
	password: '7882',
	database: 'chatty',
	synchronize: true,
	logging: true,
	// entities: [Post, Category],
	subscribers: [],
	migrations: ['./migrations/*.ts']
});
