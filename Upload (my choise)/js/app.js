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

var article=document.getElementById("article");
var file=document.getElementById("file");
var mask=document.getElementById("mask");



function seleted(x) {
  var v=x.target.files[0];
  var reader=new FileReader();
  reader.addEventListener('load', (e) => {
       var img=document.createElement("img");
       img.src=e.target.result;
       img.className="image";
       article.style.paddingTop="0"
       article.prepend(img);
  });
  mask.style.display="none";
  reader.readAsDataURL(v);
}
file.addEventListener('change',seleted);



/*          ****Aqui terminou****        */
