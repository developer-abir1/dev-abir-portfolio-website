import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Portal from '@mui/base/Portal';
import { SxProps } from '@mui/system';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { Button } from '@mui/material';
export default function Accessibility() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'fixed',
    width: 400,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div>
        <Button
          variant="contained"
          sx={{
            borderRadius: 50,
            width: 40,
            height: 60,
            backgroundColor: '#D8B5FF',
            '&:hover': {
              backgroundColor: '#1EAE98',
            },
          }}
          onClick={handleClick}
        >
          <AccessibilityIcon />
        </Button>
        {open ? (
          <Portal>
            <Box style={styles}>
              <Button sx={{ backgroundImage: '' }}> Bg color1</Button>
              <Button>Bg color2</Button>
            </Box>
          </Portal>
        ) : null}
      </div>
    </ClickAwayListener>
  );
}
