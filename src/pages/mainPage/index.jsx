import React, { useState, useEffect, useContext } from "react";
import Header from "../../components/header";
import MainCard from "../../components/mainCard";
import Details from "../../components/details";
import Button from "../../components/button";
import { ProductsContext } from "../../providers/products";
import { Container } from "./style";
import { FiArrowUp } from "react-icons/fi";

const MainPage = () => {
  const [openDetails, setOpenDetails] = useState(false);
  const [itemDetails, setItemDetails] = useState();
  const [showArrow, setShowArrow] = useState(false);

  const { nextPage, previousPage, final, next } = useContext(ProductsContext);

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

      <div className="buttonsBox">
        <Button
          name={next > 1 ? "previousBtn changePage" : "disableBtn changePage"}
          text="previous page"
          onClick={previousPage}
        />
        <Button
          name={!final ? "nextBtn changePage" : "disableBtn changePage"}
          text="next page"
          onClick={nextPage}
        />
      </div>
    </Container>
  );
};

export default MainPage;
