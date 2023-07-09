/*O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado


/*OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
    passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles*/

const characters = document.querySelectorAll('.character');

/*passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse*/

characters.forEach((character) => 
{
    character.addEventListener('mouseenter', () => 
        {

            if(window.innerHeight < 450)
            {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
            
            /*passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele*/
            const characterSelected = document.querySelector('.selected'); 
            characterSelected.classList.remove('selected');

            character.classList.add('selected');

            /*OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
            passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele*/
            const imageCharacterBig = document.querySelector('.big-character');

            /*passo 2 - alterar a imagem do personagem grande*/
            const idCharacter = character.attributes.id.value;
            imageCharacterBig.src = `./src/imagens/card-${idCharacter}.png`;

            /*passo 3 - alterar o nome do personagem grande*/
            const characterName = document.getElementById('character-name');

            characterName.innerText = character.getAttribute('data-name');

            /*passo 4 - alterar a descrição do personagem grande*/
            const characterDescription = document.getElementById('description');
            characterDescription.innerText = character.getAttribute('data-description');

        })

});



