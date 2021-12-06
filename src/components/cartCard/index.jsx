import React from "react";
import Button from "../button";
import altImage from '../../assets/img/alt.png'
import { Container } from "./style";

const CartCard = (props) => {
  const { title, list, remove, buy, removeAll } = props;

  return (
    <Container>
      <div className="tableHead">
        <h2>{title}</h2>
      </div>
      {list.toString() ? (
        <>
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <img
                  src={item.image_url ? item.image_url : altImage}
                  alt={item.name}
                />
                <h3>{item.name}</h3>
                <Button
                  onClick={() => remove(item)}
                  text="Remove from List"
                  name="removeBtn"
                />
              </li>
            ))}
          </ul>
          <div className="BtnBox">
            <Button text="Buy" onClick={buy} name="buy" />
            <Button text="Remove All" onClick={removeAll} name="removeAll" />
          </div>
        </>
      ) : (
        <p>Your List is Empty</p>
      )}
    </Container>
  );
};

export default CartCard;
