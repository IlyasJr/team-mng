import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './utils.css'
import { Context } from '../context/AppContext';
import AppButton from './AppButton';

const toLeft = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function DialogSlide({title,action,children}) {
  let {handleClose, open, openTask, setOpenTask} = React.useContext(Context)

  return (
    <div>
      <Dialog
        fullWidth = {action === 'add' ? true : false}
        fullScreen = {action === 'update' ? true : false}
        open={action === 'add' ? open : openTask}
        TransitionComponent={toLeft}
        onClose={action === 'add' ? handleClose : () => setOpenTask(false)}
      >
        {action === 'add' ? <DialogTitle className='dialog-title'>{title}</DialogTitle> : ''}
        <DialogContent className='dialog-slide'>
        {children}
        </DialogContent>
        {action === 'update' 
        ?
        <div className='dialog-footer'>
        <AppButton text = 'Back to tasks list' onClick = {() => setOpenTask(false)}/>
        <AppButton text = 'Save'/>
        </div> : ''}
      </Dialog>
    </div>
  );
}
