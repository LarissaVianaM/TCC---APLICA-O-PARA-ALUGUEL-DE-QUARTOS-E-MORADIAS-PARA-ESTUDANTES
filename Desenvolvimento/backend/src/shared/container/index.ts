import { container } from 'tsyringe';

import { CategoriesRepository } from '../../modules/houses/infra/typeorm/repositories/CategoriesRepository';
import { ICategoriesRepository } from '../../modules/houses/repositories/ICategoriesRepository';

import { AmenitiesRepository } from '../../modules/houses/infra/typeorm/repositories/AmenitieRepository';
import { IAmenitiesRepository } from '../../modules/houses/repositories/IAmenitieRepository';

import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/accounts/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<IAmenitiesRepository>(
  "AmenitiesRepository",
  AmenitiesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)