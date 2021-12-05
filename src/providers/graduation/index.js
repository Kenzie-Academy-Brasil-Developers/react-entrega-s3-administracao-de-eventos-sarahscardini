import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const GraduationContext = createContext([]);

export const GraduationProvider = ({ children }) => {
  let token = JSON.parse(localStorage.getItem("@GraduationDrinks")) || [];

  const [graduationDrinks, setGraduationDrinks] = useState(token);

  const saveToken = (list) => {
    token = list;
    localStorage.setItem("@GraduationDrinks", JSON.stringify(token));
  };

  const addToGraduation = (item) => {
    let newCart = [...graduationDrinks, item];
    setGraduationDrinks(newCart);
    saveToken(newCart);
  };

  const removeFromGraduation = (item) => {
    let newCart = [...graduationDrinks];
    let index = newCart.findIndex((current) => current.id === item.id);

    if (index !== -1) {
      newCart.splice((current) => current.id === index, 1);
    }

    setGraduationDrinks(newCart);
    saveToken(newCart);
    toast.warn("Item removed");
  };

  const buyGraduationDrinks = () => {
    setGraduationDrinks([]);
    localStorage.removeItem("@GraduationDrinks");
    toast.success("Thank you for ordering!");
  };

  const removeAll = () => {
    setGraduationDrinks([]);
    localStorage.removeItem("@GraduationDrinks");
    toast.warn("All drinks removed from Graduation");
  };

  return (
    <GraduationContext.Provider
      value={{
        graduationDrinks,
        addToGraduation,
        removeFromGraduation,
        buyGraduationDrinks,
        removeAll,
      }}
    >
      {children}
    </GraduationContext.Provider>
  );
};
