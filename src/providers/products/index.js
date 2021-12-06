import { createContext, useState, useEffect } from "react";
import api from "../../services/api";

export const ProductsContext = createContext([]);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [next, setNext] = useState(1);

  useEffect(() => {
    api
      .get(`?page=${next}`)
      .then((response) => {
        if (next < 14) {
          setProducts((prevList) => [...prevList, ...response.data]);
          setNext(next + 1);
        }
      })
      .catch((err) => console.log(err));
  }, [next]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
