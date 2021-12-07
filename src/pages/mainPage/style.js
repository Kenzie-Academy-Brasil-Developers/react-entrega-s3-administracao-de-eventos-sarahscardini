import styled from "styled-components";

export const Container = styled.div`
  .buttonsBox {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    margin: 0 auto;
    margin-block: 15px 35px;
    max-width: 300px;
  }
  
  .lineArrow{
    width: 10px;
  }

  .toTopBtn {
    border: none;
    color: transparent;
    height: 0;
    margin: 0;
    padding: 0;
    width: 0;
  }

  .toTopBtn svg {
    background-color: var(--light-orange);
    border-radius: 100%;
    border: 2px solid var(--black);
    bottom: 20px;
    color: var(--black);
    cursor: pointer;
    font-size: 30px;
    position: fixed;
    right: 20px;
    z-index: 2;
  }

  .toTopBtn svg:hover {
    animation: moving 2s linear infinite;
  }

  @media (min-width: 768px) {
    .toTopBtn svg {
      font-size: 45px;
    }
  }

  @keyframes moving {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(7px);
    }
  }
`;
