import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 80px;
  justify-content: space-between;
  padding: 13px;

  h1 {
    color: var(--black);
    cursor: pointer;
    font-family: var(--main-font);
    font-size: 22px;
    letter-spacing: 1.5px;
    text-shadow: 1px 1px var(--grey1);
  }

  .emoji {
    font-size: 20px;
    margin: 0 5px;
  }

  @media (min-width: 768px) {
    display: flex;
    padding: 0 30px;

    h1 {
      font-size: 26px;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 36px;
    }

    .emoji {
      font-size: 30px;
    }
  }
`;

export const BurguerMenu = styled.div`
  display: flex;

  svg {
    color: var(--black);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const EventsBox = styled.div`
  display: none;

  @media (min-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 50%;

    h2,
    span {
      color: var(--black);
    }

    h2 {
      border-bottom: 2px dashed transparent;
      cursor: pointer;
      font-family: var(--main-font);
      font-size: 18px;
    }

    h2:hover {
      border-bottom: 2px dashed var(--blue2);
    }

    span {
      background-color: var(--light-orange);
      border-radius: 100%;
      color: var(--white0);
      font-family: var(--main-font);
      font-size: 12px;
      font-style: italic;
      font-weight: 700;
      margin: 8px 0px;
      padding: 4px 7px;
      position: absolute;
      top: 15px;
    }
  }
`;
