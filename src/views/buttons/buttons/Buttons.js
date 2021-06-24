import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import {Paper,Grid, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField'




const Buttons = () => {
  return (
    <>
      <Grid container spacing={3}>
      <Grid item xs={12} >
          <Paper style={{height:"80vh"}}>
            <h2 style={{paddingLeft:"2%",paddingTop:"3%"}}>Create Project</h2>
            <form>
          <TextField id="outlined-basic" placeholder="project name" variant="outlined" size="small" style={{paddingLeft:"2%",paddingTop:"5%"}} />
            </form>
            <Button style={{marginLeft:"3%",marginTop:"5%"}} variant="contained" color="primary" >Create</Button>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default Buttons
