import React from 'react'
import { useTable } from 'react-table'
import './Table.css'
import { deleteRow } from './tableFunctions'

const TableComponent = ({masterData,data,setMasterData,columns}) => {

  const tableHooks = (hooks)=>{
    hooks.visibleColumns.push(cols=>[
      ...cols,
      {
        id:"Delete",
        Header:"Delete",
        Cell:( {row} )=>(
          <button onClick={()=>{

            alert(`Deleted Row : ${row.values?.name}`)
            let nameToDelete = row.values?.name;
            deleteRow(masterData,setMasterData,nameToDelete)
            
          }}>Delete</button>
        )
      }
    ])
  }

  const tableInstance = useTable({columns,data},tableHooks);
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
                      <th {...col.getHeaderProps()}>
                        {
                          col.render('Header')
                        }
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