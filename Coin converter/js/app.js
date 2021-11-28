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
var btnConvert=document.querySelector(".btn-convert");
var btnChance=document.querySelector(".btn-change");
var firstC=document.querySelector(".first-currency");
var secondC=document.querySelector(".second-currency");
var firstD=document.querySelector(".first-display");
var secondD=document.querySelector(".second-display");




firstC.addEventListener('change',firstChange);
secondC.addEventListener('change',secondChange);

function firstChange() {
   if(firstC.value=="dollar") {
      secondC.children[0].setAttribute("disabled","true");
      secondC.children[2].setAttribute("selected","true")
   }else {
      secondC.children[0].removeAttribute("disabled");
   }
   if(firstC.value=="euro") {
      secondC.children[1].setAttribute("disabled", "true");
   }else {
      secondC.children[1].removeAttribute("disabled");
   }
   if(firstC.value=="kwanza") {
      secondC.children[2].setAttribute("disabled","true");
      secondC.children[2].removeAttribute("selected");
   }else {
      secondC.children[2].removeAttribute("disabled");
   }
   if(firstC.value=="reais") {
      secondC.children[3].setAttribute("disabled", "true");
   }else {
      secondC.children[3].removeAttribute("disabled");
   }
}
firstChange();
function secondChange() {
   if(secondC.value=="dollar") {
      firstC.children[0].setAttribute("disabled","true");
      firstC.children[2].setAttribute("selected","true")
   }else {
      firstC.children[0].removeAttribute("disabled");
   }
   if(secondC.value=="euro") {
      firstC.children[1].setAttribute("disabled", "true");
   }else {
      firstC.children[1].removeAttribute("disabled");
   }
   if(secondC.value=="kwanza") {
      firstC.children[2].setAttribute("disabled","true");
      firstC.children[2].removeAttribute("selected");
   }else {
      firstC.children[2].removeAttribute("disabled");
   }
   if(secondC.value=="reais") {
      firstC.children[3].setAttribute("disabled", "true");
   }else {
      firstC.children[3].removeAttribute("disabled");
   }
}
secondChange();
btnConvert.addEventListener('click',()=> {
   if(firstD.value!="" && firstC.value=="dollar" && secondC.value=="kwanza") {
      let val=firstD.value;
      secondD.value=val*594.21;
   }
   if(firstD.value!="" && firstC.value=="dollar" && secondC.value=="euro") {
      let val=firstD.value;
      secondD.value=val*0.89;
   }
   if(firstD.value!="" && firstC.value=="dollar" && secondC.value=="reais") {
      let val=firstD.value;
      secondD.value=val*5.61;
   }
   if(firstD.value!="" && firstC.value=="euro" && secondC.value=="dollar") {
      let val=firstD.value;
      secondD.value=val*1.13;
   }
   if(firstD.value!="" && firstC.value=="euro" && secondC.value=="kwanza") {
      let val=firstD.value;
      secondD.value=val*671.43;
   }
   if(firstD.value!="" && firstC.value=="euro" && secondC.value=="reais") {
      let val=firstD.value;
      secondD.value=val*6.33;
   }
   if(firstD.value!="" && firstC.value=="kwanza" && secondC.value=="dollar") {
      let val=firstD.value;
      secondD.value=val*0.0017;
   }
   if(firstD.value!="" && firstC.value=="kwanza" && secondC.value=="euro") {
      let val=firstD.value;
      secondD.value=val*0.0015;
   }
   if(firstD.value!="" && firstC.value=="kwanza" && secondC.value=="reais") {
      let val=firstD.value;
      secondD.value=val*0.0094;
   }
   if(firstD.value!="" && firstC.value=="reais" && secondC.value=="dollar") {
      let val=firstD.value;
      secondD.value=val*0.18;
   }
   if(firstD.value!="" && firstC.value=="reais" && secondC.value=="euro") {
      let val=firstD.value;
      secondD.value=val*0.16;
   }
   if(firstD.value!="" && firstC.value=="reais" && secondC.value=="kwanza") {
      let val=firstD.value;
      secondD.value=val*105.94;
   }
});
btnChance.addEventListener('click',()=> {
   let fVal=firstC.value;
   let sVal=secondC.value;
   firstC.value=sVal;
   secondC.value=fVal;
   firstChange();
   secondChange();
});



/*          ****Aqui terminou****        */
