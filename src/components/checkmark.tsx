import { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { useZodiacs } from "./zodiacsProvider";
interface CheckMarkInterface {
  index: number;
}

export const CheckMark = ({ index }: CheckMarkInterface) => {
  const favZodiacs = JSON.parse(localStorage.getItem("favZodiacs")!);
  const isActive = favZodiacs.includes(index);
  const [isHovered, setIsHovered] = useState(false);
  const { addFavZodiac, removeFromFavs } = useZodiacs();

  return (
    <>
      {isHovered &&
        (isActive ? (
          <LiaTimesCircleSolid
            onMouseLeave={() => setIsHovered(false)}
            className={"times"}
            onClick={() => removeFromFavs(index)}
          />
        ) : (
          <IoIosCheckmarkCircle
            className={`check-mark`}
            onClick={() => addFavZodiac(index)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        ))}

      {!isHovered && (
        <IoIosCheckmarkCircle
          className={`check-mark ${isActive ? "active" : ""}`}
          onClick={() => removeFromFavs(index)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      )}
    </>
  );
};
