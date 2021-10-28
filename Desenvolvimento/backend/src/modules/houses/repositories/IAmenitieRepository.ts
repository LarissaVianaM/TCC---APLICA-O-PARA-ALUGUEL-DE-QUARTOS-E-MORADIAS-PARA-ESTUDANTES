import { Amenitie } from '../infra/typeorm/entities/Amenities';

interface ICreateAmenitieDTO {
  name: string;
  description: string;
}

interface IAmenitiesRepository {
  create({ name, description }: ICreateAmenitieDTO): Promise<void>;
  findByName(name: string): Promise<Amenitie>;
}

export { IAmenitiesRepository, ICreateAmenitieDTO };