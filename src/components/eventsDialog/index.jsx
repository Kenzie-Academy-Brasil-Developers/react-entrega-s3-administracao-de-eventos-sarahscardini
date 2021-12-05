import React, { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import { StyledDialog } from "./style";
import { GraduationContext } from "../../providers/graduation";
import { PartyContext } from "../../providers/party";
import { WeddingContext } from "../../providers/wedding";
import { toast } from "react-toastify";

const EventsDialog = ({ open, handleClose, item }) => {
  const { addToGraduation } = useContext(GraduationContext);
  const { addToPartyList } = useContext(PartyContext);
  const { addToWedding } = useContext(WeddingContext);

  const events = ["Graduation", "Wedding", "Party"];

  const onSuccess = (value) => {
    toast.success(`Item added to ${value} list!`);
    handleClose();
  };

  const handleListItemClick = (value, item) => {
    switch (value) {
      case "Graduation":
        addToGraduation(item);
        onSuccess(value);
        break;

      case "Wedding":
        addToWedding(item);
        onSuccess(value);
        break;

      case "Party":
        addToPartyList(item);
        onSuccess(value);
        break;

      default:
        toast.warn("Select an Event");
    }
  };

  return (
    <StyledDialog onClose={handleClose} open={open}>
      <DialogTitle>Select an event to add the drink:</DialogTitle>
      <List sx={{ pt: 0 }}>
        {events.map((event) => (
          <ListItem
            button
            onClick={() => handleListItemClick(event, item)}
            key={event}
          >
            <ListItemText primary={event} />
          </ListItem>
        ))}
      </List>
    </StyledDialog>
  );
};

export default EventsDialog;
