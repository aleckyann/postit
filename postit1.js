function postit(url, nome, id) {
	var formulario = document.createElement("form"); 
 	formulario.method = "post";
 	var atributo = document.createAttribute("action");
	atributo.value = url;
 	document.body.appendChild(formulario);
 	formulario.setAttributeNode(atributo);
  	input = document.createElement("input");
 	input.type = "hidden";
 	input.name = nome;
 	input.value = id;
  	formulario.appendChild(input);
	formulario.submit(); 
};
