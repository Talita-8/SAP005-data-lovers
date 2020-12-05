export const filterStatus = function statusFunc(docData, selectStatus){
  return docData.filter(aliveDead => aliveDead.status === selectStatus)
}

export const filterGender = function genderFunc(docData, selectGender){
  return docData.filter(maleFemale => maleFemale.gender === selectGender)
}

export const filterOrder = function orderFunc(docData, selectOrder){
  if(selectOrder === "a-z"){
    return docData.sort((a, b) => (a.name).localeCompare(b.name))
  }
  if(selectOrder === "z-a"){
    return docData.sort((a, b) => (b.name).localeCompare(a.name))
  }
}

export const filterText = function textFunc(docData, inputText){
  let typing = inputText.toUpperCase()
  return docData.filter(search => search.name.toUpperCase().includes(typing))
}
