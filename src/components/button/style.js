import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  .details {
    background-color: var(--light-orange);
  }

  .details::after {
    background-color: var(--yellow1);
  }

  .removeBtn {
    background-color: var(--pink);
  }

  .removeBtn::after {
    background-color: var(--purple);
  }

  .buy {
    background-color: var(--green1);
    width: 100px;
  }

  .buy::after {
    background-color: #31cb74;
  }

  .removeAll {
    background-color: var(--purple);
    width: 100px;
  }

  .removeAll::after {
    background-color: var(--yellow2);
  }

  @media (min-width: 768px){
    .buy, .removeAll{
      width: 150px;
    }
  }
`;

export const ButtonStyle = styled.button`
  background-color: var(--blue1);
  border-radius: 3rem;
  border: 2px solid var(--black);
  color: var(--black);
  cursor: pointer;
  font-family: var(--main-font);
  font-size: 12px;
  font-weight: 500;
  overflow: hidden;
  padding: 5px;
  position: relative;
  transition: 0.2s transform ease-in-out;
  will-change: transform;
  z-index: 0;

  &::after {
    background-color: var(--green1);
    border-radius: 50px;
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform-origin: top left;
    transform: translate(-100%, 0) rotate(10deg);
    transition: 0.2s transform ease-out;
    width: 100%;
    will-change: transform;
    z-index: -1;
  }

  &:hover::after {
    transform: translate(0, 0);
  }

  &:hover {
    transform: scale(1.03);
    will-change: transform;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
