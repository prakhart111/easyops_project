import React from 'react'
import '../assets/styles/Form.css'
import {checkDuplicacy} from "./tableFunctions" 

const FormComponent = ({masterData,setMasterData}) => {

    const [Fname,setFirstName] = React.useState(null);
    const [Lname,setLastName] = React.useState(null);
    const [contact,setContact] = React.useState(null);

    const handleFormSubmit = (e)=>{
        e.preventDefault();

        if(!Fname || !Lname || !contact){
            alert("Enter valid values")
            return;
        }

        console.log(e.target?.Fname.value + e.target?.Lname.value)
        console.log(e.target?.contact.value)

        let formData = {
            serial: masterData.at(-1) ? masterData.at(-1).serial + 1 : 1,
            name:`${Fname} ${Lname}`,
            contact:contact,
        }

        //check if given name & contact already exists in the table
        if(checkDuplicacy(formData,masterData)){ // true means no duplicate
            setMasterData(
                [...masterData,
                    formData
                ]
            )
        }
        else{
            alert("Duplicate Values are not allowed")
        }

    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
            <div className='name-cont'>
                <input placeholder="First Name" onChange={(e)=>setFirstName(e.target.value.trim())} type="text" id="Fname" name="Fname" required/>
                <input placeholder="Last Name" onChange={(e)=>setLastName(e.target.value.trim())} type="text" id="Lname" name="Lname" required/>
            </div>
            <label>Contact:</label>
            <input placeholder="Enter Contact Number" onChange={(e)=>setContact(e.target.value.trim())} type="number" id="contact" name="contact" required/>
            <input type="submit" value="Save" className='btn' />
        </form>
    </div>
  )
}

export default FormComponent