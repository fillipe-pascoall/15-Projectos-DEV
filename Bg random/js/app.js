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

var colorCode=document.querySelector(".color-code");
var str=['a','b','c','d','e','f',1,2,3,4,5,6,7,8,9,0];

function random() {
  colorCode.innerHTML=""
  setTimeout("random()",3000);
  for (var i = 0; i < 6; i++) {
      var aleat=Math.round(Math.random()*15);
      colorCode.innerHTML+=str[aleat];
  }
  var code="#"+colorCode.innerHTML;
  document.bgColor=code;
  colorCode.innerHTML=code;
}
random();



/*          ****Aqui terminou****        */
