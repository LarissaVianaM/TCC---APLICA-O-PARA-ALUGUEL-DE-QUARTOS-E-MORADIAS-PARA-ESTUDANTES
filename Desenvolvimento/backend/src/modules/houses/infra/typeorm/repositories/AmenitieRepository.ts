import { getRepository, Repository } from 'typeorm';

import { 
  IAmenitiesRepository, 
  ICreateAmenitieDTO 
} from '../../../../houses/repositories/IAmenitieRepository';

import { Amenitie } from '../entities/Amenities';

class AmenitiesRepository implements IAmenitiesRepository {
  private repository: Repository<Amenitie>
  
  constructor() {
    this.repository = getRepository(Amenitie);
  }

  async create({ name, description }: ICreateAmenitieDTO): Promise<void> {
    const amenitie = this.repository.create({
      description,
      name
    });

    await this.repository.save(amenitie);
  }

  async findByName(name: string): Promise<Amenitie> {
    const amenitie = this.repository.findOne({
      name,
    })
    return amenitie;
  }
}

export { AmenitiesRepository }