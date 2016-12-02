
    <script src="../postit2.js"></script>

    Exemplo:<br>
    <small>postit('/', ['name=Aleck Yann Mattos', 'idade=22', 'email=aleckyann@gmail.com', 'sexo=masculino'])</small>

    <hr>

    <img src="img.jpg" onclick="postit('./', ['name=aleck', 'idade=22', 'email=aleckyann@gmail.com', 'sexo=masculino'])"></img>
    
    <img src="img.jpg" postit-action="./" postit-inputs="name:aleck, idade:22, email:aleckyann@gmail.com, sexo:masculino" onclick="postit(this)"></img>
    
    <hr>

    <pre>
        <?php var_dump($_POST) ?>
    </pre>
    