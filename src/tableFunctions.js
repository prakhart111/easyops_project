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

export const searchRow = (masterData,nameToSearch,loading,setLoading)=>{
    setLoading(true);
    let result = [...masterData]
    result = result.filter(
        (item)=>{
            return item.name.toLowerCase().includes(nameToSearch.toLowerCase())
        }
    )
    if(result.length==0) alert("No results found")
    setLoading(false)
    return result;
}

export const checkDuplicacy = (formData,masterData)=>{
    if(masterData.length==0) return true;
    let res = true;

    masterData.forEach( (item)=>{
        if(res && (item.name == formData.name || item.contact == formData.contact) )
            res = false;
    })
    
    return res;
}   