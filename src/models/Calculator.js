export default class Calculator {
  static calculateTotalPayment(purchaseList, isMembership) {
    const beforeEventPayment = this.calculateBeforeEventPayment(purchaseList);
    const eventDiscount = this.calculateEventDiscount(purchaseList);
    let totalPayment = beforeEventPayment - eventDiscount;
    if (isMembership) totalPayment -= this.calculateMembership(purchaseList);
    return totalPayment.toLocaleString();
  }

  static calculateBeforeEventPayment(purchaseList) {
    // 총구매액
    return purchaseList
      .map((product) => product.price * product.quantity)
      .reduce((acc, cur) => acc + cur, 0);
  }

  static calculateMembership(purchaseList) {
    const generalPayment = purchaseList
      .filter((product) => product.promotion === 'null')
      .map((product) => product.price * product.quantity)
      .reduce((acc, cur) => acc + cur, 0);

    console.log('generalPayment', generalPayment);
    const membershipDiscount = Math.min(generalPayment * 0.3, 8000);

    return Math.floor(membershipDiscount);
  }

  static calculateEventDiscount(purchaseList) {
    return purchaseList
      .map((product) => product.price * product.bonus)
      .reduce((acc, cur) => acc + cur, 0);
  }
}
