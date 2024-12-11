import { makePerfectProductData } from '../utils/loadProduct.js';
import { Parser } from '../utils/Parser.js';

class Stock {
  #stock;
  // stock<product{ name: '콜라', price: 1000, quantity: 10, promotion: '탄산2+1' }>

  async initStock() {
    this.#stock = await makePerfectProductData();
  }

  getter() {
    return this.#stock;
  }

  async messageStockState() {
    let quantityMessage;
    return this.#stock.map((product) => {
      quantityMessage = `${product.quantity}개`;
      if (product.quantity === 0) {
        quantityMessage = '재고 없음';
      }
      if (product.promotion === 'null') {
        return `- ${product.name} ${product.price.toLocaleString()}원 ${quantityMessage}`;
      }
      return `- ${product.name} ${product.price.toLocaleString()}원 ${quantityMessage} ${product.promotion}`;
    });
  }
}

export default Stock;
