let pronombre = ["los", "tus"];
let adjetivo = ["excelentes", "grandes"];
let sustantivo = ["Corredores", "desarrolladores"];
let extensiones = [".com", ".net", ".es", ".io", ".cl"];

function generadorDominios() {



  for(let p = 0; p< pronombre.length; p++) {
        
    for(let a = 0; a < adjetivo.length; a ++) {
        
    for(let s = 0; s < sustantivo.length; s ++) {
          
    for(let e = 0; e < extensiones.length; e ++){
     validarHack(pronombre[p], adjetivo[a], sustantivo[s].toLowerCase(), extensiones[e]);
       
  }
    }
      }
        }

           }
          
  function validarHack (p,a,s,e){
      
    let eSinPunto = e.slice(1)

    if (s.endsWith( eSinPunto)){
let hack = s.slice(0,s.length - eSinPunto.length) + '.'+eSinPunto
 console.log(p+a+hack)

 }else {
   console.log(p+a+s+e)
    }
      
        }

          


generadorDominios();
