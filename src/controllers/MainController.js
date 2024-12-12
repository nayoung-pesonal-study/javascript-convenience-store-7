import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputController from './OutputController.js';
import Stock from '../models/Stock.js';
import { makePerfectProductData } from '../utils/loadProduct.js';
import InputController from './InputController.js';
import Cart from '../models/Cart.js';

class MainController {
  async start() {
    const stock = new Stock();
    await stock.initStock();
    const stockMessage = await stock.messageStockState();

    OutputController.printStartTitle();
    OutputController.printCurrentStock(stockMessage);

    const purchaseAmount = await this.inputPurchaseAmount(stock);
    // purchaseAmount => List<product{name: '사이다', quantity: 3}>

    const cart = new Cart();
    cart.addCart(purchaseAmount);
    cart.splitPromotionAndGenral(stock);

    // 보너스 계산
    cart.calculatePurchaseListBonus(stock);

    // 최종 장바구니 목록을 재고에서 차감
    cart.subtractPurchaseListInStock(stock);

    console.log('getPurchaseList', cart.getPurchaseList());

    console.log('재고차감 후 재고 목록', stock.getter());
    OutputController.printReciept();
    // const inputPurchaseData = await this.inputPurchase();
    // MissionUtils.Console.print(inputPurchaseData);
  }

  // InputController
  async inputPurchase() {
    const inputUserData = await InputView.inputUserData();
    return inputUserData;
  }

  async inputPurchaseAmount(stock) {
    try {
      const purchaseAmount = await InputView.inputPurchaseAmountView();
      purchaseAmount.forEach((product) => {
        stock.checkPossiblePurchaseProduct(product.name, product.quantity);
      });
      return purchaseAmount;
    } catch (error) {
      MissionUtils.Console.print(error);
      return await this.inputPurchaseAmount(stock);
    }
  }
}

export default MainController;
