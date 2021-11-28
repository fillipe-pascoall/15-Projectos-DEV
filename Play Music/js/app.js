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

var audio=document.getElementById("audio");
var prev=document.getElementById("prev");
var next=document.getElementById("next");
var playPause=document.getElementById("play-pause");
var title=document.getElementById("title");
var img=document.getElementById("image");

var audios=["audio/Penny on M.A.R.S. - So Sure.mp3","audio/Jonas Blue - Mama ft. William Singe.mp3"];
var count=0;

playPause.addEventListener('click',playing);
function playing() {
   if(audio.paused) {
      audio.play();
      playPause.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/></svg>';
   }else {
      audio.pause();
      playPause.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>';
   }
}
prev.addEventListener('click',()=> {
   if(count=0) {
      count=0;
   }
   if(count=1) {
      count=0;
   }
   img.src="img/radio.jpg";
   title.innerHTML="Penny on M.A.R.S. - So Sure";
   audio.src=audios[count];
   playing();
});
next.addEventListener('click',()=> {
   if(count=0) {
      count++;
   }
   if(count=1) {
      count=1;
   }
   img.src="img/disco.jpg";
   title.innerHTML="Jonas Blue - Mama ft. William...";
   audio.src=audios[count];
   playing();
});




/*          ****Aqui terminou****        */
