import { FaStar } from "react-icons/fa";

export const numberOfActiveStar = (input: number) => {
  switch (true) {
    case input >= 85:
      return 5;
    case input >= 70:
      return 4;
    case input >= 50:
      return 3;
    case input >= 30:
      return 2;
    default:
      return 1;
  }
};

export const stars = (input: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <span key={index}>
      <FaStar
        className={`star-icon ${
          index < numberOfActiveStar(input) ? "active" : ""
        }`}
      />
    </span>
  ));
};
