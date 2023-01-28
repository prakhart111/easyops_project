import React from 'react'
import './App.css'
import TableComponent from './components/TableComponent'
import FormComponent from './components/FormComponent'
import {autofillData} from "./autofillData"
import SearchBar from './components/SearchBar'


function App() {

  const jsonData =[
    {
      serial:1,
      name:"Prakhar Tandon",
      contact:"9044597953"
    },
  ];

  const [masterData,setMasterData] = React.useState(jsonData)

  const data = React.useMemo(()=>[...masterData],[masterData])
  const columns = React.useMemo(()=>[
      {
        Header:"S.No.",
        accessor:"serial"
      },
      {
        Header:"Name",
        accessor:"name"
      },
      {
        Header:"Mobile Number",
        accessor:"contact"
      },
    ],[masterData])


  return (
    <div className="App">
      <button className="btn autofill" onClick={()=>{
        setMasterData(autofillData)
        }}>AutoFill Table</button>

      <SearchBar masterData={masterData} />
      <FormComponent masterData={masterData} setMasterData={setMasterData}/>
      <TableComponent masterData={masterData} setMasterData={setMasterData} data={data} columns={columns} />
    </div>
  )
}

export default App
