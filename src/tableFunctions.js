export const deleteRow = (masterData,setMasterData,nameToDelete)=>{
    let copy = [...masterData]
    if(copy.length == 1){
        copy.length = 0
    }
    copy = copy.filter(
        (item)=>item.name != nameToDelete
    )
    setMasterData(copy)
}