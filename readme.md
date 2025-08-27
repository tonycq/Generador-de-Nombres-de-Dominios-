# 🌐 Generador de Dominios  

Este proyecto es un generador de nombres de dominio que combina diferentes listas de **pronombres**, **adjetivos**, **sustantivos** y **extensiones**. Además, implementa una validación para detectar posibles **domain hacks**, es decir, cuando una palabra termina con las letras de una extensión (por ejemplo: `desarrolladores` + `.es` → `desarrollador.es`).  

## 🚀 Características  
- Genera automáticamente una lista de dominios combinando:  
  - Pronombres  
  - Adjetivos  
  - Sustantivos  
  - Extensiones de dominio (`.com`, `.net`, `.es`, etc.)  
- Detecta **domain hacks** para crear dominios más creativos.  
- Muestra los resultados en una lista (`<ul>`) dentro de la página.  

## 📂  Tecnologias Utilizadas

Javascript     # Contiene la lógica del generador de dominios
