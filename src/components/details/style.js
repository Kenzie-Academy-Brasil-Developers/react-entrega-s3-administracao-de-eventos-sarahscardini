import styled from "styled-components";

export const Content = styled.section`
  color: var(--black);
  font-family: var(--main-font);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.00938em;
  line-height: 1.5;

  .imgBox {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
  }

  em {
    margin: 8px 0;
  }

  img {
    height: auto;
    width: 120px;
  }

  ul {
    line-height: 22px;
    margin: 10px 0;
  }

  li {
    margin: 5px 0;
  }

  .ingredientsBox {
    margin: 10px 0;

    li {
      list-style: inside;
      margin: 5px;
    }
  }

  h3 {
    font-size: 15px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;

    img {
      height: 350px;
      width: auto;
    }
  }
`;
