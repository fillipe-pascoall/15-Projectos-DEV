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
     *CodePen → fillipe_pascoall
     *GitHub → fillipe-pascoall

*/
var tela=document.getElementById("tela");
var res=document.getElementById("result");


function clearAll() {
   tela.value="";
   res.value="";
}
function backspace() {
   tela.value=tela.value.substring(0,tela.value.length-1);
}
function insert(x) {
   tela.value+=x;
}
function plusAndMinus() {
   (tela.value.substring(0,1)=="-")?
   tela.value=tela.value.substring(1,tela.value.length):tela.value="-"+tela.value;
}
function porcent() {
   (tela.value=="")?res.value="":res.value=eval(tela.value)/100;
}
function equal() {
   (tela.value=="")?res.value="":res.value=eval(tela.value);
}



/*          ****Aqui terminou****        */
