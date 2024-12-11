import { MissionUtils } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import OutputController from './OutputController.js';
import Stock from '../models/Stock.js';
import { makePerfectProductData } from '../utils/loadProduct.js';

class MainController {
  async start() {
    const stock = new Stock();
    await stock.initStock();
    //console.log(stock.getter());
    const stockMessage = await stock.messageStockState();

    OutputController.printStartTitle();
    OutputController.printCurrentStock(stockMessage);
    // const inputPurchaseData = await this.inputPurchase();
    // MissionUtils.Console.print(inputPurchaseData);
  }

  async inputPurchase() {
    const inputUserData = await InputView.inputUserData();
    return inputUserData;
  }
}

export default MainController;
