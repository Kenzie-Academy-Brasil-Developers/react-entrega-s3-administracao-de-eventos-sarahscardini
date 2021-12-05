import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const WeddingContext = createContext([]);

export const WeddingProvider = ({ children }) => {
  let token = JSON.parse(localStorage.getItem("@WeddingDrinks")) || [];

  const [weddingDrinks, setWeddingDrinks] = useState(token);

  const saveToken = (list) => {
    token = list;
    localStorage.setItem("@WeddingDrinks", JSON.stringify(token));
  };

  const addToWedding = (item) => {
    let newCart = [...weddingDrinks, item];
    setWeddingDrinks(newCart);
    saveToken(newCart);
  };

  const removeFromWedding = (item) => {
    let newCart = [...weddingDrinks];
    let index = newCart.findIndex((current) => current.id === item.id);

    if (index !== -1) {
      newCart.splice((current) => current.id === index, 1);
    }

    setWeddingDrinks(newCart);
    saveToken(newCart);
    toast.warn("Item removed");
  };

  const buyWeddingDrinks = () => {
    setWeddingDrinks([]);
    localStorage.removeItem("@WeddingDrinks");
    toast.success("Thank you for ordering!");
  };


  const removeAll = () => {
    setWeddingDrinks([]);
    localStorage.removeItem("@WeddingDrinks");
    toast.warn("All drinks removed from Graduation");
  };

  return (
    <WeddingContext.Provider
      value={{
        weddingDrinks,
        addToWedding,
        removeFromWedding,
        buyWeddingDrinks,
        removeAll,
      }}
    >
      {children}
    </WeddingContext.Provider>
  );
};
