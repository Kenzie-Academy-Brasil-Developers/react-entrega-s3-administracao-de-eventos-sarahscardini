import styled from "styled-components";

export const Container = styled.div`
  background-color: inherit;
  border-radius: 10px;
  border: 2px solid var(--black);
  box-shadow: 0px 0px 6px 0px var(--grey2);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-block: 20px;
  padding: 10px;
  width: 80%;

  h2,
  h3 {
    font-family: var(--main-font);
  }

  h2 {
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 800;
    margin: 10px;
    text-align: center;
  }

  ul {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  li {
    align-items: center;
    background-color: inherit;
    border-radius: 8px;
    border: 2px dashed var(--black);
    display: flex;
    flex-direction: column;
    height: 210px;
    justify-content: space-around;
    margin: 10px;
    padding: 10px;
    width: 180px;
  }

  img {
    align-self: center;
    height: 80px;
    width: auto;
  }

  h3 {
    text-align: center;
  }

  .BtnBox {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    height: 80px;
    justify-content: space-evenly;
  }

  @media (min-width: 768px) {
    .BtnBox {
      flex-flow: row nowrap;
      margin: 0 auto;
      width: 400px;
    }
  }
`;
