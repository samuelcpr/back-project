import {EntityRepository, Repository} from 'typeorm'
import Product from '../entities/products';

@EntityRepository(Product)
export class UseRepository extends Repository<Product> {

  public async findByName(name: string): Promise<Product | undefined> {
    const product = this.findOne({
      where: {
        name,
      },
    });
    return product;
  }
}
