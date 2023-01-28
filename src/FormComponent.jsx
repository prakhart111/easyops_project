import React from 'react'
import './Form.css'

const FormComponent = ({masterData,setMasterData}) => {

    const [Fname,setFirstName] = React.useState("Fname");
    const [Lname,setLastName] = React.useState("Lname");
    const [contact,setContact] = React.useState("default contact");

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target?.Fname.value + e.target?.Lname.value)
        console.log(e.target?.contact.value)

        let formData = {
            serial: masterData.at(-1) ? masterData.at(-1).serial + 1 : 1,
            name:`${Fname} ${Lname}`,
            contact:contact,
        }

        setMasterData(
            [...masterData,
                formData
            ]
        )
    }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
            <div className='name-cont'>
                <input placeholder="Fname" onChange={(e)=>setFirstName(e.target.value)} type="text" id="Fname" name="Fname" />
                <input placeholder="Lname" onChange={(e)=>setLastName(e.target.value)} type="text" id="Lname" name="Lname" />
            </div>
            <label>Contact:</label>
            <input placeholder="default contact" onChange={(e)=>setContact(e.target.value)} type="text" id="contact" name="contact" />
            <input type="submit" value="Save" className='btn' />
        </form>
    </div>
  )
}

export default FormComponent