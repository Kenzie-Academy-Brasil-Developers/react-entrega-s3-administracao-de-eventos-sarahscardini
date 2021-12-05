import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/system";

export const StyledDialog = styled(Dialog)`
  .css-yiavyu-MuiBackdrop-root-MuiDialog-backdrop {
    background-color: #00000014;
  }

  .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    box-shadow: 0 0 10px 0px #0000004f;
    background-color: var(--white1);
  }

  h2 {
    color: var(--purple);
    font-size: 1.1rem;
    font-weight: 700;
  }

  h2,
  span {
    font-family: var(--main-font);
    text-align: center;
  }

  .css-bshv44-MuiButtonBase-root-MuiListItem-root:hover {
    background-color: #af4fcf17;

    span {
      color: var(--purple);
      font-weight: 500;
    }
  }
`;
