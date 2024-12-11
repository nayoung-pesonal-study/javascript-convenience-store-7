import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Message.js';

class OutputView {
  static printStartTitle() {
    MissionUtils.Console.print(MESSAGE.INFO.START);
    MissionUtils.Console.print(MESSAGE.INFO.STOCK);
    MissionUtils.Console.print(MESSAGE.BREAK);
  }

  static printCurrentStock(stock) {
    MissionUtils.Console.print(stock);
  }
}

export default OutputView;
