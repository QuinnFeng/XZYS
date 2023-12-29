export interface ZodiacToday {
  QFriend: String;
  color: String;
  health: String;
  love: String;
  work: String;
  money: String;
  number: number;
  summary: string;
  all: string;
}

export type ZodiacFortune = {
  today: {
    QFriend: string;
    color: string;
    health: string;
    love: string;
    work: string;
    money: string;
    number: number;
    summary: string;
    all: string;
  };
  tomorrow: {
    QFriend: string;
    color: string;
    health: string;
    love: string;
    work: string;
    money: string;
    number: number;
    summary: string;
    all: string;
  };
  week: {
    health: string;
    job: string;
    love: string;
    money: string;
    work: string;
  };
  month: {
    health: string;
    all: string;
    love: string;
    money: string;
    work: string;
  };
  year: {
    career: string;
    love: string;
    health: string;
    finance: string;
    mima: Mima;
    luckyStone: string;
  };
};

interface Mima {
  info: string;
  text: string;
}

export type ZodiacFortunesType = {
  [key: string]: ZodiacFortune;
};

export interface user {
  id?: number;
  name: string;
  email: string;
  phone: string;
  password: string;
}
