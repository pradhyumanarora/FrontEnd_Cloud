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
  FormControlLabel, TextField,Tabs,Tab,Box
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
        },
        tab: {
            backgroundColor: "purple",
            margin: "0% 1%",
            borderRadius: "10px",
        },
        dropdownContainer: {
            textAlign: "left",
            border: "1px solid #ccc",
            position: "relative",
            borderRadius: "5px",
        }

        , dropdownInput: {
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            userSelect: "none",
        }
    });
});
const DEdit = () => {
    const username = window.localStorage.getItem('username');
    const classes = useStyles();

    const [displayPhotoURL, setDisplayPhotoURL] = useState("https://s3-alpha-sig.figma.com/img/9c75/b113/fcd4404eaf49b8a9999e900d320a3dd3?Expires=1668384000&Signature=cvufgVu5p7uMn~nN-nnSNKRGK97j~uNWC~LeAT4~ktkfiSCLhvcHBe4IgNCT-jjfKMMcAEASXlLHhc-eOD7YbJwwLACAI49gityQV4C-yQoSEutbe0EjaNlg~npsTcNYFmWFsBc2ZTa2wPgzW5HSh9WCEIFyvstol85hLGxji5rJx6QOJ6V6tICEV~QND-tk-lueumgnAcgLYwKgF5gZOnSDdcOhv0NT63xFnzN4NJubFq5gt5sq15A4XZDLTJ44LZTnu32p3hlmxy7UjIOXaAMDcm~MwkC8rpjGe2h9jYSU3gbl3wVqHVyT2q5KtRXv6TseDZyoQJ7~zsxbU-1XTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
    const [displayName, setDisplayName] = useState("hello");
    const [displayDob, setDisplayDOB] = useState("05/01/2002");
    const [displayGender, setDisplayGender] = useState("tbd");
    const [displayEmail, setDisplayEmail] = useState("");
    const [displayContact, setDisplayContact] = useState("");
    const [displayExperience, setDisplayExperience] = useState("");
    const [displayQualification, setDisplayQualification] = useState("");
    const [displayPublicDescription, setDisplayPublicDescription] = useState("");
    const [displaySpecialisation, setDisplaySpecialisation] = useState();
    const [displayRegisterNo, setDisplayRegisterNo] = useState();

    const [photoURL, setPhotoURL] = useState("https://s3-alpha-sig.figma.com/img/9c75/b113/fcd4404eaf49b8a9999e900d320a3dd3?Expires=1668384000&Signature=cvufgVu5p7uMn~nN-nnSNKRGK97j~uNWC~LeAT4~ktkfiSCLhvcHBe4IgNCT-jjfKMMcAEASXlLHhc-eOD7YbJwwLACAI49gityQV4C-yQoSEutbe0EjaNlg~npsTcNYFmWFsBc2ZTa2wPgzW5HSh9WCEIFyvstol85hLGxji5rJx6QOJ6V6tICEV~QND-tk-lueumgnAcgLYwKgF5gZOnSDdcOhv0NT63xFnzN4NJubFq5gt5sq15A4XZDLTJ44LZTnu32p3hlmxy7UjIOXaAMDcm~MwkC8rpjGe2h9jYSU3gbl3wVqHVyT2q5KtRXv6TseDZyoQJ7~zsxbU-1XTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [gender, setGender] = useState("");
    const [spec, setSpec] = useState("");
    const [reg, setReg] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [experience, setExperience] = useState("");
    const [qualification, setQualification] = useState("");
    const [publicDescription, setPublicDescription] = useState("");
    const [slots, setSlots] = useState([0,0,0,0,0,0,0]);
    const [mon,setMon] = useState(0);
    const [tue,setTue] = useState(0);
    const [wed,setWed] = useState(0);
    const [thurs,setThurs] = useState(0);
    const [fri,setFri] = useState(0);
    const [sat,setSat] = useState(0);
    const [sun,setSun] = useState(0);


    const [TphotoURL, setTphotoURL] = useState("");
    const [Tname, setTName] = useState("");
    const [Treg, setTReg] = useState("");
    const [Tspec, setTSpec] = useState("");
    const [Tdob, setTDOB] = useState("");
    const [Tgender, setTGender] = useState("");
    const [Temail, setTEmail] = useState("");
    const [Tcontact, setTContact] = useState("");
    const [Texperience, setTExperience] = useState("");
    const [Tqualification, setTQualification] = useState("");
    const [TpublicDescription, setTPublicDescription] = useState("");
    const [Tslots, setTSlots] = useState([]);

    const [photoURLError, setphotoURLError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const [dobError, setDOBError] = useState(false);
    const [genderError, setGenderError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [contactError, setContactError] = useState(false);
    const [experienceError, setExperienceError] = useState(false);
    const [qualificationError, setQualificationError] = useState(false);
    const [publicDescriptionError, setPublicDescriptionError] = useState(false);

    const [tabIndex, setTabIndex] = useState(0);

    const handleMon = (e) => {
        setMon(e);
    }

    const handleTue = (e) => {
        setTue(e);
    }

    const handleWed = (e) => {
        setWed(e);
    }

    const handleThurs = (e) => {
        setThurs(e);
    }

    const handleFri = (e) => {
        setFri(e);
    }

    const handleSat = (e) => {
        setSat(e);
    }

    const handleSun = (e) => {
        setSun(e);
    }
    
    const handleMonSubmit = () => {
        slots[0] = mon;
        console.log(slots);
    }
    
    const handleTueSubmit = () => {
        slots[1] = tue;
        console.log(slots);
    }

    const handleWedSubmit = () => {
        slots[2] = wed;
        console.log(slots);
    }

    const handleThursSubmit = () => {
        slots[3] = thurs;
        console.log(slots);
    }

    const handleFriSubmit = () => {
        slots[4] = fri;
        console.log(slots);
    }

    const handleSatSubmit = () => {
        slots[5] = sat;
        console.log(slots);
    }

    const handleSunSubmit = () => {
        slots[6] = sun;
        console.log(slots);
    }

    const handleTabChange = (event, newTabIndex) => {
        setTabIndex(newTabIndex);
    }

    const handlePhotoURL = (e) => {
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
    const handleEmail = (e) => {
        if (emailError == true && e.length > 0) {
            setEmailError(false);
        }
        setEmail(e);
    };
    const handleContact = (e) => {
        if (contactError == true && e.length > 0) {
            setContactError(false);
        }
        setContact(e);
    };
    const handleExperience = (e) => {
        if (experienceError == true && e.length > 0) {
            setExperienceError(false);
        }
        setExperience(e);
    };
    const handleQualification = (e) => {
        if (qualificationError == true && e.length > 0) {
            setQualificationError(false);
        }
        setQualification(e);
    };
    const handleSpecialisation = (e) => {
        setSpec(e);
    };
    const handleRegistration = (e) => {
        setReg(e);
    };
    const handlePublicDescription = (e) => {
        if (contactError == true && e.length > 0) {
            setPublicDescriptionError(false);
        }
        setPublicDescription(e);
    };
    const handleUpdate = () => {
        //axios POST request to Update endpoint of server
        axios.post("https://core-service.loca.lt/api/doctor/update",{
            "username":username,
            "name": name,
            "reg_no": "123",
            "specialisation": spec,
            "dob": dob,
            "experience": experience,
            "email": email,
            "contact": "88677889898",
            "qualification": qualification,
            "gender": gender,
            "description": publicDescription,
            "photo_url": photoURL,
            "slots": slots
        })
        .then(res => {
            alert("Updated Availability Slots");
            window.location.reload();
        })
        //async delay of 100 ms
        //axios GET request to Get endpoint of server

    };

    useEffect(() => {
        axios.post("https://core-service.loca.lt/api/doctor/get",{"username":username})
        .then(res => {
            setTphotoURL(res.data.photo_url);
            setTName(res.data.name);
            setTReg(res.data.reg_num);
            setTSpec(res.data.specialisation);
            setTDOB(res.data.dob);
            setTGender(res.data.gender);
            setTEmail(res.data.email);
            setTExperience(res.data.experience);
            setTQualification(res.data.qualification);
            setTSlots(res.data.slots);
            setTPublicDescription(res.data.description);
            setTSlots(res.data.slots);

            setPhotoURL(res.data.photo_url);
            setName(res.data.name);
            setReg(res.data.reg_num);
            setSpec(res.data.specialisation);
            setDOB(res.data.dob);
            setGender(res.data.gender);
            setEmail(res.data.email);
            setExperience(res.data.experience);
            setQualification(res.data.qualification);
            setSlots(res.data.slots);
            setPublicDescription(res.data.description);
            setSlots(res.data.slots);
        });
    },[]);


  return (
    <>
      <Grid className={classes.grid1} container justify="center" >
        Edit Profile
      </Grid>
        <Grid className={classes.grid2} container justify="center" >
        <Avatar alt="Remy Sharp" src={TphotoURL} style={{width:'10vw',height:'10vw',margin:'2% 6% 0% 0%'}}/>
           
           <Paper elevation={0} style={{fontSize:'15px',width:'30vw',lineHeight:'1.8'}}>
              <div style={{fontSize:'25px'}}><b>{Tname}</b></div>
              <div><b>{Tqualification} {Tspec}</b></div>
              <div><b>Experience: </b>{Texperience}</div>
              <div><b>Gender: </b>{Tgender}</div>
              <div><b>Description: </b><justify>{TpublicDescription}</justify></div>
            </Paper>
            
        </Grid>
        <Grid style={{padding:"2%"}} container justify="center" >
        <Button variant="contained" color="primary" onClick={handleUpdate} >
        Update
        </Button>
       </Grid>
       <Grid style={{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:"10vh"}} container>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Photo URL: </Typography>
            <TextField className={classes.textField}
                    error={photoURLError}
                    id="photo-URL"
                    label="Photo URL"
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
            <Typography className={classes.form}>Name: </Typography>
            <TextField className={classes.textField}
                    error={nameError}
                    id="name"
                    label="Name"
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
            <Typography className={classes.form}>DoB: </Typography>
            <TextField className={classes.textField}
                    error={dobError}
                    id="DOB"
                    label="DoB"
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
            <Typography className={classes.form}>Gender: </Typography>
            <TextField className={classes.textField}
                    error={genderError}
                    id="gender"
                    label="Gender"
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
            <Typography className={classes.form}>Email: </Typography>
            <TextField className={classes.textField}
                    error={emailError}
                    id="email"
                    label="Email"
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
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Contact: </Typography>
            <TextField className={classes.textField}
                    error={contactError}
                    id="contact"
                    label="Contact"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={contact}
                    onChange={(e) => {
                        handleContact(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Experience: </Typography>
            <TextField className={classes.textField}
                    error={experienceError}
                    id="experience"
                    label="Experience"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={experience}
                    onChange={(e) => {
                        handleExperience(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Qualification: </Typography>
            <TextField className={classes.textField}
                    error={experienceError}
                    id="qualification"
                    label="Qualification"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={qualification}
                    onChange={(e) => {
                        handleQualification(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Specialisation: </Typography>
            <TextField className={classes.textField}
                    id="specialisation"
                    label="Specialisation"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={spec}
                    onChange={(e) => {
                        handleSpecialisation(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Registration No.: </Typography>
            <TextField className={classes.textField}
                    id="registration"
                    label="Registration"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={reg}
                    onChange={(e) => {
                        handleRegistration(e.target.value);
                    }}
                />
        </Grid>
        <Grid className={classes.grid3} container justify="center">
            <Typography className={classes.form}>Public Description: </Typography>
            <TextField className={classes.textField}
                    error={experienceError}
                    id="publicDescription"
                    label="Public Description"
                    variant="standard"
                    style={{
                        display: "flex",
                       
                        justifySelf: "center",
                        width: "50%",
                    }}
                    value={publicDescription}
                    onChange={(e) => {
                        handlePublicDescription(e.target.value);
                    }}
                />
        </Grid>
       </Grid>
       <Grid style={{padding:"2%"}} container justify="center" >
       <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab className={classes.tab} style={{color:"white",fontWeight:"bold"}} label="Mon" />
          <Tab className={classes.tab} style={{color:"white",fontWeight:"bold"}} label="Tue" />
          <Tab className={classes.tab} style={{color:"white",fontWeight:"bold"}} label="Wed" />
          <Tab className={classes.tab} style={{color:"white",fontWeight:"bold"}}label="Thu" />
          <Tab className={classes.tab} style={{color:"white",fontWeight:"bold"}} label="Fri" />
          <Tab className={classes.tab} style={{color:"white",fontWeight:"bold"}} label="Sat" />
          <Tab className={classes.tab} style={{color:"white",fontWeight:"bold"}} label="Sun" />
        </Tabs>
        </Grid>
        <Grid style={{padding:"2%"}} container justify="center">
        {tabIndex === 0 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Available From</label>
          <select name='startTime' style={{marginRight: '9.5vw'}} value={mon} onChange={(e) => handleMon(e.target.value)} >
          <option value="0">Not Available</option>
              <option value="9">09:00 AM</option>
              <option value="10">10:00 AM</option>
              <option value="11">11:00 AM</option>
              <option value="12">12:00 PM</option>
              <option value="13">01:00 PM</option>
              <option value="14">02:00 PM</option>
              <option value="15">03:00 PM</option>
              <option value="16">04:00 PM</option>
              <option value="17">05:00 PM</option>
              <option value="18">06:00 PM</option>
          </select>
          <Button onClick={handleMonSubmit}><Typography>Update Slot</Typography></Button>
          </form>
        </Box>
        )}
        {tabIndex === 1 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Available From</label>
          <select name='startTime' style={{marginRight: '9.5vw'}} value={tue} onChange={(e) => handleTue(e.target.value)} >
              <option value="0">Not Available</option>
              <option value="9">09:00 AM</option>
              <option value="10">10:00 AM</option>
              <option value="11">11:00 AM</option>
              <option value="12">12:00 PM</option>
              <option value="13">01:00 PM</option>
              <option value="14">02:00 PM</option>
              <option value="15">03:00 PM</option>
              <option value="16">04:00 PM</option>
              <option value="17">05:00 PM</option>
              <option value="18">06:00 PM</option>
          </select>
          <Button onClick={handleTueSubmit}><Typography>Update Slot</Typography></Button>
          </form>
        </Box>
        )}
        {tabIndex === 2 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Available From</label>
          <select name='startTime' style={{marginRight: '9.5vw'}} value={wed} onChange={(e) => handleWed(e.target.value)} >
             <option value="0">Not Available</option>
              <option value="10">10:00 AM</option>
              <option value="11">11:00 AM</option>
              <option value="12">12:00 PM</option>
              <option value="13">01:00 PM</option>
              <option value="14">02:00 PM</option>
              <option value="15">03:00 PM</option>
              <option value="16">04:00 PM</option>
              <option value="17">05:00 PM</option>
              <option value="18">06:00 PM</option>
          </select>
          <Button onClick={handleWedSubmit}><Typography>Update Slot</Typography></Button>
          </form>
        </Box>
        )}
        {tabIndex === 3 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Available From</label>
          <select name='startTime' style={{marginRight: '9.5vw'}} value={thurs} onChange={(e) => handleThurs(e.target.value)} >
          <option value="0">Not Available</option>
              <option value="9">09:00 AM</option>
              <option value="10">10:00 AM</option>
              <option value="11">11:00 AM</option>
              <option value="12">12:00 PM</option>
              <option value="13">01:00 PM</option>
              <option value="14">02:00 PM</option>
              <option value="15">03:00 PM</option>
              <option value="16">04:00 PM</option>
              <option value="17">05:00 PM</option>
              <option value="18">06:00 PM</option>
          </select>
          <Button onClick={handleThursSubmit}><Typography>Update Slot</Typography></Button>
          </form>
        </Box>
        )}
        {tabIndex === 4 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Available From</label>
          <select name='startTime' style={{marginRight: '9.5vw'}} value={fri} onChange={(e) => handleFri(e.target.value)} >
          <option value="0">Not Available</option>
              <option value="9">09:00 AM</option>
              <option value="10">10:00 AM</option>
              <option value="11">11:00 AM</option>
              <option value="12">12:00 PM</option>
              <option value="13">01:00 PM</option>
              <option value="14">02:00 PM</option>
              <option value="15">03:00 PM</option>
              <option value="16">04:00 PM</option>
              <option value="17">05:00 PM</option>
              <option value="18">06:00 PM</option>
          </select>
          <Button onClick={handleFriSubmit}><Typography>Update Slot</Typography></Button>
          </form>
        </Box>
        )}
        {tabIndex === 5 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Available From</label>
          <select name='startTime' style={{marginRight: '9.5vw'}} value={sat} onChange={(e) => handleSat(e.target.value)} >
          <option value="0">Not Available</option>
              <option value="9">09:00 AM</option>
              <option value="10">10:00 AM</option>
              <option value="11">11:00 AM</option>
              <option value="12">12:00 PM</option>
              <option value="13">01:00 PM</option>
              <option value="14">02:00 PM</option>
              <option value="15">03:00 PM</option>
              <option value="16">04:00 PM</option>
              <option value="17">05:00 PM</option>
              <option value="18">06:00 PM</option>
          </select>
          <Button onClick={handleSatSubmit}><Typography>Update Slot</Typography></Button>
          </form>
        </Box>
        )}
        {tabIndex === 6 && (
          <Box>
          <form>
          <label style={{marginRight: '10vw',fontWeight:'bold'}} htmlFor='startTime'>Available From</label>
          <select name='startTime' style={{marginRight: '9.5vw'}} value={sun} onChange={(e) => handleSun(e.target.value)} >
          <option value="0">Not Available</option>
              <option value="9">09:00 AM</option>
              <option value="10">10:00 AM</option>
              <option value="11">11:00 AM</option>
              <option value="12">12:00 PM</option>
              <option value="13">01:00 PM</option>
              <option value="14">02:00 PM</option>
              <option value="15">03:00 PM</option>
              <option value="16">04:00 PM</option>
              <option value="17">05:00 PM</option>
              <option value="18">06:00 PM</option>
          </select>
          <Button onClick={handleSunSubmit}><Typography>Update Slot</Typography></Button>
          </form>
        </Box>
        )}
        </Grid>
    </>
  )
}

export default DEdit
