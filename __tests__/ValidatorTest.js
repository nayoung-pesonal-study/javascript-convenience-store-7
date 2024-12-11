import { DEFINITION } from '../src/constants/Definition.js';
import { Validator } from '../src/utils/Validator.js';

describe('Validator 테스트', () => {
  test('isEmpty() 문자열이 공백제거 후 빈 값인지 검사', () => {
    expect(() => Validator.isEmpty('   ')).toThrow('[ERROR]');
  });

  test('isMaxStringLength() 문자열 길이가 정해진 최댓값보다 긴지 검사(DEFINITION.MAX.STRING_LENGTH에 정의해둠', () => {
    expect(() => Validator.isMaxStringLength('123456789')).toThrow('[ERROR]');
  });

  test('isMaxArrayLength() 배열의 길이(요소 개수)가 정해진 최댓값보다 많은지 검사(DEFINITION.MAX.ARRAY_LENGTH 에 정의해둠', () => {
    expect(() => Validator.isMaxArrayLength([1, 2, 3, 4, 5, 6, 7])).toThrow(
      '[ERROR]',
    );
  });

  test('isSameInArray() 배열 안에 중복값이 있는지 검사', () => {
    expect(() => Validator.isSameInArray(['나영', '나영', '랑이'])).toThrow(
      '[ERROR]',
    );
    expect(() => Validator.isSameInArray([1, 1, 2])).toThrow('[ERROR]');
  });

  test('isNumber() 숫자인지 검사', () => {
    expect(() => Validator.isNumber('!')).toThrow('[ERROR]');
    expect(() => Validator.isNumber('3')).toThrow('[ERROR]');
    expect(() => Validator.isNumber(3)).not.toThrow('[ERROR]');
  });

  test('isMaxNumber() 숫자가 정해진 최댓값보다 많은지 검사(DEFINITION.MAX.NUMBER 에 정의해둠', () => {
    expect(() => Validator.isMaxNumber(10001)).toThrow('[ERROR]');
  });

  test('isNaturalNumber() 자연수(양의 정수)인지 검사', () => {
    expect(() => Validator.isNaturalNumber(-1)).toThrow('[ERROR]');
    expect(() => Validator.isNaturalNumber(0.5)).toThrow('[ERROR]');
    expect(() => Validator.isNaturalNumber(0)).toThrow('[ERROR]');
    expect(() => Validator.isNaturalNumber(3)).not.toThrow('[ERROR]');
  });

  test('isInputInArray() input값이 inputArray 요소 안에 있는지 중복 검사', () => {
    expect(() => Validator.isInputInArray(3, [1, 2, 3, 4, 5])).toThrow(
      '[ERROR]',
    );
    expect(() =>
      Validator.isInputInArray('나영', ['나영', '랑이', '수진']),
    ).toThrow('[ERROR]');
    expect(() => Validator.isInputInArray(6, [1, 2, 3, 4, 5])).not.toThrow(
      '[ERROR]',
    );
  });

  test('isValidBooleanInput() 유효한 Y/N 입력을 했는지 검사(DEFINITION.VALID_TRUE_OR_FALSE 에 정의해둠', () => {
    expect(() => Validator.isValidBooleanInput('Q')).toThrow('[ERROR]');
  });

  test('isValidEdge() 유효한 문자로 감쌌는지 검사(DEFINITION.VALID_EDGE~ 에 정의해둠', () => {
    expect(() =>
      Validator.isValidEdge(
        `${DEFINITION.VALID_EDGE_START}사이다${DEFINITION.VALID_EDGE_END}`,
      ),
    ).not.toThrow('[ERROR]');
    expect(() => Validator.isValidEdge('!사이다$')).toThrow('[ERROR]');
  });
});
