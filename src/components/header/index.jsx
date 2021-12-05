import React, { useState, useContext } from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { FiMenu } from "react-icons/fi";
import { useHistory } from "react-router";
import { GraduationContext } from "../../providers/graduation";
import { PartyContext } from "../../providers/party";
import { WeddingContext } from "../../providers/wedding";
import { Container, BurguerMenu, EventsBox } from "./style";
import { styled } from "@mui/material/styles";

const ITEM_HEIGHT = 48;

const Header = () => {
  const { graduationDrinks } = useContext(GraduationContext);
  const { partyDrinks } = useContext(PartyContext);
  const { weddingDrinks } = useContext(WeddingContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const history = useHistory();
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const goToGraduation = () => {
    handleClose();
    history.push("/graduation");
  };

  const goToWedding = () => {
    handleClose();
    history.push("/wedding");
  };

  const goToParty = () => {
    handleClose();
    history.push("/party");
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
      fontFamily: "Roboto",
    },
  }));

  return (
    <Container>
      <LightTooltip title="Main Page">
        <h1 onClick={() => history.push("/")}>
          The Good Stuff
          <span role="img" aria-label="sheep" className="emoji">
            🥃
          </span>
        </h1>
      </LightTooltip>

      <BurguerMenu>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls="long-menu"
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FiMenu />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          <MenuItem onClick={goToGraduation}>Graduation</MenuItem>
          <MenuItem onClick={goToWedding}>Wedding</MenuItem>
          <MenuItem onClick={goToParty}>Party</MenuItem>
        </Menu>
      </BurguerMenu>

      <EventsBox>
        <LightTooltip title="Graduation List">
          <h2 onClick={goToGraduation} className="graduation">
            Graduation
            {graduationDrinks.length > 0 ? (
              <span>{graduationDrinks.length}</span>
            ) : (
              ""
            )}
          </h2>
        </LightTooltip>
        <LightTooltip title="Wedding List">
          <h2 onClick={() => history.push("/wedding")} className="wedding">
            Wedding
            {weddingDrinks.length > 0 ? (
              <span>{weddingDrinks.length}</span>
            ) : (
              ""
            )}
          </h2>
        </LightTooltip>
        <LightTooltip title="Party List">
          <h2 onClick={() => history.push("/party")} className="party">
            Party
            {partyDrinks.length > 0 ? <span>{partyDrinks.length}</span> : ""}
          </h2>
        </LightTooltip>
      </EventsBox>
    </Container>
  );
};

export default Header;
