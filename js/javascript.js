var words = ["Un operatore logistico &#128666;", "Ragioniere programmatore &#128187;", "Un'attenta osservatrice &#129300;", "Una persona entusiasta e propositiva &#129488;", "Una figura in costante aggiornamento &#9851;", "...ed in costante crescita professionale &#128200;", "Una ragazza curiosa ed intraprendente &#129300;", "Una persona seria ed affidabile &#128188;","Portatrice sana di buon umore! &#128522;"];
var counter = 0;
var word = document.getElementById("elencoparole");
setInterval(update_carousel_words, 2500);
function update_carousel_words(){
  word.innerHTML= words[counter];
  counter++;
  if(counter>=words.length){
    counter=0;
  }
}
