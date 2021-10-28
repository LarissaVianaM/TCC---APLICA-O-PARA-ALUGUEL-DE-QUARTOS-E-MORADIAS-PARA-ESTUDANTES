import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IAmenitiesRepository } from '../../repositories/IAmenitieRepository';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateAmenitieUseCase {
  constructor(
    @inject("AmenitiesRepository")
    private amenitiesRepository: IAmenitiesRepository) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const amenitieAlreadyExists = await this.amenitiesRepository.findByName(name);

    if(amenitieAlreadyExists) {
      throw new AppError(`Amenitie ${name} already exists!`);
    }

    await this.amenitiesRepository.create({
      name,
      description,
    });
  }
}

export { CreateAmenitieUseCase };