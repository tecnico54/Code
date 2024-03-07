var check = document.querySelector(".check");
check.addEventListener('click', idioma);
function idioma(){
	let id = check.checked;
	if (id == true){
		location.href="Traducir-Español.html";
	}else{
		location.href="Traducir-English.html";
	}
}
