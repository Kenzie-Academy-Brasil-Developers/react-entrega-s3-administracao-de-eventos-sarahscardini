import React, { useContext } from "react";
import Header from "../../components/header";
import CartCard from "../../components/cartCard";
import { GraduationContext } from "../../providers/graduation";

const GraduationPage = () => {
  const {
    graduationDrinks,
    removeFromGraduation,
    buyGraduationDrinks,
    removeAll,
  } = useContext(GraduationContext);

  return (
    <>
      <Header />
      <CartCard
        title="Graduation List"
        list={graduationDrinks}
        remove={removeFromGraduation}
        buy={buyGraduationDrinks}
        removeAll={removeAll}
      />
    </>
  );
};

export default GraduationPage;
