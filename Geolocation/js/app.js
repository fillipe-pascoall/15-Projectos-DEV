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

var url="http://ip-api.com/json/?fields=66322431";
var myIp=document.querySelector(".my-ip");
var myContinent=document.querySelector(".my-continent");
var myCountry=document.querySelector(".my-country");
var myCurrency=document.querySelector(".my-currency");


fetch(url).then(resp => {
   let data=resp.json();
   return data;
}).then(data => {
   myIp.innerHTML=data.query;
   myContinent.innerHTML=data.continent;
   myCountry.innerHTML=data.country;
   myCurrency.innerHTML=data.currency
}).catch(error => {
   alert(error)
})



/*          ****Aqui terminou****        */
