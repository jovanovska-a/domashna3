function start()
{
  var ind1,ind2,ind3,max,correct=0;
  var niza=["whistle","mystery","capture","blinker","sapphire","thunder","light","journey","secret","crystal"];
  var word,incorrects=[];
  var resetBtn=document.getElementById("reset-btn");
  var typingInput=document.getElementById("typing-input");
  var guessLeft=document.querySelector(".guess-left span");
  function pickWord()
  {
    max=5;
    guessLeft.innerText=max;
    let ind=Math.floor(Math.random()*10);
    word=niza[ind];
    ind1=Math.floor(Math.random()*word.length);
    console.log(ind1);
    ind2=Math.floor(Math.random()*word.length);
    if(ind2==ind1)
    {
      while(ind2==ind1)
      {
        ind2=Math.floor(Math.random()*word.length);
      }
    }
    console.log(ind2);
    ind3=Math.floor(Math.random()*word.length);
    if(ind3==ind1 || ind3==ind2)
    {
      while(ind3==ind1 || ind3==ind2)
      {
        ind3=Math.floor(Math.random()*word.length);
      }
    }
    console.log(ind3);
    console.log(word);
    let html="";
    for(let i=0;i<word.length;i++)
    {
      html+=`<input type="text" disabled>`;
    }
    document.getElementById("inputs").innerHTML=html;
    inputs.querySelectorAll("input")[ind1].value=word.charAt(ind1);
    inputs.querySelectorAll("input")[ind2].value=word.charAt(ind2);
    inputs.querySelectorAll("input")[ind3].value=word.charAt(ind3);
  }
  pickWord();

  function initGame(e)
  {
    var key=e.target.value;
    console.log(key);
    if(key===word)
    {
      alert(`Congrats.You found the word ${word.toUpperCase()}`);
      pickWord();

    }
    else
    {
      if(max>1)
      alert("Try Again");
      max--;
      guessLeft.innerText=max;
   
    }
    typingInput.value="";
    if(max<1)
    {
      alert("Game Over");
      for(var i=0;i<word.length;i++)
      {
        inputs.querySelectorAll("input")[i].value=word.charAt(i);
      }
      
      setTimeout(() => {pickWord();
      }, 4000);
      
    }//
  }
  resetBtn.addEventListener("click",pickWord,false);
  typingInput.addEventListener("change",initGame);
}
window.addEventListener("load",start,false);
