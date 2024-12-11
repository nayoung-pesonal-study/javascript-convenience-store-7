import { MESSAGE } from '../constants/Message.js';
import { Parser } from '../utils/Parser.js';
import OutputView from '../views/OutputView.js';

class OutputController {
  static printStartTitle() {
    OutputView.printStartTitle();
  }

  static printCurrentStock(messageStockState) {
    messageStockState.forEach((stock) => OutputView.printCurrentStock(stock));
  }
}

export default OutputController;
