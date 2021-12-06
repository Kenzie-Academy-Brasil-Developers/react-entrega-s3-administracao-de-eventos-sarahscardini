import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  --black: #241913;
  --blue1: #5DBEE7;
  --blue2: #68d0f6;
  --green1: #9FD6B7;
  --green2: #B8E1CA;
  --green3: #EFF8F3;
  --grey1: #9F9F9F;
  --grey2: #E3E3E3;
  --light-orange: #FEAD85;
  --light-peach: #FFF1EA;
  --main-font: 'Raleway', sans-serif;
  --pink: #FAA9A9;
  --purple: #A37BF7;
  --white0: #FFFFFF;
  --white1: whitesmoke;
  --yellow1: #FFDB42;
  --yellow2: #F6C35C;
  --yellow3: #F9F3E3;
}

body{
  background-color: var(---white0); 
}

.Toastify__toast-container{
  font-family: var(--main-font);
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  width: fit-content;
}

.Toastify__toast{
  border-radius: 8px;
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #b3d9e7 transparent;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #b3d9e7;
    border-radius: 8px;
    border: 2px solid transparent;
  }
`;
