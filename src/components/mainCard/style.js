import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 30px;

  ul {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  li {
    border-radius: 8px;
    border: 2px dashed var(--black);
    box-shadow: 0px 0px 4px 3px var(--white1);
    display: flex;
    flex-direction: column;
    height: 320px;
    justify-content: space-evenly;
    margin: 12px;
    padding: 10px;
    width: 200px;
  }

  li:hover {
    transform: scale(1.1);
  }

  img {
    align-self: center;
    height: 100px;
    width: auto;
    animation: 8s linear 2s infinite alternate moveABit;
  }

  h3,
  p,
  em {
    font-family: var(--main-font);
  }

  em {
    font-size: 12px;
  }

  h3 {
    font-size: 16px;
    margin-bottom: 8px;
    text-align: center;
  }

  p {
    font-size: 14px;
    margin: 4px 0;
  }

  .liText {
    line-height: 20px;
    margin: 10px 0;
  }

  strong,
  .volume {
    font-weight: 500;
  }

  .btnBox {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }

  button {
    margin: 0 2px;
  }

  @media (min-width: 768px) {
    ul {
      align-items: center;
      flex-flow: row wrap;
      justify-content: space-evenly;
    }

    li {
      height: 350px;
      width: 220px;
      padding: 12px;
    }

    img {
      height: 120px;
      width: auto;
    }

    h3 {
      font-size: 18px;
    }
  }

  @keyframes moveABit {
    from {
      transform: translate(10px);
      transform: rotate(-0.02turn);
    }
    to {
      transform: translate(-10px);
      transform: rotate(0.01turn);
    }
  }
`;
