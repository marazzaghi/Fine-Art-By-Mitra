import React, { useSate } from 'react'
import {Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'

export default function CustomDialog(payload) {
  const {open, image} = payload
  const [dialogOpen, setDialogOpen] = useSate(true)
  
  const handleClose = () => {
    setDialogOpen(false)
  }
  return (
    <Dialog
      open={dialogOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <img src={image} alt={image.title} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}