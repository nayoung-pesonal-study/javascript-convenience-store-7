import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Message.js';
import { Parser } from '../utils/Parser.js';

class InputView {
  static async inputNumberView() {
    const inputNumberString =
      await MissionUtils.Console.readLineAsync('숫자를 입력하세요.');
    return Parser.parseToNumber(inputNumberString);
  }

  static async inputBooleanView() {
    const inputBooleanString =
      await MissionUtils.Console.readLineAsync('Y 또는 N을 입력하세요');
    return Parser.parseTrueOrFalseInput(inputBooleanString);
  }
}

export default InputView;
