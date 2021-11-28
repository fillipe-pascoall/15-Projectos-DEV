/*
 Este software foi criado pelo o programador abaixo!!!!

     *Nome→ Fillipe Pascoall
     *Nacionalidade→ Angolana
     *Email→ pascoalfilipe5@gmail.com
     *Morada→ Viana/ Luanda/ Angola
     *Telefone→ +244 941556751
     *Telegram→ @Fillipe5 / t.me/Fillipe5
     *Facebook → Fillipe Pascoall
     *Whatsapp→ +244 941556751
     *Instagram → @fillipe_pascoall
     *CodePen → fillipe-pascoall
     *GitHub → fillipe-pascoall

*/

var icPlay='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>';
var icPause='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>';
var icRedo='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/></svg>';
var play=document.getElementById("play");
var redo=document.getElementById("redo");
var milSeconds=document.querySelector(".mil-seconds");
var seconds=document.querySelector(".seconds");
var minutes=document.querySelector(".minutes");

var mils=0;
var sec=0;
var min=0;
var time;
play.addEventListener('click',()=> {
   if(play.innerHTML.indexOf("Play")==-1) {
      play.innerHTML="Play &nbsp; "+icPlay;
      clearTimeout(time)
   }else {
      play.innerHTML="Pause &nbsp; "+icPause;
      counting();
   }
});
function counting() {
   time=setTimeout("counting()",2);
   mils++;
   if(mils==100) {
      sec++;
      seconds.innerHTML=sec;
      mils=0;
   }
   if(sec==60) {
      min++;
      minutes.innerHTML=min;
      sec=0;
   }
   if(mils<10) {
      mils="0"+mils;
   }
   if(sec<10) {
      seconds.innerHTML="0"+sec;
   }
   milSeconds.innerHTML=mils;
}
redo.addEventListener('click',()=> {
   mils=0;
   sec=0;
   min=0;
});



/*          ****Aqui terminou****        */
