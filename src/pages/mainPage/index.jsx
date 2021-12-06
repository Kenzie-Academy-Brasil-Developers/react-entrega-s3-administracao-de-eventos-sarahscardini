import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import MainCard from "../../components/mainCard";
import Details from "../../components/details";
import { Container } from "./style";
import { FiArrowUp } from "react-icons/fi";

const MainPage = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [itemDetails, setItemDetails] = useState();
  const [showArrow, setShowArrow] = useState(false);

  const handleDetails = (item) => {
    setOpenDetails(true);
    setItemDetails(item);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
    setItemDetails();
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Header search={true} />

      {showArrow && (
        <button onClick={scrollToTop} className="toTopBtn">
          <FiArrowUp />
        </button>
      )}

      <MainCard handleDetails={handleDetails} />
      {openDetails && (
        <Details
          openDetails={openDetails}
          handleCloseDetails={handleCloseDetails}
          item={itemDetails}
        />
      )}
    </Container>
  );
};

export default MainPage;
