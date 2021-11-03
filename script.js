//Constants
const BASE_URL = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';

//Variables
let cardInfo;
//

//Cached Elements References
const $cards = $('#cards');



//Event 
$('button').on('click', getData)
        
function getData() {
    $.ajax(BASE_URL)
    .then(
        (data) => {
            $cards.empty()
            cardInfo = data.cards[0].value
            console.log(data, 'cards');
const $img = `<img src="${data.cards[0].image}" alt="Cards" width="auto" height="auto"></img>`
 $cards.append($img)
 output()          
        }, (error) => {
            console.log (error);
        })
    
    };


    function output() {
        console.log(cardInfo)
       if(cardInfo === 'ACE'){
           $('h2').text('Everyone starts drinking their beverage at the same time as the person to their left. No player can stop drinking until the player before them stops.')
       }
       if(cardInfo === 'KING'){
        $('h2').text('If you have drawn one of the first 3 Kings you must pour some of your drink into the King s Cup. If you have drawn the 4th King you must down the Kings Cup.')
    }  

    if(cardInfo === 'QUEEN'){
        $('h2').text('You are the question master. Whenever you ask a question other players must answer with another question. If someone answers a question from you without a question they must drink. You remain the question master until the next Queen is drawn.')
    }  

    if(cardInfo === 'JACK'){
        $('h2').text('When you place your thumb on the end of the table, however discretely, all other players must place their thumbs there as well. The last person to place their thumb on the table has to drink. You have the power to do this at any point until the next Jack is drawn.')
    }  

    if(cardInfo === '10'){
        $('h2').text('You come up with a category of things and the person to your right must come up with something that falls within that category. This goes on around the table until someone can not come up with anything. This person must drink.')
    } 
    
    if(cardInfo === '9'){
        $('h2').text('You say a word, and the person to your right has to say a word that rhymes. Continue around the table until someone cannot think of a word. This person must drink. The same word may not be used twice.')
    }  
    if(cardInfo === '8'){
        $('h2').text('Choose a person to be your mate. Your mate must drink when you drink, and vice versa, for the rest of the game. If one of the mates draws another 8 card, they choose another mate and now all three have to drink.')
    }  
    if(cardInfo === '7'){
        $('h2').text('Last person to get both hands in the air has to drink. ')
    }  
    if(cardInfo === '6'){
        $('h2').text('All girls must drink.')
    }  
    if(cardInfo === '5'){
        $('h2').text('All guys must drink.')
    }  
    if(cardInfo === '4'){
        $('h2').text('The last person to touch the floor with their hands must drink.')
    }  
    if(cardInfo === '3'){
        $('h2').text('You must drink. Bottoms up!')
    }  
    if(cardInfo === '2'){
        $('h2').text('Point at a person and tell them to drink.')
    }  

    
    }