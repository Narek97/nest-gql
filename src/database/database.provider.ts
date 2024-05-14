import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './database.config';
import { models } from '@Models/index';

export const DB = new Sequelize(databaseConfig[process.env.NODE_ENV]);

export const databaseProviders = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    DB.addModels([
      // Add your sequelize models here
      ...models,
    ]);
    await DB.sync();
    return DB;
  },
};
