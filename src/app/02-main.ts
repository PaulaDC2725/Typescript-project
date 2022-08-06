import { ProductMemoryService } from "./services/product-memory.services";

const productService = new ProductMemoryService();
productService.create({
  title: 'Producto 1',
  price: 100,
  description: 'bla bla bla bla',
  categoryId: 12,
  images: []
});
console.log(productService.getAll());


const products = productService.getAll();
const productId = products[0].id;
productService.update(productId,{
  title: 'Cambiar nombre',
});
const rta = productService.findOne(productId);
console.log(rta);
