function urlPostAll2(url, nome1, id1, nome2, id2) {

	var formulario = document.createElement("form");
 	formulario.method = "post";

 	var action = document.createAttribute("action");
	action.value = url; 
 	document.body.appendChild(formulario);
 	formulario.setAttributeNode(action);

  	input1 = document.createElement("input");
 	input1.type = "hidden";
 	input1.name = nome1;
 	input1.value = id1;
  	formulario.appendChild(input1); 

 	input2 = document.createElement("input");
 	input2.type = "hidden";
 	input2.name = nome2;
 	input2.value = id2; 
  	formulario.appendChild(input2); 
 	
	formulario.submit();
};