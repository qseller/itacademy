let face=document.getElementById('top');
face.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
face.style.fonyStyle='italic';
face.style.color='blue';

let onei=document.getElementById('gar');
onei.style.color='black';
onei.style.fontSize='30 px';
onei.style.fontWeight='800';

let twoi=document.getElementById('date');
twoi.style.color='green';

let threei=document.getElementById('earth');
threei.style.color='red';

let parg=document.getElementsByClassName('paragraf');
for ( let p=0; p<parg.length; p++ ) {
  parg[p].style.color='brown';
  parg[p].style.margin='0';
  parg[p].style.padding='0';
}