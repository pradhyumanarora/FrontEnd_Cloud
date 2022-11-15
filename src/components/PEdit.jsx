import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
    IconButton,
    Drawer,
    Link,
    MenuItem, Grid, Paper,
    CssBaseline,
  RadioGroup,
  FormLabel,
  FormGroup,
  FormControl,
  FormControlLabel, TextField
  } from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@mui/material";
  import { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
import { ClassNames } from '@emotion/react';
import axios from 'axios';


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
        grid3: {
            width: "50vw",
            marginLeft: "15vw",
        },
        grid1: {
            paddingTop: "10%",
            paddingBottom: "2%",
            fontSize: "3vw",
            fontFamily: "Times New Roman",
        },
        form: {
            position: "absolute",
            left: "32vw",
            padding: "2% 5% 0% 0%",
            fontWeight: "bold",
        }
    });
});
const PEdit = () => {
    const username = window.localStorage.getItem('username');
    const classes = useStyles();

    const [photoURL, setPhotoURL] = useState("https://s3-alpha-sig.figma.com/img/8b15/e6f1/f05a663a6ac1333274ede5ed28bc2b10?Expires=1668384000&Signature=CGenkQAnhJFP5dTol7UqdZf0ttIjJyOxrCl1UwXP-1xG2OCyuWTz5Ph5-jBrOT-eQOtl7jHi0IIPVFHX0X0aiiYRO8X6rTPOd-iw5vbsyPqgnOzgo4lyR9ulebn7hl3-mtNYtljlEKAALLwdHs49qDeNgJC2ODDgIzXq~nNPBT1t0e1PjngCaIwVp~xH9SLGgwGnX0fjyIxQ~gk1jrWcyz8~K8EGGn235Ontv6thc~T9CBlP-mfYgsc2gLoP90g3QdHkaQ4CVWEd92BuAoQvFwqN-PXY6ZqK60sJUyeDFeng~xtL2DWhv~4Wt9t~nNK-lcy9EZAi1WxfKr8x16EJgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [email, setEmail] = useState("");

    const [TphotoURL, setTphotoURL] = useState("https://s3-alpha-sig.figma.com/img/8b15/e6f1/f05a663a6ac1333274ede5ed28bc2b10?Expires=1668384000&Signature=CGenkQAnhJFP5dTol7UqdZf0ttIjJyOxrCl1UwXP-1xG2OCyuWTz5Ph5-jBrOT-eQOtl7jHi0IIPVFHX0X0aiiYRO8X6rTPOd-iw5vbsyPqgnOzgo4lyR9ulebn7hl3-mtNYtljlEKAALLwdHs49qDeNgJC2ODDgIzXq~nNPBT1t0e1PjngCaIwVp~xH9SLGgwGnX0fjyIxQ~gk1jrWcyz8~K8EGGn235Ontv6thc~T9CBlP-mfYgsc2gLoP90g3QdHkaQ4CVWEd92BuAoQvFwqN-PXY6ZqK60sJUyeDFeng~xtL2DWhv~4Wt9t~nNK-lcy9EZAi1WxfKr8x16EJgw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
    const [Tname, setTName] = useState("");
    const [Tdob, setTDOB] = useState("");
    const [Tgender, setTGender] = useState("");
    const [TbloodGroup, setTBloodGroup] = useState("");
    const [Temail, setTEmail] = useState("");


    const [photoURLError, setPhotoURLError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [dobError, setDOBError] = useState(false);
    const [genderError, setGenderError] = useState(false);
    const [bloodGroupError, setBloodGroupError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const handlePhotoURL = (e) => {
        if (photoURLError == true && e.length > 0) {
            setPhotoURLError(false);
        }
        setPhotoURL(e);
    };
    const handleName = (e) => {
        if (nameError == true && e.length > 0) {
            setNameError(false);
        }
        setName(e);
    };
    const handleDOB = (e) => {
        if (dobError == true && e.length > 0) {
            setDOBError(false);
        }
        setDOB(e);
    };
    const handleGender = (e) => {
        if (genderError == true && e.length > 0) {
            setGenderError(false);
        }
        setGender(e);
    };
    const handleBloodGroup = (e) => {
        if (bloodGroupError == true && e.length > 0) {
            setBloodGroupError(false);
        }
        setBloodGroup(e);
    };
    const handleEmail = (e) => {
        if (emailError == true && e.length > 0) {
            setEmailError(false);
        }
        setEmail(e);
    };

    const handleUpdate = () => {
        //axios POST request to Update endpoint of server
        axios.post("https://core-service.loca.lt/api/patient/update",{
            "username":username,
            "name": name,
            "dob": dob,
            "email": email,
            "gender": gender,
            "photo_url": photoURL,
            "blood_group":bloodGroup,
        })
        .then(res => {
            window.location.reload();
        })
    };

    useEffect(() => {
        axios.post("https://core-service.loca.lt/api/patient/get",{"username":username})
        .then(res => {
            var birth = new Date(res.data.dob);
            var current = new Date();
            var age = current.getYear() - birth.getYear();
            setTphotoURL(res.data.photo_url);
            setTName(res.data.name);
            setTDOB(age);
            setTGender(res.data.gender);
            setTBloodGroup(res.data.blood_group);
            setTEmail(res.data.email);

            setPhotoURL(res.data.photo_url);
            setName(res.data.name);
            setDOB(res.data.dob);
            setGender(res.data.gender);
            setBloodGroup(res.data.blood_group);
            setEmail(res.data.email);
        });
    },[]);

  return (
    <>
      <Grid className={classes.grid1} container justify="center" >
        Edit Profile
      </Grid>
        <Grid className={classes.grid2} container justify="center" >
        <Avatar alt="Remy Sharp" src={TphotoURL} style={{width:'10vw',height:'10vw',margin:'-0.5% 4% 0% 0%'}}/>
           
           <Paper elevation={0} style={{fontSize:'20px',width:'30vw',lineHeight:'1.8'}}>
              <div style={{fontSize:'25px'}}><b>{Tname}</b></div>
              <div><b>Age: </b>{Tdob}&emsp;&emsp;<b>Email: </b>{Temail}</div>
              <div><b>Gender: </b>{Tgender}&emsp;&emsp;<b>Blood Group: </b>{TbloodGroup}</div>
            </Paper>
            
        </Grid>
        <Grid style={{padding:"2%"}} container justify="center" >
        <Button variant="contained" color="primary" style={{marginBottom:"4%"}} onClick={
                        handleUpdate
                    } >
        Update
        </Button>
       </Grid>
       <Grid style={{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"20vh"}} container>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form} style={{marginTop:"-1.5%"}} >Photo URL: </Typography>
            <TextField className={classes.textField}
                    error={photoURLError}
                    id="photo-URL"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={photoURL}
                    onChange={(e) => {
                        handlePhotoURL(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form} style={{marginTop:"-1.5%"}}>Name: </Typography>
            <TextField className={classes.textField}
                    error={nameError}
                    id="name"
                   
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={name}
                    onChange={(e) => {
                        handleName(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form} style={{marginTop:"-1.5%"}}>DoB: </Typography>
            <TextField className={classes.textField}
                    error={dobError}
                    id="DOB"
                    
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={dob}
                    onChange={(e) => {
                        handleDOB(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form} style={{marginTop:"-1.5%"}}>Gender: </Typography>
            <TextField className={classes.textField}
                    error={genderError}
                    id="gender"
                    
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={gender}
                    onChange={(e) => {
                        handleGender(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form} style={{marginTop:"-1.5%"}}>Blood Group: </Typography>
            <TextField className={classes.textField}
                    error={bloodGroupError}
                    id="bloodGroup"
                 
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={bloodGroup}
                    onChange={(e) => {
                        handleBloodGroup(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form} style={{marginTop:"-1.5%"}}>Email: </Typography>
            <TextField className={classes.textField}
                    error={emailError}
                    id="email"
                
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={email}
                    onChange={(e) => {
                        handleEmail(e.target.value);
                    }}
                />
        </Grid>
       </Grid>
    </>
  )

}

export default PEdit
