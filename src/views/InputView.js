import { MissionUtils } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/Message.js';
import { Parser } from '../utils/Parser.js';

function parseInputPurchaseAmountView(inputPurchaseAmount) {
  const splitedPurchaseAmount = Parser.splitStringToArray(
    inputPurchaseAmount,
    ',',
  );
  const parsedPurchaseAmountList = splitedPurchaseAmount.map((purchase) => {
    const purchaseContent = Parser.cutStringEdge(purchase);
    const [name, quantity] = Parser.splitStringToArray(purchaseContent, '-');
    return { name: name, quantity: quantity };
  });
  return parsedPurchaseAmountList;
}

class InputView {
  static async inputPurchaseAmountView() {
    const inputPurchaseAmount = await MissionUtils.Console.readLineAsync(
      MESSAGE.INPUT.PURCHASE_AMOUNT,
    );
    return parseInputPurchaseAmountView(inputPurchaseAmount);
  }

  static async inputBooleanView() {
    const inputBooleanString =
      await MissionUtils.Console.readLineAsync('Y 또는 N을 입력하세요');
    return Parser.parseTrueOrFalseInput(inputBooleanString);
  }
}

export default InputView;
