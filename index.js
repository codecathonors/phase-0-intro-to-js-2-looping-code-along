function writeCards(namesForCards, event){
    let messages = [];
    for(let i = 0; i < namesForCards.length; i++){
        messages.push(`Thank you, ${namesForCards[i]}, for the wonderful surprise gift!`);
    }
    return messages;
}


function countDown(downCounter) {
    while(downCounter >= 0) {
        console.log(downCounter);
        downCounter--;
    }
}