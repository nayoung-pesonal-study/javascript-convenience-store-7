export default class Calculator {
  static calculateTotalPayment(purchaseList) {
    const beforeEventPayment = this.calculateBeforeEventPayment(purchaseList);
  }

  static calculateBeforeEventPayment(purchaseList) {
    const beforeEventPayment = purchaseList
      .map((product) => product.price * product.quantity)
      .reduce((acc, cur) => acc + cur, 0);
  }
}
