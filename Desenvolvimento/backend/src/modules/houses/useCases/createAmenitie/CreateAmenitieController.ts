import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateAmenitieUseCase } from './CreateAmenitieUseCase';

class CreateAmenitieController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createAmenitieUseCase = container.resolve(
      CreateAmenitieUseCase
    );

    await createAmenitieUseCase.execute({ name, description });

    return response.status(201).send({ message: `Amenitie ${name} created successfully!` });
  }
}

export { CreateAmenitieController };