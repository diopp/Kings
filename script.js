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
 response()
 output()          
        }, (error) => {
            console.log (error);
        })
    
    };


    function output() {
      
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
        $('h2').text('Each player puts up 3 fingers, then starting with the person who drew the card, each player says "never have I ever «something»". If you have done it, you put a finger down, until someone loses')
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

    function response() {
      
        if(cardInfo === 'ACE'){
            $('h1').text('🍺Waterfall🍺')
        }
        if(cardInfo === 'KING'){
         $('h1').text('📏Ruler📏')
     }  
 
     if(cardInfo === 'QUEEN'){
         $('h1').text('❓Questions❓')
     }  
 
     if(cardInfo === 'JACK'){
         $('h1').text('🖐Never have I ever 🖐')
     }  
 
     if(cardInfo === '10'){
         $('h1').text(' 📜Categories 📜')
     } 
     
     if(cardInfo === '9'){
         $('h1').text('🎵Rhyme🎵')
     }  
     if(cardInfo === '8'){
         $('h1').text('🧑‍🤝‍🧑Mate🧑‍🤝‍🧑')
     }  
     if(cardInfo === '7'){
         $('h1').text('👆Heaven👆')
     }  
     if(cardInfo === '6'){
         $('h1').text('🙅‍♀️Chicks🙅‍♀️')
     }  
     if(cardInfo === '5'){
         $('h1').text('🙅‍♂️Guys🙅‍♂️')
     }  
     if(cardInfo === '4'){
         $('h1').text('🟫Floor🟫')
     }  
     if(cardInfo === '3'){
         $('h1').text('🤟Me🤟')
     }  
     if(cardInfo === '2'){
         $('h1').text('👆You👆')
     }  
 
     
     }
