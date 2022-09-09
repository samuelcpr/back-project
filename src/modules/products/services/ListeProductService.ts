import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/products";
import { ProductRepository } from "../typeorm/repositories/ProductsRepository";


class ListProductService {
   public async execute(): Promise<Product[]> {
      const productsRepository = getCustomRepository(ProductRepository);

      const products = productsRepository.find();

      return products;
    }
}

export default ListProductService;
