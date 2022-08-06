import { ProductHttpService } from "./services/product-http.services";

(async()=>{
  const productService =new ProductHttpService();

  console.log('--'.repeat(10));
  const product = await productService.getAll();
  console.log('En este array hay: ',product.length, 'elementos');

  console.log('--'.repeat(10));
  console.log(product.map(item => item.price));

  console.log('--'.repeat(10));
  console.log('Consultar por id');
  const productId= product[0].id;
  const product1 = await productService.findOne(productId);
  console.log(product1);

  console.log('--'.repeat(10));
  console.log('Update');
  await productService.update(productId,{
    price:10000,
    title: 'New title',
    description: 'New description'
  })

  const productActu = await productService.findOne(productId);
  console.log('--'.repeat(10));
  console.log('Consultar información actualizada');
  console.log(productActu);
})();
