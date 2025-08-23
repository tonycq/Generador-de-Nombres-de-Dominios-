  let pronombre = ["los", "tus"];
  let adjetivo = ["excelentes", "grandes"];
  let sustantivo = ["Corredores", "desarrolladores"];
  let extensiones = [".com", ".net", ".es", ".io", ".cl"];
  let listaDeDominios =[]  // array vacío para guardar los dominios


  function generadorDominios() {

   listaDeDominios = []; // ← evita duplicados si se vuelve a ejecutar

    for(let p = 0; p< pronombre.length; p++) {
          
      for(let a = 0; a < adjetivo.length; a ++) {
          
      for(let s = 0; s < sustantivo.length; s ++) {
            
      for(let e = 0; e < extensiones.length; e ++){

    let dominio = validarHack(
      pronombre[p], 
      adjetivo[a], 
      sustantivo[s].toLowerCase(),
       extensiones[e]
      );
    listaDeDominios.push(dominio); // guardamos el string devuelto
    
        
    }
      }
        }
          }

          return listaDeDominios  // la función devuelve el array

              }
  

    function validarHack (p,a,s,e){
        
      let eSinPunto = e.slice(1)

      if (s.endsWith( eSinPunto)){
  let hack = s.slice(0,s.length - eSinPunto.length) + '.'+eSinPunto
  console.log(p+a+hack)
  return p+a+hack   // devolvemos el dominio con hack

  }else {
    console.log(p+a+s+e)
    return p+a+s+e // // devolvemos el dominio 
      }
        
          }
          // esta función se ejecuta al cargar la página
  document.body.onload = mostrarDominios;
  function mostrarDominios() {
    
    const lista = generadorDominios() // obtencion del array
    const ul = document.createElement('ul') // creacion de la lista <ul>
  
    lista.forEach(dominio => {
      const li = document.createElement("li"); // cada <li>
      li.textContent = dominio;                // se agrega el texto
      ul.appendChild(li);                      // se agrega al ul
    });
            
    document.body.appendChild(ul); // se agrega la lista completa al body
  }


