import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import {styled, alpha,InputBase,Grid,Avatar,Button,Typography,Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow} from '@material-ui/core';
function createData(
    name,
    specialization,
  ) {
    return { name,specialization};
  }
  const rows = [
    createData('Dr. Ankana','Cardiologist'),
    createData('Dr. Biswadeep','Oncologist'),
  ];
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
const Body = () => {
  return (
    <>
    <Grid container justify="center" style={{padding:'3%'}}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{width:'80px',height:'80px',margin:'0% 5% 0% 0%'}}/>
           
     <Paper elevation={0} style={{fontSize:'12px',width:'50vw'}}>
        <div><b>Patient ID:</b> 1234 </div>
        <div><b>Patient Name:</b> Lorem Ipsum</div>
        <div><b>Blood Group:</b> O+ </div>
        <div><b>DOB:</b> 09-12-2000</div>
     </Paper>
    </Grid>
    
    <Typography style={{fontWeight:'bold',margin:'0% 20%'}}>Scheduled Appointments</Typography>
    <Paper style={{borderRadius:'10px',height:'50px',margin:'0% 20% 0.5% 20%',padding:'1% 1% 0% 1%'}}>
        <div style={{fontSize:'14px'}}><b>Dr. Akanksha</b></div>
        <div style={{fontSize:'12px',float:'left'}}>General Physician</div>
        <div style={{fontSize:'12px',float:'right'}}>21/10/2022 18:00:00 IST</div>
    </Paper>
    <Typography style={{fontWeight:'bold',margin:'1% 20% 0% 20%'}}>Find a Doctor</Typography>
    <Grid container justify="center" >
    <Search style={{border:'1px solid black',width:'30vw'}}>
            <SearchIconWrapper>
            
            </SearchIconWrapper>
            <IconButton>
                <SearchIcon />
                </IconButton>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    </Grid>
    <TableContainer component={Paper} style={{margin:'2% 20% 0.5% 20%',width:'60vw'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"><b>Doctor's Name</b></TableCell>
            <TableCell align="center"><b>Specialization</b></TableCell>
            <TableCell align="center"><b>Book Appointment&nbsp;</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.specialization}</TableCell>
              <TableCell align="center"><Button variant="contained" style={{backgroundColor:'red',color:'yellow'}}>Book Now</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    
  )
}

export default Body
