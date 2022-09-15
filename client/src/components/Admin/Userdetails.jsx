import React from 'react'
import {TableContainer,Table,TableHead,TableRow,TableCell} from "@mui/material"
import api from '../service/api'
const Userdetails = () => {
 const[user,setuser]=useState()
  const styles={
  color:"white",
  fontWeight:"bold",
  size:"30px"
 }
 useEffect(() => {
  const getuserdata=async()=>{
   try{
    const response=await api.get("/user/admin")
    setuser(response.data)
   }catch(e){
    console.log(e)
   }
  }
  getuserdata()
 },
 
 [])
  return (
   
   
    <div>
    <TableContainer style={{"backgroundColor":"red"}}>
    <Table>
    <TableHead>
    <TableRow>
    <TableCell style={styles}> Name</TableCell>
    <TableCell style={styles}> Email</TableCell>
    <TableCell style={styles}> Phone</TableCell>
    <TableCell style={styles}> Password</TableCell>
    
    
    </TableRow>
    
    </TableHead>
    
    </Table>
    
    
    </TableContainer>
    
    
    </div>
  )
}

export default Userdetails