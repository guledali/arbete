// You must store all suppliers and what products they have in their assortment. 
// There must be at least *three suppliers* each having at least three products. 





// Each product must have at least an ID and a name. 

// one data = three products

import { assortment } from './assortment'


export let productNames = [];
export let testLog = []
export function place_order(supplierIds?:string, productIds?:string) {

  assortment.supplier.forEach(existingSupplier => {
    if (supplierIds !== existingSupplier.id && 
        supplierIds !== existingSupplier.id2
        ) {
      throw new Error('FAIL NO_SUPPLIER');
    }
  });

  assortment.supplier.forEach(existingProduct => {
    if ( productIds !== existingProduct.data.products.item1.id
      && productIds !== existingProduct.data.products.item2.id
      && productIds !== existingProduct.data.products.item3.id
      && productIds !== existingProduct.data2.products2.item1.id
      && productIds !== existingProduct.data2.products2.item2.id
      && productIds !== existingProduct.data2.products2.item3.id
       ) {
        throw new Error('FAIL NO Products');
    }
  });


 
   // Pushing up product so that you can display their names 
   // return OK status and all product names


   assortment.supplier.map(existingSupplier => {
     if (existingSupplier.id === supplierIds) {
            productNames.push(
        existingSupplier.data.products.item1.name,
        existingSupplier.data.products.item2.name,
        existingSupplier.data.products.item3.name
      );
      } else if(supplierIds === existingSupplier.id2) {
      productNames.push(
        existingSupplier.data2.products2.item1.name,
        existingSupplier.data2.products2.item2.name,
        existingSupplier.data2.products2.item3.name
      );
      }
      return productNames
    })
    testLog = [...productNames]
    testLog.unshift("OK")
    console.log(testLog)
  }

  place_order('12ffgd', 'c3e470')
  // place_order('12bbb', 'c3e400')



// To run this file run the command `./node_modules/.bin/ts-node-dev src/index.ts or npm run dev`
