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

var week=document.querySelector(".week");
var month=document.querySelector(".month");
var year=document.querySelector(".year");
var dia=document.querySelectorAll(".col");


var d=new Date();
var dd=d.getDate(),
ww=d.getDay(),
mm=d.getMonth(),
yy=d.getFullYear();

var nw=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var nm=["January","February","March","April","May","June","July","August","September","October","November","December"];

week.innerHTML=nw[ww];
month.innerHTML=nm[mm];
year.innerHTML=yy;

dia.forEach(x=> {
   if(x.innerHTML==dd) {
      x.classList.add("d-actual")
   }
});





/*          ****Aqui terminou****        */
