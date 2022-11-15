import {React,useState} from 'react'
import {Paper,makeStyles,TextField,Button} from '@material-ui/core';
import useWindowDimensions from '../Hooks/useWindowDimensions';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    paper : {
        display: "flex",
        height: "70%",
        width: "50%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    subpaper : {
        display: "flex",
        height: "50%",
        width: "100%",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    }
  }));

function RegForm() {
 const classes = useStyles();
  const {height,width} = useWindowDimensions();
  const [username,setUsername] = useState("Type your name!");
  const [password,setPassword] = useState("Enter Password!");
  const handleUsername = (e) => {
    setUsername(e);
  }
  const handlePassword = (e) => {
    setPassword(e);
  }
  const handleSubmit = () => {
    console.log("submit clicked");
    const payload = {username:username,password:password};
    axios.post('http://localhost:8686/api/user/',payload)
    .then(response => {alert(response)});
  }
  return (
    <div style={{height:height,width:width,backgroundColor:"blue",display:"flex",justifyContent: "center",alignItems: "center"}}>
        <Paper className={classes.paper}>
            <Paper className = {classes.subpaper}>
            <TextField 
            id="outlined-basic" 
            label="Username" 
            value = {username} 
            onChange = {(e)=>{handleUsername(e.target.value)}}/>
            </Paper>
            <Paper className = {classes.subpaper}>
            <TextField 
            id="outlined-basic" 
            label="Password" 
            value = {password} 
            onChange = {(e)=>{handlePassword(e.target.value)}}/>
            </Paper>
            <Button onClick={handleSubmit()}>Submit</Button>
        </Paper>
    </div>
  )
}

export default RegForm