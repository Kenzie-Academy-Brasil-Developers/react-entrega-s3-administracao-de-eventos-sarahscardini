import React, { useState } from "react";
import Header from "../../components/header";
import MainCard from "../../components/mainCard";
import Details from "../../components/details";

const MainPage = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [itemDetails, setItemDetails] = useState();

  const handleDetails = (item) => {
    setOpenDetails(true);
    setItemDetails(item);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
    setItemDetails();
  };

  return (
    <>
      <Header />
      <MainCard handleDetails={handleDetails} />
      {openDetails && (
        <Details
          openDetails={openDetails}
          handleCloseDetails={handleCloseDetails}
          item={itemDetails}
        />
      )}
    </>
  );
};

export default MainPage;
