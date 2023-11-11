let inpvalue=document.getElementById("inp")
let lengthEl=document.getElementById("length")
let volumeEl=document.getElementById("volume")
let massEl=document.getElementById("mass")
let converterbtn=document.getElementById("btn")

converterbtn.addEventListener("click",function(){
    let getvalue=Number(inpvalue.value)
    inpvalue=""
    lengthconvert(getvalue)
    volumeconvert(getvalue)
    massconvert(getvalue)
})
function lengthconvert(no){
let meterTofeet=(no*3.8).toFixed(2)
let feetTomater=(no/3.8).toFixed(2)
lengthEl.textContent=`
${no} meters =${meterTofeet} feet | ${no} feet=${feetTomater} meter
`
}

function volumeconvert(no){
    let leterTogallon=(no*3.8).toFixed(2)
    let gallonToleter=(no/3.8).toFixed(2)
    volumeEl.textContent=`
    ${no} leter =${leterTogallon} gallon | ${no} gallon=${gallonToleter} leter
    `
    }

    function massconvert(no){
        let kilosTopound=(no*3.8).toFixed(2)
        let poundTokilos=(no/3.8).toFixed(2)
        massEl.textContent=`
        ${no} kilos =${kilosTopound} kilos | ${no} pound=${poundTokilos} kilos
        `
        }

