# postit.js


###PARA USAR É SIMPLES, EXEMPLO:
<script src="postit.js" />
<i onclick="postit('index.php', 'name' 'Aleck')">My name is Aleck!</i>

ESTE PEQUENO TRECHO DE CÓDIGO EQUIVALE A AÇÂO DE SUBMETER ESTE FORMULÁRIO:

<form action="index.php" method="POST">
    <input type="hidden" name="name" value="Aleck">
    <input type="submit" value="My name is Aleck!">
</form>

### DESTA FORMA QUALQUER ELEMENTO PODERÁ APRESENTAR COMPORTAMENTO DE UM FORMULÁRIO, SEM POLUIR SEU CÓDIGO HTML COM TAGS <form><input></input></form>

### LEMBRE-SE, qualquer elemento pode ser usado, no exemplo usei uma tag <i> </i>, mas use qualquer uma!


PS: Para dar aparencia de algo clicável use:
<elemento style="cursor:pointer">Sou clicável!</elemento>


---
Para submeter mais de um campo, use postit2.js