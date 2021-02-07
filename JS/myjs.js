$(document).ready(function () {
  var turnedCard = false;
  let lock = false;
  var card1;
  var card2;
  var gameOneBoard = $(".gameOneBoard");
  var gameTwoBoard = $(".gameTwoBoard");
  var gameThreeBoard = $(".gameThreeBoard");

  let dataSetVal = ["green", "blue", "orange", "brown"];
  let backFace = ["cardBackGreen", "cardBackBlue", "cardBackOrange", "cardBackBrown"];
  var gameOneCards = [
          $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[0]} ><div class='cardFront'></div><div class= ${backFace[0]}></div></div>`),
          $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[0]} ><div class='cardFront'></div><div class= ${backFace[0]}></div></div>` ),
          $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[1]} ><div class='cardFront'></div><div class= ${backFace[1]}></div></div>` ),
          $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[1]} ><div class='cardFront'></div><div class= ${backFace[1]}></div></div>`),
];

 var gameTwoCards = [
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[0]} ><div class='cardFront'></div><div class= ${backFace[0]}></div></div>`),
   $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[0]} ><div class='cardFront'></div><div class= ${backFace[0]}></div></div>` ),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[1]} ><div class='cardFront'></div><div class= ${backFace[1]}></div></div>` ),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[1]} ><div class='cardFront'></div><div class= ${backFace[1]}></div></div>`),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[2]} ><div class='cardFront'></div><div class= ${backFace[2]}></div></div>`),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[2]} ><div class='cardFront'></div><div class= ${backFace[2]}></div></div>`),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[3]} ><div class='cardFront'></div><div class= ${backFace[3]}></div></div>`),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[3]} ><div class='cardFront'></div><div class= ${backFace[3]}></div></div>` ),
 ];

 var gameThreeCards = [
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[0]} ><div class='cardFront'></div><div class= ${backFace[0]}></div></div>`),
   $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[0]} ><div class='cardFront'></div><div class= ${backFace[0]}></div></div>` ),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[1]} ><div class='cardFront'></div><div class= ${backFace[1]}></div></div>` ),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[1]} ><div class='cardFront'></div><div class= ${backFace[1]}></div></div>`),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[2]} ><div class='cardFront'></div><div class= ${backFace[2]}></div></div>`),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[2]} ><div class='cardFront'></div><div class= ${backFace[2]}></div></div>`),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[3]} ><div class='cardFront'></div><div class= ${backFace[3]}></div></div>`),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[3]} ><div class='cardFront'></div><div class= ${backFace[3]}></div></div>` ),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[0]} ><div class='cardFront'></div><div class= ${backFace[0]}></div></div>`),
  $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[0]} ><div class='cardFront'></div><div class= ${backFace[0]}></div></div>` ),
 $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[1]} ><div class='cardFront'></div><div class= ${backFace[1]}></div></div>` ),
 $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[1]} ><div class='cardFront'></div><div class= ${backFace[1]}></div></div>`),
 $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[2]} ><div class='cardFront'></div><div class= ${backFace[2]}></div></div>`),
 $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[2]} ><div class='cardFront'></div><div class= ${backFace[2]}></div></div>`),
 $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[3]} ><div class='cardFront'></div><div class= ${backFace[3]}></div></div>`),
 $(`<div class='cardWrapper' data-cardvalue=${dataSetVal[3]} ><div class='cardFront'></div><div class= ${backFace[3]}></div></div>` )
 ];
 
 gameOneCards.forEach(function () {
  gameOneBoard.append(gameOneCards.sort(()=>Math.random()-0.5));
});
gameOneBoard.hide();
$(".btn1").on("click", function(){
  gameTwoBoard.hide();
  gameOneBoard.show();
  gameThreeBoard.hide();
})
    gameTwoCards.forEach(function () {
    gameTwoBoard.append(gameTwoCards.sort(()=>Math.random()-0.5));
  });
    gameTwoBoard.hide();
  $(".btn2").on("click", function(){
    gameOneBoard.hide();
    gameTwoBoard.show();
    gameThreeBoard.hide();
  })
    gameThreeCards.forEach(function () {
      gameThreeBoard.append(gameThreeCards.sort(()=>Math.random()-0.5));
  });
    gameThreeBoard.hide();
    $(".btn3").on("click", function(){
      gameOneBoard.hide();
      gameTwoBoard.hide();
      gameThreeBoard.show();
  
    })
  var cards = $(".cardWrapper");
  function checkFlip() {
    if (lock) {
      return true;
    }
    if (this === card1) {
      return;
    }
    $(this).addClass("turn");
    if (!turnedCard) {
      turnedCard = true;
      card1 = this;
    } else {
      card2 = this;
      if (card1.dataset.cardvalue === card2.dataset.cardvalue) {
        $(card1).off("click", checkFlip);
        $(card2).off("click", checkFlip);
        reset();
      } else {
        lock = true;
        setTimeout(() => {
          $(card1).removeClass("turn");
          $(card2).removeClass("turn");
          reset();
        }, 1500);
      }
    }
  }
  function reset() {
    [turnedCard, lock] = [false, false];
    [card1, card2] = [null, null];
  }
  cards.each(function () {
    $(this).on("click", checkFlip);
  });
});
