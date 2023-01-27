import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TableComponent from './TableComponent'
import FormComponent from './FormComponent'

function App() {
  const [masterData,setMasterData] = React.useState(  //row
    [
      {
        serial:1,
        name:"Prakhar Tandon",
        contact:"9044597953"
      },
      {
        serial:2,
        name:"Gautam Adani",
        contact:"9999996969"
      },
    ]
  )

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
    ],[])

  return (
    <div className="App">
      <FormComponent masterData={masterData} setMasterData={setMasterData}/>
      <TableComponent data={data} columns={columns} />
    </div>
  )
}

export default App
