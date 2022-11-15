import React from 'react';
import {Paper} from '@material-ui/core';
import useWindowDimensions from "../Hooks/useWindowDimensions";

let data = [
    {"id":1,
     "name":"abc"
    },
    {"id":2,
     "name":"def"
    },
    {"id":3,
     "name":"ghi"
    },
]




const JSON = () => {
  const { height, width } = useWindowDimensions();
  return (
    <>
    {
        data.map((record) => (<Paper style={{height:height*0.15,width:width*0.75,backgroundColor: "blue",marginBottom: "2%",color:"white"}}>
        {record.name}
    </Paper>))
    }
    
    </>
  )
}

export default JSON
