import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {TableContainer,Table,TableHead,TableRow,TableCell,Button} from "@mui/material"

const Result = () => {

   const user=useLocation().state;

   const [data, setdata] = useState(user)

    console.log(data)
    //errror
   

    console.log()
  return (
    <div>
    
    <TableContainer style={{"backgroundColor":""}}>

    <Table>
    <TableHead>
    <TableRow>

 <TableCell>id</TableCell>
 <TableCell>Name</TableCell>
 
 

    </TableRow>
    {data.map((datas,index)=>{
    return <TableRow key={index}>
    <TableCell>{index}</TableCell>
    <TableCell>{datas.Name}</TableCell>
    
    </TableRow>
    })}
    </TableHead>
    </Table>
    
    </TableContainer>
    
    </div>
  )
}

export default Result