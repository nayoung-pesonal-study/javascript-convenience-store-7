import { DEFINITION } from '../constants/Definition.js';
import { Validator } from './Validator.js';

export const Parser = {
  splitStringToArray: (string) => {
    const splitedInput = string.split(DEFINITION.DELIMITER.COMMA); // Definition.js 파일에 정의된 DELIMITER.COMMA 구분자로 스플릿
    const trimArray = Parser.trimArrayElement(splitedInput);

    return trimArray;
  },
  trimArrayElement: (array) => {
    const trimedArray = array.map((item) => item.trim());
    return trimedArray;
  },
  parseToNumber: (string) => {
    const trimedInput = string.trim();
    Validator.isEmpty(trimedInput);
    const parsedInput = Number(trimedInput);
    Validator.isNaturalNumber(parsedInput); // 자연수인지 검사. 숫자열인지도 함께 검사함.

    return parsedInput;
  },
  splitLine: (string) => {
    // 줄마다 스플릿하고 첫줄 무시
    const splitedString = string.trim().split('\n').slice(1);
    const trimedSplitedString = Parser.trimArrayElement(splitedString);
    return trimedSplitedString;
  },
  cutStringEdge: (string) => {
    Validator.isValidEdge(string);
    return string.slice(1, string.length - 1);
  },
  parseTrueOrFalseInput: (string) => {
    Validator.isValidBooleanInput(string);
    if (string.trim() === DEFINITION.VALID_TRUE_INPUT) {
      return true;
    }
    return false;
  },
  returnUniqueValue: (array) => {
    const uniqueArray = array.filter(
      (item, index, self) => self.indexOf(item) === self.lastIndexOf(item),
    );
    return uniqueArray;
  },
};
