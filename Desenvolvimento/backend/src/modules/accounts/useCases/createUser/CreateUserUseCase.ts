import { inject, injectable } from "tsyringe";
import { hash } from 'bcryptjs';

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,  
    email, 
    password, 
    cpf, 
    isOwner
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email );
    if(userAlreadyExists) {
      throw new AppError("User already exists!");
    }
    const passwordHash = await hash(password, 4);
    await this.usersRepository.create({
      name, 
      email, 
      password: passwordHash,
      cpf, 
      isOwner
    });
  }
}

export { CreateUserUseCase };