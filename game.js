let cards = document.querySelectorAll(".card");
let cardOne ,cardTow;
let desable = false;
let matchedCards=0;

function flipCard(e){
  let clickedCard = e.target;
  clickedCard.classList.add("flip");
  if(cardOne!==clickedCard && !desable){
    if(!cardOne){
      return cardOne = clickedCard;
    }
    cardTow = clickedCard
    desable=true;
    let cardOneImg = cardOne.querySelectorAll("img")[1].src,
     cardTowImg = cardTow.querySelectorAll("img")[1].src;
     matchCards(cardOneImg,cardTowImg);
  }
}
function matchCards(img1,img2){
  if(img1===img2){
    matchedCards++;
    if(matchedCards==6){
      setTimeout(() => {
        return shuffleCards();
      }, 300);
    }
    setTimeout(() => {
      cardOne.style.visibility="hidden";
      cardTow.style.visibility="hidden";
      cardOne = cardTow ="";
      return desable = false;
    }, 300);
  }else{
    setTimeout(()=>{
      cardOne.classList.add("shake");
      cardTow.classList.add("shake");
    },300)

    setTimeout(() => {
      cardOne.classList.remove("shake","flip");
      cardTow.classList.remove("shake","flip");
      cardOne = cardTow = "";
      desable= false;
    }, 1000);
   
  }
}

function shuffleCards(){
  matchedCards = 0;
  cardOne = cardTow ="";
  desable=false;
  cards.forEach(card=>{
    card.style.visibility="visible";
    card.classList.remove("flip");
    card.style.order=Math.floor(Math.random() * 100);
    card.addEventListener("click",flipCard);
  });
}

cards.forEach(card=>{
  card.style.order=Math.floor(Math.random() * 100);
  card.addEventListener("click",flipCard)
});

