let dropdownMenu = document.querySelector("#colorSelect")  
let btn = document.querySelector("input")

btn.addEventListener("click",(e)=>{
	let choosenColor = dropdownMenu.options[dropdownMenu.selectedIndex]
	dropdownMenu.removeChild(choosenColor)
})


