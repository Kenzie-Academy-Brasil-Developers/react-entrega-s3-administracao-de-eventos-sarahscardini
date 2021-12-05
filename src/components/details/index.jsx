import React from "react";
import Button from "../button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Content } from "./style";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Details = ({ openDetails, handleCloseDetails, item }) => {
  const {
    name,
    image_url,
    tagline,
    first_brewed,
    description,
    volume,
    ingredients,
    food_pairing,
    brewers_tips,
  } = item;

  return (
    <>
      <Dialog
        open={openDetails}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseDetails}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle
          style={{
            fontFamily: "var(--main-font)",
            textAlign: "center",
            fontSize: "1.5rem",
          }}
        >
          {name}
        </DialogTitle>
        <DialogContent>
          <Content>
            <div className="imgBox">
              <img src={image_url} alt={name} />
              <em>{tagline}</em>
            </div>
            <ul>
              <li>
                <strong>First Brewed:</strong> {first_brewed}
              </li>
              <li>
                <strong>Description: </strong>
                {description}
              </li>
              <li>
                <strong> Volume: </strong>
                {volume.value} {volume.unit}.
              </li>
              <li>
                <div className="ingredientsBox">
                  <h3>Ingredients</h3>
                  <ol>
                    <li>
                      <strong>Hops:</strong>{" "}
                      {ingredients.hops.map((hop) => hop.name).join(", ")}.
                    </li>
                    <li>
                      <strong>Malt:</strong>{" "}
                      {ingredients.malt
                        .map((maltItem) => maltItem.name)
                        .join(", ")}
                      .
                    </li>
                    <li>
                      <strong>Yeast:</strong> {ingredients.yeast}
                    </li>
                  </ol>
                </div>
              </li>
              <li>
                <strong>Food pairing:</strong> {food_pairing.join(", ")}.
              </li>
              <li>
                <strong>Brewers tips:</strong> {brewers_tips}
              </li>
            </ul>
          </Content>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDetails} text="Close" name="closeBtn" />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Details;
