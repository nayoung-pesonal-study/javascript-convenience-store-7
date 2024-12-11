import { Parser } from '../utils/Parser';

class Car {
  #cars;

  constructor() {
    this.#cars = [];
  }

  addCar(names) {
    names.forEach((car) => {
      const carList = {
        name: car,
        advance: 0,
      };
      this.#cars.push(carList);
    });
  }

  test(string) {
    const splitedInput = Parser.splitStringToArray(string);
    const trimedSplitedInput = Parser.trimArrayElement(splitedInput);
    return trimedSplitedInput.map((cur) => Parser.parseToNumber(cur));
  }
}

export default Car;
