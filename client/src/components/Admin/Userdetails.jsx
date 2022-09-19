import React,{useState,useEffect} from 'react'
import {TableContainer,Table,TableHead,TableRow,TableCell,Button} from "@mui/material"

import api from '../service/api'

const Userdetails = () => {


  const data=[{
    "name":"asim sharma",
    "age":"20",
  }]

 const[users,setusers]=useState([])

 useEffect(() => {
  const getuser=async()=>{
      try{
       const response=await api.get("/admin/all")
       
       console.log(response.data)
       setusers(response.data.response)
    
      }catch(e){
          console.log("error while get data",e)
      }
     }
 getuser()
 
 console.log(users)
 }, [])

  const styles={
  color:"white",
  fontWeight:"bold",
  size:"30px",
  backgroundColor:"black",
  
 }
 
 
 
  return (
   
   
    <div>
    <TableContainer style={{"backgroundColor":"green"}}>
    <Table>
    <TableHead >
    <TableRow >
    <TableCell style={styles}> id</TableCell>
    <TableCell style={styles}> Name</TableCell>
    <TableCell style={styles}> Email</TableCell>
    <TableCell style={styles}> Phone</TableCell>
   
    </TableRow>
  {users.map((data,index)=>{
    
    return<TableRow key={index}>
    <TableCell style={styles}>{index}</TableCell>
    <TableCell>{data.Name}</TableCell>
    <TableCell>{data.Email}</TableCell>
    <TableCell>{data.Phone}</TableCell>
    <Button variant="contained">Delete</Button>
      
    </TableRow>
  
    
   })}
  
  

  

    </TableHead>
    
    </Table>
    
   
    </TableContainer>
    
    
    </div>

 
  
  )
  
}

export default Userdetails


