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

var btnSub=document.getElementById("btn-submit");
var inputText=document.querySelectorAll(".input-text");
var valid=document.getElementById("valid");
var validName=document.getElementById("valid-name");
var validUser=document.getElementById("valid-user");
var validNum=document.getElementById("valid-number");
var validDate=document.getElementById("valid-date");
var validPass=document.getElementById("valid-pass");
var validConf=document.getElementById("valid-confirm");
var validTerms=document.getElementById("valid-terms");




btnSub.addEventListener('click',()=> {
   if(fullName.value=="") {
      validName.innerHTML="The name field should not be empty!";
   }
   if(user.value=="") {
      validUser.innerHTML="The user field should not be empty!";
   }
   else if(user.value.includes("-")!=true) {
      validUser.innerHTML="The user name must contain underline ('_')";
   }
   if(number.value=="") {
      validNum.innerHTML="The number field should not be empty!";
   }
   else if(number.value.length>9 || number.value.length<9) {
      validNum.innerHTML="The number field must contain 9 numbers!";
   }
   if(date.value=="") {
      validDate.innerHTML="The date field should not be empty!";
   }
   else if(date.value.length>10) {
      validDate.innerHTML="The date field must only contain a maximum of 10 character!";
   }
   else if(date.value.indexOf("/")==-1) {
      validDate.innerHTML="The date is not correct. try ##/##/19##";
   }
   if(pass.value=="") {
      validPass.innerHTML="The password field should not be empty!";
   }
   if(confirmPass.value=="") {
      validConf.innerHTML="The password confirm field should not be empty!";
   }
   else if(confirmPass.value!=pass.value) {
      validConf.innerHTML="Different passwords!";
   }
   if(check.checked!=true) {
      check.parentNode.style.color="#F02E2E";
   }
});




/*          ****Aqui terminou****        */
