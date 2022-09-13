import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class UpdateUserService {
   public async execute({name, email, password}: IRequest): Promise<User> {
      const usersRepository = getCustomRepository(UsersRepository);

      const user = await usersRepository.findOne(email);

      if (!user){
        throw new AppError('product not found.');
      }

      const productExists = await usersRepository.findByName(name);

      if (productExists && name !== user.name) {
        throw new AppError('there is already one product with this name');
      }

      user.name = name;
      user.email = email;
      user.password = password;


      await usersRepository.save(user);

       return user;
    }
}

export default UpdateUserService;

