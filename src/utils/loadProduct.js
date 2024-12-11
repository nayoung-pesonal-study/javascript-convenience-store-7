import fs from 'fs/promises';
import { Parser } from './Parser.js';

const loadFile = async (filePath) => {
  const file = await fs.readFile(filePath, 'utf-8');
  return Parser.splitLine(file);
};

const loadProduct = async () => {
  const productLines = await loadFile('public/products.md');
  const products = productLines.map((line) => {
    const contentArray = Parser.splitStringToArray(line);
    const [name, price, quantity, promotion] = contentArray;
    return generateProductModel(name, price, quantity, promotion);
  });

  return products;
};

const generateProductModel = (name, price, quantity, promotion) => ({
  name: name,
  price: parseInt(price, 10),
  quantity: parseInt(quantity, 10),
  promotion: promotion,
});

export const makePerfectProductData = async () => {
  const products = await loadProduct();
  const productNames = products.map((product) => product.name);
  const uniqueNames = Parser.returnUniqueValue(productNames);
  const newProductArray = [];
  products.forEach((product) => {
    newProductArray.push(product);
    if (uniqueNames.includes(product.name)) {
      if (product.promotion !== 'null') {
        newProductArray.push(
          generateProductModel(product.name, product.price, 0, 'null'),
        );
      }
    }
  });
  return newProductArray;
};
