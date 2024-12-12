import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Message.js';
import { Parser } from '../utils/Parser.js';
import InputView from '../views/InputView.js';

class InputController {
  static async inputPurchaseAmount() {
    try {
      const purchaseAmount = await InputView.inputPurchaseAmountView();

      return purchaseAmount;
    } catch (error) {
      MissionUtils.Console.print(error);
      return await this.inputNumber();
    }
  }
}

export default InputController;
