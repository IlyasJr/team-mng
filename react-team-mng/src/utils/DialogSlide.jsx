import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './utils.css'
import AppButton from './AppButton';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function DialogSlide({title,children}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppButton text={"Add Task"} onClick = {handleClickOpen}/>
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <DialogTitle className='dialog-slide'>{title}</DialogTitle>
        <DialogContent className='dialog-slide'>
        {children}
        </DialogContent>
      </Dialog>
    </div>
  );
}
