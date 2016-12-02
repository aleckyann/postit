function postit(this) {



    /* https://github.com/aleckyann/postit */

    var inputs;
    var formulario;

    function prepareData(array){
        var data = [];
        array.replace(',','');
        array.forEach(function(input) {
            data.push(input.split(':'));
        });
        
        return data;
    };

    function createForm(url){
        var formulario = document.createElement("form"); 
        formulario.method = "post";
        var atributo = document.createAttribute("action");
        atributo.value = url;
        document.body.appendChild(formulario);
        formulario.setAttributeNode(atributo);

        return formulario;
    }

    function createInputs(inputs, formulario){
        var input;
        inputs.push(['Postit', 'https://github.com/aleckyann/postit']);
        inputs.forEach(function(item){
            input = document.createElement("input");
            input.type = "hidden";
            input.name = item[0];
            input.value = item[1];
            formulario.appendChild(input);
        });

        return formulario;
    }

    inputs      = prepareData(array);
    formulario  = createForm(url);
    formulario  = createInputs(inputs, formulario);
  	
	formulario.submit();

};

document.addEventListener("DOMContentLoaded", function(event) { 
  if(document.querySelectorAll('[onclick]')){
        var elements = document.querySelectorAll("[onclick]");
        for(var i = 0; i < elements.length; i++) {
            elements[i].style.cursor = 'pointer';
        }
    };
});
