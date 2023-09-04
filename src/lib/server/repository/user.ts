import { Users } from '../../../entities/Users';
import AppDataSource from '../db';

export const userRepository = AppDataSource.getRepository(Users);
