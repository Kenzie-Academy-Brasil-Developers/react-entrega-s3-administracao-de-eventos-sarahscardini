import React, { useContext } from "react";
import Header from "../../components/header";
import CartCard from "../../components/cartCard";
import { WeddingContext } from "../../providers/wedding";

const GraduationPage = () => {
  const { weddingDrinks, removeFromWedding, buyWeddingDrinks, removeAll } =
    useContext(WeddingContext);

  return (
    <>
      <Header />
      <CartCard
        title="Wedding List"
        list={weddingDrinks}
        remove={removeFromWedding}
        buy={buyWeddingDrinks}
        removeAll={removeAll}
      />
    </>
  );
};

export default GraduationPage;
