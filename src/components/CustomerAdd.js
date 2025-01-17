import styles from '../assets/css/AddCustomer.module.css'
import React, {useState} from "react"
import axios from "axios";

// reactstrap components
import {
  Button,
  Label,
  
  Input,
  
} from "reactstrap";

// core components

export default function CustomerAdd() {
  const [firstName, setfName]=useState("");
  const [middleName, setmName]=useState("");
  const [lastName, setlName]=useState("");
  const [address, setAddress]=useState("");
  const [emailAddress, setEmail]=useState("");
  const [mobileNumber, setMobile]=useState("");
  const [nic, setNic]=useState("");
  const [dob, setDob]=useState("");
  const [gender, setGender]=useState("");
  const [companyid, setCid]=useState("");
  const [balance, setBalance]=useState("");
  const [addedAt, setAddDate]=useState("");
  const [addedBy, setAddBy]=useState("");
 


  function sendData(e){
    e.preventDefault();
    
    const newCustomer={
     firstName,
     middleName,   
     lastName,
     address,
     emailAddress,
     mobileNumber,
     nic,
     dob,
     gender,
     companyid,
     balance,
     addedAt,
     addedBy
    }
    
    axios.post("http://localhost:8000/customer/add", newCustomer).then(()=>{
      alert("Customer Added");
      window.location.reload();

    }).catch((err)=>{
      alert(err)
    })
  }
  

 
  
  return (
    <>
   
      <div style = {{paddingTop :"50px"}} className ={styles.body}>
      <br/><br/><h3 className = {styles.header} style = {{textAlign : 'center'}}>Insert New Customer</h3><br/><br/>
      <div className = {styles.FormContainer}>    
                
                
                <form onSubmit={sendData} >
                <label for = "firstName"><h5>First Name</h5></label>
                  
                    
                  <Input placeholder="First Name" type="text" 
                   required onChange={(e)=>{
                  setfName(e.target.value);
                   }} />
                  <label for = "middleName"><h5>Middle Name</h5></label>
                  
                    
                    <Input placeholder="Enter Middle Name" type="text" required onChange={(e)=>{
                    setmName(e.target.value);
                     }} />
                 

                  <label for = "lastName"><h5>Last Name</h5></label>
                  
                    
                    <Input placeholder="Enter Last Name" type="text" required onChange={(e)=>{
                    setlName(e.target.value);
                     }} />

                    
                  <label for = "address"><h5>Address</h5></label>
                  
                    
                  <Input placeholder="Enter Address" type="text" required onChange={(e)=>{
                  setAddress(e.target.value);
                   }} />
                 

                  <label for ="emailAddress"><h5>Email Address</h5></label>
                 
                    
                    <Input placeholder="Enter Email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title = "Enter a valid email" required
                    onChange={(e)=>{
                    setEmail(e.target.value);
                     }}/>
                

                  <label for = "mobileNumber"><h5>Mobile Number</h5></label>
                 
                    <Input placeholder="Enter Mobile Number" type="text" pattern = "[0-9]{10}" title = "Enter a 10 digit phone number starting with 0"  required onChange={(e)=>{
                    setMobile(e.target.value);
                     }}/>
                 

                  <label for ="nic"><h5>NIC Number</h5></label>
                  
                    
                    <Input placeholder="Enter NIC" type="text" 
                     onChange={(e)=>{
                    setNic(e.target.value);
                     }}/>
                  

                  <label for ="dob"><h5>Date of Birth</h5></label>
                
                    
                    <Input placeholder="Enter Date of Birth" type="Date" onChange={(e)=>{
                    setDob(e.target.value);
                     }}/>

                 <label for ="gender"><h5> Gender</h5></label>
                
                    
                <Input placeholder="Select Gender" type="text" onChange={(e)=>{
                setGender(e.target.value);
                 }}/>

                
                <label for ="companyId"><h5>Company ID</h5></label>
                
                    
                <Input placeholder="Enter Comapany ID" type="text" onChange={(e)=>{
                setCid(e.target.value);
                 }}/>


                <label for ="balance"><h5>Balance</h5></label>
                
                    
                <Input placeholder="Enter Balance" type="text" onChange={(e)=>{
                setBalance(e.target.value);
                 }}/>

                <label for ="addedAt"><h5>Added At</h5></label>
                
                    
                <Input placeholder="Select Date of Today" type="Date" onChange={(e)=>{
                setAddDate(e.target.value);
                 }}/>

                <label for ="addedBy"><h5>Added Buy</h5></label>
                
                    
                <Input placeholder="Enter Adding Person" type="text" onChange={(e)=>{
                setAddBy(e.target.value);
                 }}/>

                     <br/>
                 
                  <center>
                  <button type="submit" className="btn btn-primary">Add Customer</button>
                  </center>
                </form>
                
            
             
        
         
       
      </div>
      </div>
    
    </>
  );
}


