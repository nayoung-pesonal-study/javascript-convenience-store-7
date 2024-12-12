import { MissionUtils } from '@woowacourse/mission-utils';
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

  // products = <payment{name, price, quantity, promotion, bonus}>
  static printReciept(totalPayment) {
    // <[name, quantity, price]> 온다 치면,
    const products = [
      {
        name: '사이다',
        price: '1,400',
        quantity: '4',
        promotion: 'null',
        bonus: '3',
      },
      {
        name: '콜라',
        price: '1,400',
        quantity: '4',
        promotion: 'null',
        bonus: '3',
      },
    ];
    MissionUtils.Console.print('===========W 편의점=============');
    products.forEach((product) => {
      const nameLength = 5 - product.name.length;
      const nameSpace = nameLength + 12;
      const name = product.name.padEnd(nameSpace);
      const quantity = product.quantity.padEnd(6);
      const price = product.price.padStart(10);
      MissionUtils.Console.print(`${name}${quantity}${price}`);
    });
    MissionUtils.Console.print('=============증 정===============');
    MissionUtils.Console.print(`내실 돈\n${totalPayment}`);
  }
}

export default OutputController;
