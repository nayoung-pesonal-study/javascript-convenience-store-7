import { Parser } from '../utils/Parser.js';
import Calculator from './Calculator.js';

class Cart {
  #cart;
  #purchaseList;

  constructor() {
    this.#cart = [];
    this.#purchaseList = [];
  }

  getCart() {
    return this.#cart;
  }

  getPurchaseList() {
    return this.#purchaseList;
  }

  addCart(purchaseAmount) {
    purchaseAmount.forEach((product) => {
      this.#cart.push(product);
    });
  }
  // output: product<{name, quantity, promotion}> <<여기에 담길 quantity는 어느 프로모션에서 몇개가 차감될건지, "차감되는 개수"임
  // 어떤 프로모션에서 몇개를 차감할지에 대한 품목을 #purchaseList에 저장함
  splitPromotionAndGenral(stock) {
    const splitedPromotionAndGeneral = this.#cart.map((product) => {
      return stock.splitPromotionAndGenral(product);
    });
    splitedPromotionAndGeneral.forEach(
      (product) => this.#purchaseList.push(...product), // 전개연사자 중요!!!!
    );
  }

  // 보너스 계산도 다 하고난 뒤 최종 장바구니를 재고에서 차감하는 로직.
  subtractPurchaseListInStock(stock) {
    stock.subtractStock(this.#purchaseList);
  }

  calculatePurchaseListBonus(stock) {
    this.#purchaseList.forEach((product) => {
      if (stock.isPromotionPeriod(product.promotion)) {
        product.bonus += stock.returnPromotionAmount(
          product.promotion,
          product.quantity,
        );
      }
    });
  }

  calculateTotalPayment() {
    this.#purchaseList.map((product) => {
      Calculator.calculateTotalPayment();
    });
  }

  test(string, delimiter) {
    const splitedInput = Parser.splitStringToArray(string, delimiter);
    const trimedSplitedInput = Parser.trimArrayElement(splitedInput);
    return trimedSplitedInput.map((cur) => Parser.parseToNumber(cur));
  }
}

export default Cart;
