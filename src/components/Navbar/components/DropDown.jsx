import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Divider, ListItemIcon } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";
import { Context } from "../../../Context/Context";

const useStyles = makeStyles((theme) => ({
  menuStyle: {
    "&.MuiButtonBase-root, &.MuiMenuItem-root": {
      // padding: 0,
      padding: "0 10px",
      lineHeight: 1,

      // margin: 0,
      // color: "blue",
    },
  },
}));

export default function DropDown() {
  const { selectedCategory, setSelectedCategory } = React.useContext(Context);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {selectedCategory}
          <ListItemIcon>
            <KeyboardArrowDownIcon fontSize="small" />
          </ListItemIcon>
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <MenuItem
                      onClick={() => {
                        setSelectedCategory("All");
                        handleClose();
                      }}
                      className={classes.menuStyle}
                    >
                      All
                    </MenuItem>
                    <Divider sx={{ marginTop: "3px", marginBottom: "3px" }} />
                    <MenuItem
                      onClick={() => {
                        setSelectedCategory("men's");
                        handleClose();
                      }}
                      className={classes.menuStyle}
                    >
                      Mens
                    </MenuItem>
                    <Divider sx={{ marginTop: "3px", marginBottom: "3px" }} />
                    <MenuItem
                      onClick={() => {
                        setSelectedCategory("women's");
                        handleClose();
                      }}
                      className={classes.menuStyle}
                    >
                      Women
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}