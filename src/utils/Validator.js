import { DEFINITION } from '../constants/Definition.js';
import { MESSAGE } from '../constants/Message.js';

export const Validator = {
  isEmpty: (string) => {
    if (string === null || string.trim().length === 0 || !string) {
      throw new Error(MESSAGE.ERROR.IS_EMPTY);
    }
  },
  isMaxStringLength: (string) => {
    if (string.length > DEFINITION.MAX.STRING_LENGTH) {
      throw new Error(MESSAGE.ERROR.IS_MAX_STRING_LENGTH);
    }
  },
  isMaxArrayLength: (array) => {
    if (array.length > DEFINITION.MAX.ARRAY_LENGTH) {
      throw new Error(MESSAGE.ERROR.IS_MAX_ARRAY_LENGTH);
    }
  },
  isSameInArray: (array) => {
    const arrayCopy = [...new Set([...array])];
    if (array.length !== arrayCopy.length) {
      throw new Error(MESSAGE.ERROR.IS_SAME_IN_ARRAY);
    }
  },
  isNumber: (number) => {
    if (typeof number !== 'number' || Number.isNaN(number)) {
      throw new Error(MESSAGE.ERROR.NOT_NUMBER);
    }
  },
  isMaxNumber: (number) => {
    if (number >= DEFINITION.MAX.NUMBER) {
      throw new Error(MESSAGE.ERROR.IS_MAX_NUMBER);
    }
  },
  isNaturalNumber: (number) => {
    if (
      number <= 0 ||
      !Number.isInteger(number) ||
      Number.isNaN(Number(number))
    ) {
      throw new Error(MESSAGE.ERROR.NOT_NATURAL_NUMBER);
    }
  },
  isInputInArray: (input, inputArray) => {
    if (inputArray.includes(input)) {
      throw new Error(MESSAGE.ERROR.IS_INPUT_IN_ARRAY);
    }
  },
  isValidBooleanInput: (input) => {
    // {Y or N}의 입력값이 왔는지 확인하는 로직(Definition 에서 Y나 N대신 다른 값으로 쉽게 바꿀 수 있게 리팩토링했음)
    // 대문자 소문자도 정확히 같아야함
    if (!DEFINITION.VALID_TRUE_OR_FALSE.includes(input.trim())) {
      throw new Error(
        MESSAGE.ERROR.NOT_VALID_TRUE_OR_FALSE(
          DEFINITION.VALID_TRUE_INPUT,
          DEFINITION.VALID_FALSE_INPUT,
        ),
      );
    }
  },
  isValidEdge: (string) => {
    if (
      string[0] !== DEFINITION.VALID_EDGE_START ||
      string[string.length - 1] !== DEFINITION.VALID_EDGE_END
    ) {
      throw new Error(
        MESSAGE.ERROR.NOT_VALID_EDGE(
          DEFINITION.VALID_EDGE_START,
          DEFINITION.VALID_EDGE_END,
        ),
      );
    }
  },
  isFalseThrowError: (boolean, message) => {
    if (!boolean) {
      throw new Error(message);
    }
  },
};
