import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const PartyContext = createContext([]);

export const PartyProvider = ({ children }) => {
  let token = JSON.parse(localStorage.getItem("@PartyDrinks")) || [];

  const [partyDrinks, setPartyDrinks] = useState(token);

  const saveToken = (list) => {
    token = list;
    localStorage.setItem("@PartyDrinks", JSON.stringify(token));
  };

  const addToPartyList = (item) => {
    let newCart = [...partyDrinks, item];
    setPartyDrinks(newCart);
    saveToken(newCart);
  };

  const removeFromPartyList = (item) => {
    let newCart = [...partyDrinks];
    let index = newCart.findIndex((current) => current.id === item.id);

    if (index !== -1) {
      newCart.splice((current) => current.id === index, 1);
    }

    setPartyDrinks(newCart);
    saveToken(newCart);
    toast.warn("Item removed");
  };

  const buyPartyDrinks = () => {
    setPartyDrinks([]);
    localStorage.removeItem("@PartyDrinks");
    toast.success("Thank you for ordering!");
  };

  const removeAll = () => {
    setPartyDrinks([]);
    localStorage.removeItem("@PartyDrinks");
    toast.warn("All drinks removed from Party");
  };

  return (
    <PartyContext.Provider
      value={{
        partyDrinks,
        addToPartyList,
        removeFromPartyList,
        buyPartyDrinks,
        removeAll,
      }}
    >
      {children}
    </PartyContext.Provider>
  );
};
