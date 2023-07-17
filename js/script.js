const front = "card_front"
const back = "card_back"


let techs = ['javascript',
    'CSS',
    'fiebase',
    'html',
    'css',
    'javascript',
    'jquery',
    'mongo',
    'nodejs',
    'react'];

let cards = null;

startGame();

function startGame() {
    //embaralhar cartas criadas
    cards = createCardsFromTechs(techs);
    shuffleCards(cards);
    console.log(cards);
}

function shuffleCards(cards) {
    //se meu lengh e 10 eu pego o 10 q e ultimo
    let currentIndex = cards.lengt;
    //cards para se tornar uma referencia
    let randomIndex = 0;

    while(currentIndex != 0) {
    //so posso pegar cartas q meu index seja diferente
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
    //modificar posicao do array por ser referencia modifica td.
        (cards[randomIndex], cards[currentIndex] = [cards[currentIndex]])
    }
}

function createCardsFromTechs(techs) {
         
    let cards = [];
    //peguei cada cartas do meu array 
    for(let tech of techs) {
    //empurrar pares de carta aleatoria com function
        cards.push(createPairFromTechs(tech))
    }
    //flatmap retorna array oq for array retorna separado array
    return cards.flatMap(pair => pair);
}

//retornar pares de cartas
function createPairFromTechs(tech) {
    return [{
    //a gente precisa diferenciar a carta por um id aleatorio
        Id: createIdWithTech(tech),
        icons: 'bootstrap',
        flipped: false,
    }, {
        Id: createIdWithTech(tech),
        icons: 'bootstrap',
        flipped: false,
    },]
}

function createIdWithTech(tech) {
    //gerar o id aleatorio
    return tech + parseInt(Math.random()) * 1000;
}

    


