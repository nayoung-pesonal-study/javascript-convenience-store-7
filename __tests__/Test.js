import Car from '../src/models/Car.js';
import { Parser } from '../src/utils/Parser.js';

describe('Car 객체 테스트 코드 템플릿', () => {
  let car;
  beforeEach(() => {
    car = new Car();
  });
  test('test 메서드에서 splitStringToArray 반환 값 검증', () => {
    const spyParser = jest.spyOn(Parser, 'splitStringToArray');
    const input = '1,2,3,4,5';
    car.test(input);

    expect(spyParser).toHaveBeenCalledWith(input);
    // spy를 붙인 splitStringToArray의 반환 값 검증을 위해 mock.results[].value 사용
    expect(spyParser.mock.results[0].value).toEqual(['1', '2', '3', '4', '5']);
  });
  test('test 메서드 테스트', () => {
    const input = '1,2,3,4,5';
    const result = car.test(input);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
