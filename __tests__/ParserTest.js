import { DEFINITION } from '../src/constants/Definition.js';
import { Parser } from '../src/utils/Parser.js';

describe('utils/Parser 의 테스트', () => {
  test('splitStringToArray() 테스트', () => {
    const input = ' nayoung , rang, soojin ';
    const result = Parser.splitStringToArray(input);
    expect(result).toEqual(['nayoung', 'rang', 'soojin']);
  });

  test('trimArrayElement() 테스트', () => {
    const input = ['   space   ', '    space2       '];
    const result = Parser.trimArrayElement(input);
    expect(result).toEqual(['space', 'space2']);
  });

  test('parseToNumber() 테스트', () => {
    const input = '    5   ';
    const result = Parser.parseToNumber(input);
    expect(result).toBe(5);
  });

  test('splitLine() 테스트', () => {
    const input = `first Line
    second Line
    third Line`;
    const result = Parser.splitLine(input);
    expect(result).toEqual(['second Line', 'third Line']);
  });

  test('cutStringEdge() 테스트', () => {
    const input = `${DEFINITION.VALID_EDGE_START}사이다${DEFINITION.VALID_EDGE_END}`;
    const result = Parser.cutStringEdge(input);
    expect(result).toEqual('사이다');
  });

  test('parseTrueOrFalseInput() 테스트 - ture에 해당하는 값 입력 시', () => {
    const input = DEFINITION.VALID_TRUE_INPUT;
    const result = Parser.parseTrueOrFalseInput(input);
    expect(result).toBe(true);
  });

  test('parseTrueOrFalseInput() 테스트 - false 해당하는 값 입력 시', () => {
    const input = DEFINITION.VALID_FALSE_INPUT;
    const result = Parser.parseTrueOrFalseInput(input);
    expect(result).toBe(false);
  });

  test('parseTrueOrFalseInput() 테스트 - 유효하지 않은 값 입력 시', () => {
    const input = '!@#^$&*@';
    expect(() => Parser.parseTrueOrFalseInput(input)).toThrow('[ERROR]');
    expect(Parser.parseTrueOrFalseInput(DEFINITION.VALID_TRUE_INPUT)).toBe(
      true,
    );
    expect(Parser.parseTrueOrFalseInput(DEFINITION.VALID_FALSE_INPUT)).toBe(
      false,
    );
  });
});
