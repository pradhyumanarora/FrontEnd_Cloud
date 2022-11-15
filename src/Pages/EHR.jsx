import React from 'react';
import axios from 'axios';
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    MenuItem,Grid, Paper,
    CssBaseline,
  RadioGroup,
  FormLabel,
  FormGroup,
  FormControl,
  FormControlLabel, TextField
  } from "@material-ui/core";
  import {Link} from 'react-router-dom';
  import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
  import MenuIcon from "@material-ui/icons/Menu";
import { accordionSummaryClasses, Avatar } from "@mui/material";
  import { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
import { ClassNames } from '@emotion/react';
import Navbar from '../components/Navbar'
import { LaptopWindows } from '@material-ui/icons';





const useStyles = makeStyles((theme) => {
    return ({
        paper: {
            width: '40vw',
            justifyContent: "center",
           
        },
        heading: {
            display: "flex",
            marginTop: "10%",
            color: "#06283D",
            // fontSize: "100%",
            fontFamily: "Arvo, serif",
            fontSize: "36px",
        },
        grid2: {
            padding: "0% 15%",
            fontSize: "20px",
            display: "flex",
            flexDirection: "column",
            
        },
        grid3: {
            width: "90vw",
            marginLeft: "8vw",
        },
        grid1: {
            paddingTop: "10%",
            paddingBottom: "6%",
            fontSize: "3vw",
            fontFamily:"Times New Roman",
            textAlign:"center",
            flexDirection:"column",
            lineHeight:"1.5"
        },
        form: {
            position: "absolute",
            left: "25vw",
          padding: "2% 5% 0% 0%" ,
          fontWeight: "bold",
        }
    });
});
const EHR = () => {
  const username = window.localStorage.getItem('username');
    const classes = useStyles();
    const [URL, setURL] = useState("");
    const [notes, setNotes] = useState("");
    const [EHRdatum,setEHRdatum] = useState([]);
    const handleURL = (e) => {
        setURL(e);
    };
    const handleNotes = (e) => {
        setNotes(e);
    };
    const handleUpdate = (e) => {
      var payload = {
      "patientUsername":username,
      "ehr": [{"description":notes,"link":URL}]}
      axios.post("https://ehr-service.loca.lt/api/ehr/create",payload)
      .then(res => {console.log()});
      window.location.reload();
    }

    const handleGo = (param) => {
      window.open(param,'_blank');
    }

    useEffect(() => {
      axios.post("https://ehr-service.loca.lt/api/ehr/get",{
        "patientUsername":username
      })
      .then(res => {console.log(res.data.ehrList);
      setEHRdatum(res.data.ehrList)});
    },[]);
  return (
    <>
    <Navbar></Navbar>
      <Grid className={classes.grid1} container justify="center" >
        <div>Electronic Health Record</div>
      </Grid>
      <Grid className={classes.grid2} container>
            <div>Upload New Document</div>               
    </Grid>
    <Grid style={{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"5vh"}} container>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>URL: </Typography>
            <TextField className={classes.textField}
                    id="URL"
                    label="URL"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={URL}
                    onChange={(e) => {
                        handleURL(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Notes: </Typography>
            <TextField className={classes.textField}
                    id="notes"
                    label="Notes"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={notes}
                    onChange={(e) => {
                        handleNotes(e.target.value);
                    }}
                />
        </Grid>
        <Grid style={{padding:"2%"}} container justify="center" >
        <Button variant="contained" color="primary" onClick={handleUpdate}>
        Upload
        </Button>
        </Grid>
    </Grid>
    <Grid style={{marginBottom:"5%",padding:"0% 20%"}} container justify="center" >
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="center"><span style={{fontSize:18}}><b>Notes</b></span></TableCell>
            <TableCell align="center"><span style={{fontSize:18}}><b>Document</b></span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {EHRdatum.map((row) => (
            <TableRow>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center"><Button onClick={ () => handleGo(row.link)}><span style={{color:"purple",fontWeight:"bold"}}>Open</span></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
    
        
    </>
  )
}

export default EHR
