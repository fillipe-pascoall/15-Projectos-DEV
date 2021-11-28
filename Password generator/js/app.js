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
var btn=document.querySelector(".btn");
var display=document.querySelector(".input");
var str=["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890#_!?"];
var num=6;


select.addEventListener('change',()=> {
   num=select.value;
});
btn.addEventListener('click',()=> {
   display.value="";
   for (var i=0; i < num; i++) {
      var aleat=Math.round(Math.random()*65);
      display.value+=str[0][aleat];
   }
   // alert(str[0].length);
});



/*          ****Aqui terminou****        */
