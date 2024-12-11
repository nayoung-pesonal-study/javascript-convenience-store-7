import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Message.js';
import { Parser } from '../utils/Parser.js';
import InputView from '../views/InputView.js';

class InputController {
  static async inputNumber() {
    try {
      const inputNumberString = await InputView.inputNumberView();
      return inputNumberString;
    } catch (error) {
      MissionUtils.Console.print(error);
      return await this.inputNumber();
    }
  }
}

export default InputController;
