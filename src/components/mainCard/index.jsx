import React, { useContext, useState } from "react";
import Button from "../button";
import EventsDialog from "../eventsDialog";
import { ProductsContext } from "../../providers/products";
import { Container } from "./style";

const MainCard = ({ handleDetails }) => {
  const { products } = useContext(ProductsContext);

  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState([]);

  const handleClickOpen = (item) => {
    setCurrent(item)
    setOpen(true);
  }

  const handleClose = () => setOpen(false);

  const cutDescription = (string) => {
    if (string.length >= 50) {
      string = string.slice(0, 47) + "..."; // 15 with the 3 dots
    }
    return string;
  };

  return (
    <Container>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <img src={item.image_url} alt={item.name} />
            <div className="liText">
              <p>
                <strong>First brewed:</strong> {item.first_brewed}
              </p>
              <p className="description">{cutDescription(item.description)}</p>
              <p className="volume">
                {item.volume.value} {item.volume.unit}
              </p>
            </div>
            <div className="btnBox">
              <Button onClick={() => handleClickOpen(item)} text="Add to an Event" />
              <EventsDialog
                open={open}
                handleClose={handleClose}
                item={current}
              ></EventsDialog>
              <Button
                onClick={() => handleDetails(item)}
                name="details"
                text="Details"
              />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default MainCard;
