const LOTTO = {
  PRICE: 1000,
};

const INPUT = {
  BUY: "구입금액을 입력해 주세요.\n",
  WIN_NUMBER: "\n당첨 번호를 입력해 주세요.\n",
  BONUS: "\n보너스 번호를 입력해 주세요.\n",
};

const PRINT = {
  BUY: (count) => `\n${count}개를 구매했습니다.`,
  RESULT: "\n당첨 통계\n ---\n",
  GAIN_PECENT: (percent) => `총 수익률은 ${percent}%입니다.\n`,
};

const WINNING = {
  MENT: {
    FIRST: (count) => `6개 일치 (2,000,000,000원) - ${count}개\n`,
    SECOND: (count) => `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개\n`,
    THIRD: (count) => `5개 일치 (1,500,000원) - ${count}개\n`,
    FOURTH: (count) => `4개 일치 (50,000원) - ${count}개\n`,
    FIFTH: (count) => `3개 일치 (5,000원) - ${count}개\n`,
  },

  PRICE: {
    FIRST: 2000000000,
    SECOND: 30000000,
    THIRD: 1500000,
    FOUTH: 50000,
    FIFTH: 5000,
  },
};

const RESULT = {
  FIRST: 0,
  SECOND: 0,
  THIRD: 0,
  FOURTH: 0,
  FIFTH: 0,
};

const EXCEPTION = (ment) => new Error(`[ERROR] ${ment}`);

module.exports = { RESULT, LOTTO, INPUT, PRINT, WINNING, EXCEPTION };
