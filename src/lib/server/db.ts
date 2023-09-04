import { DataSource } from 'typeorm/data-source/DataSource';
import { Users } from '../../entities/Users';

const AppDataSource = new DataSource({
	type: 'mysql',
	host: '127.0.0.1',
	port: 3306,
	username: 'nishly',
	password: '7882',
	database: 'chatty',
	synchronize: true,
	logging: true,
	entities: [Users]
});

await AppDataSource.initialize();

await AppDataSource.synchronize();

export default AppDataSource;
