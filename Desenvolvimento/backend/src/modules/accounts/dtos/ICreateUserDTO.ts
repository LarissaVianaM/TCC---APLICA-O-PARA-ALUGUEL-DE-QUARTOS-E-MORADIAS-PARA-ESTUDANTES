interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  cpf: string;
  isOwner: boolean;
  id?: string;
  avatar?: string;
}

export { ICreateUserDTO }