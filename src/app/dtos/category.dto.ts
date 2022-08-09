import {IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validate, validateOrReject} from 'class-validator';
import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'>{}
export class CreateCategoryDto implements ICreateCategoryDto{
  @IsNotEmpty()
  @Length(4,140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}
(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'Este es el nombre de la categoria';
    dto.image = 'https://api.escuelajs.co/api/v1/products';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
  // const dto = new CreateCategoryDto();
  // dto.name = 'a';
  // await validateOrReject(dto);
})();

// export interface FindProductDto extends Readonly<Partial<Omit<Product, 'tags'>>> {
//   readonly tags: ReadonlyArray<string>;
// }
