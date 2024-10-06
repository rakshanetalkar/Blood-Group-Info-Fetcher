var btnSearch=document.querySelector('#btnSearch')

btnSearch.addEventListener('click',function(){
    //var bloodType=document.querySelector('#bloodType')
    var apiUrl="https://random-data-api.com/api/v2/blood_types"
    console.log(apiUrl)
    getData(apiUrl)
})

async function getData(apiUrl){
    var raw=await fetch(apiUrl)
    var data=await raw.json()
    console.log(data)

    var typeName=document.querySelector('#typeName')
    typeName.textContent=data.type

    var fact=document.querySelector('#fact')
    fact.textContent=data.rh_factor

    var group=document.querySelector('#group')
    group.textContent=data.group
}