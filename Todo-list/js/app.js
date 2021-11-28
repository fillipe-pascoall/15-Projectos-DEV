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

var updated=document.getElementById("date");
var taskEnter=document.getElementById("task-enter");
var taskAdd=document.getElementById("task-add");
var taskStore=document.getElementById("task-store");
var taskStored=document.querySelectorAll(".task-stored");
var taskDelete=document.getElementById("task-delete");

var date=new Date();
var ww=date.getDay(),
dd=date.getDate(),
mm=date.getMonth(),
yy=date.getFullYear();
var nw=["Sunday","Monday","Thursday","Wednesday","Tuesday","Friday","Saturday"];
var nm=["January","February","March","April","May","June","July","August","September","October","November","December"];
var rem;

updated.innerHTML='<span class="weeks">'+nw[ww]+'</span> '+dd+' '+nm[mm]+' '+yy+'';
taskDelete.addEventListener('click',()=> {
   taskEnter.value="";
   rem.forEach(x => {
      x.remove();
   });
});
taskAdd.addEventListener('click',()=> {
   if(taskEnter.value=="") {
      taskEnter.classList.add("error");
      taskEnter.focus();
   }else {
      taskEnter.classList.remove("error");
      taskStore.innerHTML+='<div class="task-stored" onclick="select(this)">'+taskEnter.value+'</div>';
      taskEnter.value="";
   }
});
function select(a) {
   if(a.style.textDecoration!="line-through") {
      a.style.textDecoration="line-through";
      a.classList.add("remoble");
      rem=document.querySelectorAll(".remoble");

   }else {
      a.style.textDecoration="none";
      a.classList.remove("remoble");

   }
}



/*          ****Aqui terminou****        */
