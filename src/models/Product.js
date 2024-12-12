export default class Product {
  construct(name, price, quantity, promotion) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.promotion = promotion;
    this.bonus = 0;
  }

  // calculateBonus(quantity, promotion) {
  //     const promotionNames = ['탄산2+1', 'MD추천상품', '반짝할인'];
  //     if(promotion === 'null') {
  //         return 0;
  //     }
  //     if(promotion !== 'null' && promotionNames.includes(promotion)){

  //     }

  // }
}
