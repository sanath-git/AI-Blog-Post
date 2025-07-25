import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Icon from "@mui/material/Icon";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from 'react-router-dom';
import { deleteBlog } from "../../services/blogService";

function DeleteButton({
  children = "Delete",
  icon = true,
  open: controlledOpen,
  setOpen: setControlledOpen,
  blogId,
  ...props
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const navigate = useNavigate();
  const open = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;
  const setOpen =
    setControlledOpen !== undefined ? setControlledOpen : setUncontrolledOpen;

  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

    const handleConfirm = async () => {
    // Call the delete service
    await deleteBlog(blogId);
    setOpen(false);
    // Reroute to the list page
    navigate('/');
  };

  return (
    <>
      {icon ? (
        <Icon
          color="error"
          component={DeleteIcon}
          onClick={handleClick}
          size="small"
          {...props}
        >
          {icon}
        </Icon>
      ) : (
        <Button
          variant="contained"
          color="error"
          onClick={handleClick}
          {...props}
        >
          {children}
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xs"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            px: 2,
            py: 1.5,
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
          Confirm Deletion
        </DialogTitle>

        <DialogContent sx={{ mb: 2 }}>
          <p className="text-gray-700 text-sm">
            Are you sure you want to permanently delete this blog post? This
            action cannot be undone.
          </p>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="inherit"
            sx={{ textTransform: "none" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            variant="contained"
            color="error"
            sx={{ textTransform: "none" }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

DeleteButton.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node,
  icon: PropTypes.node,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  blogId: PropTypes.string.isRequired,
};

export default DeleteButton;
