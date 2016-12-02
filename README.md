# postit.js - 0.7 Kb ;)


## URL E HTML LIMPOS COM POSTITJS
===


```
<script src="postit.js" />
<i onclick="postit('index.php', ['name=Aleck Yann Mattos', 'email=aleckyann@gmail.com', 'id=22'])">Go!</i>
```

###O TRECHO DE CÓDIGO ACIMA EQUIVALE A AÇÃO DE SUBMETER ESTE FORMULÁRIO:
```
<form action="index.php" method="POST">
    <input type="hidden" name="name" value="Aleck Yann Mattos">
    <input type="hidden" name="email" value="aleckyann@gmail.com">
    <input type="hidden" name="id" value="22">
    <input type="submit" value="Go!">
</form>
```

###REPARE COMO É FEITO:
```
onclick='postit('urlDeDestino', ['nameDoInput=valueDoInput', 'nameDoInput2=valueDoInput2', ...])'
```
> Repare que você pode passar quantos elementos quiser para o postit, basta seguir a sintaxe: ['name=value', 'name=value'].


###VOCÊ PODE USAR QUALQUER EVENTO PARA DISPARAR O postit.js!
 ```
onclick();
onchange();
ondrag();
onhover();
...
 ```

DESTA FORMA QUALQUER ELEMENTO DO SEU HTML PODERÁ APRESENTAR COMPORTAMENTO DE UM FORMULÁRIO, SEM POLUIR SEU CÓDIGO HTML COM TAGS ```<form><input></input></form>```

>LEMBRE-SE, QUALQUER ELEMENTO HTML PODE SER USADO!


>POR PADRÃO TODOS OS ELEMENTOS QUE USAM O POSTIT, RECEBEM EFEITO DE POINTER: style="cursor:pointer" PARA TEREM APARÊNCIA DE ITENS CLICÁVEIS, ASSIM COMO LINKS E BOTÕES.


Version: 1.0.9
Exemplo: http://mysterious-everglades-11117.herokuapp.com/Exemplo/