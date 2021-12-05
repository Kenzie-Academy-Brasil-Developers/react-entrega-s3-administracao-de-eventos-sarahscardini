import React, { useContext } from "react";
import Header from "../../components/header";
import CartCard from "../../components/cartCard";
import { PartyContext } from "../../providers/party";

const GraduationPage = () => {
  const { partyDrinks, removeFromPartyList, buyPartyDrinks, removeAll } =
    useContext(PartyContext);

  return (
    <>
      <Header />
      <CartCard
        title="Party List"
        list={partyDrinks}
        remove={removeFromPartyList}
        buy={buyPartyDrinks}
        removeAll={removeAll}
      />
    </>
  );
};

export default GraduationPage;
