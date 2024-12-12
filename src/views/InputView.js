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

  static async inputMembershipView() {
    const inputBooleanString = await MissionUtils.Console.readLineAsync(
      '멤버십 할인을 받으시겠습니까? (Y/N)',
    );
    return Parser.parseTrueOrFalseInput(inputBooleanString);
  }

  static async inputContinuePurchaseView() {
    const inputBooleanString = await MissionUtils.Console.readLineAsync(
      '감사합니다. 구매하고 싶은 다른 상품이 있나요? (Y/N)',
    );
    return Parser.parseTrueOrFalseInput(inputBooleanString);
  }

  static async inputWithoutPromotionView(name, quantity) {
    const inputBooleanString = await MissionUtils.Console.readLineAsync(
      `현재 ${name} ${quantity}개는 프로모션 할인이 적용되지 않습니다. 그래도 구매하시겠습니까? (Y/N)`,
    );
    return Parser.parseTrueOrFalseInput(inputBooleanString);
  }

  static async inputApplyPromotionView(name, quantity) {
    const inputBooleanString = await MissionUtils.Console.readLineAsync(
      `현재 ${name}은(는) ${quantity}개를 무료로 더 받을 수 있습니다. 추가하시겠습니까? (Y/N)`,
    );
    return Parser.parseTrueOrFalseInput(inputBooleanString);
  }
}

export default InputView;
