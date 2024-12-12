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
      MissionUtils.Console.print(error.message);
      return await this.inputNumber();
    }
  }

  static async inputMembership() {
    try {
      const isMembership = await InputView.inputMembershipView();
      return isMembership;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.inputMembership();
    }
  }

  static async inputContinuePurchase() {
    try {
      const isContinue = await InputView.inputContinuePurchaseView();
      return isContinue;
    } catch (error) {
      MissionUtils.Console.print(error.message);
      return await this.inputContinuePurchase();
    }
  }
}

export default InputController;
