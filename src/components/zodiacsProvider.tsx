import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  ChineseConstellationNames,
  getCurrentConstellation,
} from "../util/const";

type ZodiacContextType = {
  favZodiacs: number[];
  addFavZodiac: (index: number) => void;
  removeFromFavs: (index: number) => void;
};

const ZodiacsContext = createContext<ZodiacContextType>(
  {} as ZodiacContextType
);

export const ZoidacsProvider = ({ children }: { children: ReactNode }) => {
  const [favZodiacs, setFavZodiacs] = useState([] as number[]);
  const retrievedJsonString = localStorage.getItem("favZodiacs");
  const retrievedArray = JSON.parse(retrievedJsonString!);

  useEffect(() => {
    const fetchZodiac = async () => {
      if (retrievedArray.length != 0) {
        setFavZodiacs(retrievedArray);
        return;
      }
      const newFavZodiacs = [
        ChineseConstellationNames.indexOf(getCurrentConstellation()),
      ];
      localStorage.setItem("favZodiacs", JSON.stringify(newFavZodiacs));
      setFavZodiacs(newFavZodiacs);
    };
    fetchZodiac();
  }, []);

  const addFavZodiac = (index: number) => {
    if (retrievedArray.includes(index)) {
      return;
    }
    if (favZodiacs.length >= 5) {
      alert("最多只能关注5个星座");
      return;
    }
    const newFavZoidacs = [...favZodiacs, index];
    setFavZodiacs(newFavZoidacs);
    localStorage.setItem("favZodiacs", JSON.stringify(newFavZoidacs));
  };

  const removeFromFavs = (index: number) => {
    if (favZodiacs.length == 1) {
      return;
    }
    const newFavs = favZodiacs.filter((item: number) => item !== index);
    setFavZodiacs(newFavs);
    localStorage.setItem("favZodiacs", JSON.stringify(newFavs));
  };

  return (
    <ZodiacsContext.Provider
      value={{
        favZodiacs,
        addFavZodiac,
        removeFromFavs,
      }}
    >
      {children}
    </ZodiacsContext.Provider>
  );
};

export const useZodiacs = () => useContext(ZodiacsContext);
