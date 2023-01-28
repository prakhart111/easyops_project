import React from 'react'
import { useTable,useSortBy } from 'react-table'
import '../assets/styles/Table.css'
import { deleteRow } from './tableFunctions'
import trashIcon from "../assets/trash.png"

const TableComponent = ({masterData,data,setMasterData,columns}) => {

  const tableHooks = (hooks)=>{
    hooks.visibleColumns.push(cols=>[
      ...cols,
      {
        id:"Delete",
        Header:"Delete",
        Cell:( {row} )=>(
          <span onClick={()=>{

            alert(`Deleted Row : ${row.values?.name}`)
            let nameToDelete = row.values?.name;
            deleteRow(masterData,setMasterData,nameToDelete)
            
          }}>
            <img src={trashIcon} width="15%"/>
          </span>
        )
      }
    ])
  }

  const tableInstance = useTable({columns,data},tableHooks,useSortBy);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;


  return (
    <div>
      <table {...getTableProps()}>
          <thead>
            {headerGroups.map( headerGroup=>(
               <tr  {...headerGroup.getHeaderGroupProps()}>
                  {
                    headerGroup.headers.map(col=>(
                      <th {...col.getHeaderProps(col.getSortByToggleProps())}
                      className="font-bold"
                      >
                        {col.render('Header')}
                        {col.isSorted ? (col.isSortedDesc?" ↓":" ↑") : ""}
                      </th>
                    ))
                  }
               </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
                {rows.map(row=>{
                  prepareRow(row)
                  return(
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell=>(
                          <td {...cell.getCellProps()}>
                              {cell.render('Cell')}
                          </td>
                        ))}
                    </tr>
                  )
                })}
          </tbody>
      </table>

    </div>
  )
}

export default TableComponent