import { React, useEffect, useState } from "react";
// import {FormControl, InputLabel, MenuItem, Paper, Select} from "@mui/material";
import useWindowDimensions from "../Hooks/useWindowDimensions";
import {FormControl, InputLabel, MenuItem, Paper, Select, Button, TextField, Typography, makeStyles} from "@material-ui/core";
import {useNavigate} from "react-router-dom";

const useStyles = makeStyles((theme) => {
    return ({
        paper: {
            display: "flex",
            flexDirection: "column",
            height: "75%",
            justifyContent: "start",
            alignItems: "center",
        },
        heading: {
            display: "flex",
            marginTop: "10%",
            color: "#06283D",
            // fontSize: "100%",
            fontFamily: "Arvo, serif",
            fontSize: "36px",
        },
        textField: {
            display: "flex",
            marginTop: "2%",
            justifySelf: "center",
            width: "50%",
        }
    });
});

const PatientProfileCreation = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const { height, width } = useWindowDimensions();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [bloodGroup, setBlood] = useState("")
    const [address, setAddress] = useState("")
    const [photo, setPhoto] = useState("")
    const [contact, setContact] = useState("")

    const handlerName = (e) => {
        setName(e);
    }
    const handlerEmail = (e) => {
        setEmail(e);
    }
    const handlerGender = (e) => {
        setGender(e);
    }
    const handlerBlood = (e) => {
        setBlood(e);
    }
    const handlerAddress = (e) => {
        setAddress(e);
    }
    const handlerPhoto = (e) => {
        setPhoto(e);
    }
    const handlerContact = (e) => {
        setContact(e);
    }

    const redirect = (e) => {
        navigate('/dashboard');
    }

    return <div style={{
        height: height,
        width: width,
        backgroundColor: "#47B5FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <Paper className={classes.paper} elevation={20} style={{width: "65%", height:"90%", borderRadius:30, backgroundColor: "#DFF6FF",}}>
            <Paper style = {{backgroundColor:"#256D85", height: "5%", width: "100%", borderRadius:"30px 30px 0 0"}} elevation={20}></Paper>
            <Typography style={{marginTop:"2%", fontFamily: "Arvo, serif", fontSize: "36px",display: "flex"}}>Patient Profile Creation</Typography>
            <TextField
                // error={lUserError}
                id="set-name"
                className={classes.textField}
                label="Name"
                variant="standard"
                value={name}
                cla
                onChange={(e) => {
                    handlerName(e.target.value);
                }}
            />
            <TextField
                // error={lUserError}
                id="set-email"
                className={classes.textField}
                label="Email"
                variant="standard"
                value={email}
                cla
                onChange={(e) => {
                    handlerEmail(e.target.value);
                }}
            />
            <FormControl className={classes.textField} variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Blood Group</InputLabel>
                <Select
                    // labelId=""
                    label = "Blood Group"
                    id="setBlood"
                    value={bloodGroup}
                    onChange={(e) => {
                        handlerBlood(e.target.value)}
                    }
                >
                    {/*<MenuItem value="">*/}
                    {/*    <em>"A"</em>*/}
                    {/*</MenuItem>*/}
                    <MenuItem value={'A+'}>A+</MenuItem>
                    <MenuItem value={'A-'}>A-</MenuItem>
                    <MenuItem value={'B+'}>B+</MenuItem>
                    <MenuItem value={'B-'}>B-</MenuItem>
                    <MenuItem value={'AB+'}>AB+</MenuItem>
                    <MenuItem value={'AB-'}>AB-</MenuItem>
                    <MenuItem value={'O+'}>O+</MenuItem>
                    <MenuItem value={'O-'}>O-</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.textField} style={{marginTop: "2%"}} variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
                <Select
                    // labelId=""
                    id="demo-simple-select-standard"
                    value={gender}
                    onChange= {
                        (e) => {
                            handlerGender(e.target.value)
                        }
                    }
                    label="Gender"
                >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Others"}>Others</MenuItem>
                </Select>
            </FormControl>

            <TextField
                // error={lUserError}
                id="set-contact"
                className={classes.textField}
                style = {{marginTop: "1%"}}
                label="Phone"
                variant="standard"
                value={contact}
                cla
                onChange={(e) => {
                    handlerContact(e.target.value);
                }}
            />

            <TextField
                // error={lUserError}
                id="set-address"
                className={classes.textField}
                label="Address"
                variant="standard"
                value={address}
                cla
                onChange={(e) => {
                    handlerAddress(e.target.value);
                }}
            />

            <TextField
                // error={lUserError}
                id="set-photo"
                className={classes.textField}
                label="Photo"
                variant="standard"
                value={photo}
                cla
                onChange={(e) => {
                    handlerPhoto(e.target.value);
                }}
            />

            <Button
                variant="outlined"
                style={{
                    marginTop: "4%",
                    width: "30%",
                    height: "7.5%",
                    borderRadius: "25px",
                    fontSize: "125%",
                    fontFamily: "Arvo",
                    backgroundColor: "#256D85",
                    color: "#DFF6FF",
                }}
                onClick={redirect}
                // onClick={LoginButton}
            >
                SUBMIT
            </Button>

        </Paper>
    </div>
}

export default PatientProfileCreation;