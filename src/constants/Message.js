export const MESSAGE = {
  INFO: {
    START: '안녕하세요. W편의점입니다.',
    STOCK: '현재 보유하고 있는 상품입니다.',
    PURCHASE_PRICE: '구입금액을 입력해 주세요.\n',
    WINNER_NUMBERS: '당첨 번호를 입력해 주세요.\n',
    BONUS_NUMBER: '보너스 번호를 입력해 주세요.\n',
  },
  BREAK: '',
  ERROR: {
    IS_EMPTY: '[ERROR] 빈 값 입니다.',
    NOT_RANGE_LOTTO: '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.',
    NOT_THOUSAND:
      '[ERROR] 로또 구입 금액은 1000원 단위로 나누어떨어져야합니다.',
    NOT_NUMBER: '[ERROR] 숫자가 아닌 입력이 있습니다.',
    NOT_NATURAL_NUMBER: '[ERROR] 자연수를 입력해주세요.',
    IS_INPUT_IN_ARRAY: '[ERROR] 해당 값이 기존 배열에 이미 존재합니다.',
    IS_SAME_IN_ARRAY: '[ERROR] 배열 안에 중복이 있습니다.',
    IS_MAX_NUMBER: '[ERROR] 너무 큰 입력값입니다.',
    IS_MAX_STRING_LENGTH: '[ERROR] 문자열의 길이가 너무 깁니다.',
    IS_MAX_ARRAY_LENGTH:
      '[ERROR] 배열의 길이(요소의 숫자)가 너무 많습니다. DEFINITION.ARRAY.MAX_LENGTH 값을 넘지 않았는지 확인해주세요.',
    NOT_VALID_EDGE: (start, end) =>
      `[ERROR] 해당 입력은 ${start} ${end}로 감싸져야 합니다.`,
    NOT_VALID_TRUE_OR_FALSE: (trueInput, falseInput) =>
      `[ERROR] ${trueInput} 또는 ${falseInput} 을 입력해주세요.`,
  },
};
