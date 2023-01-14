//Declarar variables

let activado = false;
let btn = document.getElementById('sol'),
    body = document.getElementById('body'),
    hs = document.querySelectorAll('.hs');
    nav = document.getElementById('nav'),
    az = document.querySelectorAll('.az'),
    sn = document.querySelectorAll('.sn'),
//Esta es la funcionalidad antes de activar la funcion 
    body.classList.remove('blanco')
  hs.forEach(e => {e.classList.remove('hnegro')});
  az.forEach(e => {e.classList.remove('azuldark')});
   sn.forEach(e => {e.classList.remove('soln')});
   nav.classList.remove('navbar-light');
 

   if(body.classList=='blanco'){
    nav.classList.remove('navbar-dark')
    nav.classList.add('navbar-light')

  }else if(body.classList=='negro'){
    nav.classList.add('navbar-dark')
    nav.classList.remove('navbar-light')
  }

   function cambio(){
//Funcionalidad del modo oscuro
    if(activado === false){
      body.classList.add('negro')
      body.classList.remove('blanco');
      hs.forEach(e => {e.classList.remove('hnegro')});
      sn.forEach(e => {e.classList.remove('soln')});
      az.forEach(e => {e.classList.remove('azuldark')});


      if(body.classList=='blanco'){
        nav.classList.remove('navbar-dark')
        nav.classList.add('navbar-light')
      }else if(body.classList=='negro'){
        nav.classList.add('navbar-dark')
        nav.classList.remove('navbar-light')
      }

     
}else{
//Funcionalidad modo claro
  body.classList.add('blanco')
  body.classList.remove('negro')
  hs.forEach(e => {e.classList.add('hnegro')});
  sn.forEach(e => {e.classList.add('soln')});
  az.forEach(e => {e.classList.remove('azulclaro')});

if(body.classList=='blanco'){
  nav.classList.remove('navbar-dark')
  nav.classList.add('navbar-light')
}else if(body.classList=='negro'){
  nav.classList.add('navbar-dark')
  nav.classList.remove('navbar-light')
}
}}



btn.addEventListener('click',()=>{
	
	activado = !activado;
	cambio();
	
})