import { makePerfectProductData } from '../utils/loadProduct.js';
import { Parser } from '../utils/Parser.js';
import { Validator } from '../utils/Validator.js';

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

  checkPossiblePurchaseProduct(name, quantity) {
    // product{name, quantity} 가 결제 가능한 수량인지 체크
    const possibleAmount = this.#stock
      .filter((product) => product.name === name)
      .reduce((acc, cur) => acc + cur.quantity, 0);
    if (possibleAmount < quantity) {
      throw new Error('[ERROR] 구매가능한 수량을 초과하였습니다.');
    }
  }

  // purchaseProduct{name, quantity} 가 프로모션에서 몇 개 차감하고 일반재고에서 몇개 차감하는지 저장
  // findProductInStock => < promotion{name, quantity, promotion},  general{name, quantity, promotion}>
  // output: product<{name, price, quantity, promotion, bonus}> <<여기에 담길 quantity는 어느 프로모션에서 몇개가 차감될건지, "차감되는 개수"임
  splitPromotionAndGenral(purchaseProduct) {
    let willBuy = purchaseProduct.quantity;
    const findProductInStock = this.#stock
      .filter((product) => product.name === purchaseProduct.name)
      .map((product) => {
        return {
          name: product.name,
          price: product.price,
          quantity: product.quantity,
          promotion: product.promotion,
        };
      });
    findProductInStock.forEach((product) => {
      if (product.promotion !== 'null') {
        const subtractPromotionQuantity = Math.min(willBuy, product.quantity);
        product.quantity = subtractPromotionQuantity;
        willBuy -= subtractPromotionQuantity;
      }
      if (willBuy > 0 && product.promotion === 'null')
        product.quantity = willBuy;
    });
    return findProductInStock;
  }

  // 카트의 최종 purchaseList상태를 바탕으로 재고 차감
  subtractStock(purchaseList) {
    purchaseList.forEach((purchaseProduct) => {
      this.#stock.forEach((stockProduct) => {
        if (
          stockProduct.name === purchaseProduct.name &&
          stockProduct.promotion === purchaseProduct.promotion
        ) {
          console.log(
            'subtractStock',
            `${stockProduct.quantity}, ${purchaseProduct.quantity}`,
          );
          stockProduct.quantity -= purchaseProduct.quantity;
        }
      });
    });
  }
}

export default Stock;
