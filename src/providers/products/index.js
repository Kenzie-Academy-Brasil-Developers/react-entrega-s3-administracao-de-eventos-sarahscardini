import { createContext, useState, useEffect } from "react";
import api from "../../services/api";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  let token =
    JSON.parse(localStorage.getItem("@TheGoodStuffProductsCurrPage")) || [];
  const [products, setProducts] = useState(token);
  const [next, setNext] = useState(1);
  const [final, setFinal] = useState(false);

  useEffect(() => {
    api
      .get(`?page=${next}`)
      .then((response) => {
        if (response.data.toString()) {
          setProducts(response.data);
          localStorage.setItem(
            "@TheGoodStuffProductsCurrPage",
            JSON.stringify(response.data)
          );
          setFinal(false);
        } else {
          setFinal(true);
        }
      })
      .catch((err) => console.log(err));
  }, [next]);

  const nextPage = () => {
    if (!final) {
      setNext(next + 1);
      return true;
    } else {
      return false;
    }
  };

  const previousPage = () => {
    if (next > 1) {
      setNext(next - 1);
      return true;
    } else {
      return false;
    }
  };

  return (
    <ProductsContext.Provider value={{ products, nextPage, previousPage, next, final }}>
      {children}
    </ProductsContext.Provider>
  );
};
