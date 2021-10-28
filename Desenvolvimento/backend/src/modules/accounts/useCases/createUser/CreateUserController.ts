import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response>{
    const {  
      name, 
      email, password, 
      cpf, isOwner
    } = request.body;
    const createUserCase = container.resolve(CreateUserUseCase);

    await createUserCase.execute({ 
      name,
      email, password, 
      cpf, isOwner });

    return response.status(201).send({ 
      message: `Created ${name} user Successfuly!` 
    });
  }
}

export { CreateUserController };