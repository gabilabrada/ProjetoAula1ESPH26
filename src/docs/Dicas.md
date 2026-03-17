1° Abrir o VSCODE
2° No terminal digitar: cd desktop
3° No terminal dentro do desktop: mkdir nomedapasta
4° No terminal: cd nomedapasta
5° Dentro da pasta nomedpasta: code .
6° No terminal da pasta nomedapasta: touch index.html
7° No terminal: mkdir src
8° No terminal: cd src
9° No terminal: mkdir css
10° No terminal: mkdir js
11° No terminal: cd css
12° No terminal: touch estilo.css
13° No terminal: cd ..
14° No terminal: cd js
15° No terminal: cd touch script.js
16° No terminal: cd ..
17° No terminal: cd .. até chegar na raiz do projeto (nomedapasta)
18° No terminal: git init 
19° Se estiver na FIAP: git config --global user.name "Gabriela"
20° Se estiver na FIAP: git config --global user.email glabradadev@gmail.com
21° No terminal: git status
22° Se estiver vermelho: git add .
23° Se estiver verde: git commit -m "Mensagem do que você fez"
24° Entrar no github em repositórios, criar um novo repositorio, colocar um nome e deixar público,
clicar no botão "Criar repositorio" (DICA - NUNCA TRADUZA A PÁGINA DO GITHUB)
25° No bloco que estiver as três linhas:
    1° linha - Conecta seu git bash com o seu github
    2° linha - Muda o nome master para main
    3° linha - pega tudo que estiver no projeto e sobe para o github
27° Caso você esteja em outro pc: no seu repositorio no botão verde(code), copie o link,
abra seu VSCODE no terminal cd deskto: git clone (copie o link), isso vai clonar seu projeto e pode continuar da onde parou
28° Se modificar seu código, faça todo o processo do
    git status  
    git add .   
    git status
    git commit -m "Mensagem"
    e para subir as alterações, digite: git push
