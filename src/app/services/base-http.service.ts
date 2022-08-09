import axios from "axios";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { UpdateProductDto } from "../dtos/product.dto";
export class BaseHttpService<TypeClass>{
  //  data: TypeClass[]=[];
  constructor(
    protected url: string
  ){

  }

  async getAll(){
    const {data} = await axios.get<TypeClass[]>(this.url)
    return data;
  }
  async update<ID,Dto>(id: ID, changes: Dto) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}
// const url1 = 'https://api.escuelajs.co/api/v1/products'
// const productsService = new BaseHttpService<string>(url1);
// productsService.getAll();
// const service = new BaseHttpService<string>();
// service.getAll();
// const service = new BaseHttpService<string>();
// service.data
// const service1 = new BaseHttpService<number>();
// service1.data
// (async()=>{
//   const url1 = 'https://api.escuelajs.co/api/v1/products'
//   const productsService = new BaseHttpService<string>(url1);

//   const rta = await productsService.getAll();
//   console.log('products', rta.length);
//   productsService.update<Product['id'], UpdateProductDto>(1,{
//     title: 'New title 2'
//   } )
//   const url2 = 'https://api.escuelajs.co/api/v1/categories'
//   const categoryService = new BaseHttpService<Category>(url2);
//   const rta1 = await categoryService.getAll();
//   console.log('categories', rta1.length);
// })();
