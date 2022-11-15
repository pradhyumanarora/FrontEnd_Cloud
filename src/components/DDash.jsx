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
    FormControlLabel, TextField, Tabs, Tab, Box
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {Avatar} from "@mui/material";
import {useState, useEffect} from "react";
import {Link as RouterLink} from "react-router-dom";
import {ClassNames} from '@emotion/react';
import {useNavigate} from 'react-router-dom';

import axios from 'axios';

const useStyles = makeStyles((theme) => {
    return ({
        paper: {
            padding: "2% 5%",
            borderLeft: "10px solid #33ccff",
            borderRadius: "10px",
            marginBottom: "1%",
        },
        heading: {
            display: "flex",
            // marginTop: "10%",
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
            marginBottom: "5%"
        },
        grid1: {
            paddingTop: "5%",
            paddingBottom: "5%",
            fontSize: "3vw",
            fontFamily: "Times New Roman",
        },
        grid3: {
            width: "50vw",
            padding: "0em 15em",
        },
        form: {
            position: "absolute",
            left: "32vw",
            padding: "2% 5% 0% 0%",
            fontWeight: "bold",
        },
        tab: {
            backgroundColor: "#400CCC",
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
    const navigate = useNavigate();
    const username = window.localStorage.getItem('username');
    const classes = useStyles();


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
    const [slots, setSlots] = useState([0, 0, 0, 0, 0, 0, 0]);
    const [mon, setMon] = useState(9);
    const [tue, setTue] = useState(9);
    const [wed, setWed] = useState(9);
    const [thurs, setThurs] = useState(9);
    const [fri, setFri] = useState(9);
    const [sat, setSat] = useState(9);
    const [sun, setSun] = useState(9);


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

    const [upcoming, setUpcoming] = useState([]);
    const [reqstatus,setReqstatus] = useState("Request");

    const handleRequest = (param) => {
        axios.post("https://core-service.loca.lt/api/appointment/updateRequest", {
        "id": param,
        "request": 1
      })
      .then(res => {console.log(res)});
      window.location.reload();
    }

    const handleView = (param) => {
        window.localStorage.setItem("document",param);
        navigate("/DocEHR")
    }

    const handleJoin = (param) => {
        window.open(param,"_blank");
    }

    useEffect(() => {
        axios.post("https://core-service.loca.lt/api/doctor/get", {"username": username})
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
        axios.post("https://core-service.loca.lt/api/doctorAppointment/get", {"doctorUsername": username})
            .then(
                res => {
                    axios.post("https://core-service.loca.lt/api/appointment/filter", {"appid": res.data.appointmentId})
                        .then(
                            resp => {
                                console.log(resp);
                                setUpcoming(resp.data);
                            }
                        );
                }
            );
    }, []);


    return (
        <>
            <Grid className={classes.grid1} container justify="center">
                <Grid className={classes.grid1} container justify="center">
                    <Avatar alt="Remy Sharp" src={TphotoURL}
                            style={{width: '10vw', height: '10vw', margin: '2% 4% 0% 0%'}}/>

                    <Paper elevation={0} style={{fontSize: '15px', width: '30vw', lineHeight: '1.8'}}>
                    <div style={{fontSize:'25px'}}><b>{Tname}</b></div>
              <div><b>{Tqualification} {Tspec}</b></div>
              <div><b>Experience: </b>{Texperience}</div>
              <div><b>Gender: </b>{Tgender}</div>
              <div><b>Description: </b><justify>{TpublicDescription}</justify></div>
                    </Paper>

                </Grid>
                <Grid className={classes.grid2} container>
                    <div style={{marginBottom: "2%"}}>Upcoming Appointments</div>
                    {
                        upcoming.map((record) => (
                            <Paper className={classes.paper} elevation={5}>
                                <Grid>
                                    <Typography><b>{record.patient}</b>&emsp;&emsp;&emsp;&emsp;
                                        <b>{record.date}</b>&emsp;&emsp;&emsp;&emsp;
                                        <b>{record.time}</b>&emsp;&emsp;&emsp;&emsp;
                                    <Button variant="contained" style={{backgroundColor:"white",color:"purple",fontWeight:"bold",marginLeft:"7%",marginRight:"5%"}} onClick={()=>{handleJoin(record.meetlink)}}>Join MEET</Button>
                                    {record.request == 0 && (
                                        <Button variant="contained" style={{backgroundColor:"white",color:"hotpink",fontWeight:"bold"}} onClick={()=>{handleRequest(record.appointmentId)}}>Request</Button>
                                    )}
                                    {record.request == 1 && (
                                        <Button variant="contained" style={{backgroundColor:"white",color:"orange",fontWeight:"bold"}}>Pending</Button>
                                    )}
                                    {record.request == 2 && (
                                        <Button variant="contained" style={{backgroundColor:"white",color:"lightgreen",fontWeight:"bold"}} onClick={()=>{handleView(record.patientUsername)}}>View</Button>
                                    )}
                                    
                                    </Typography>

                                </Grid>
                            </Paper>
                        ))
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default DEdit
