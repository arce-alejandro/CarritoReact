

const urlBase = "http://localhost:8080/api/prueba/"

     
// export const fetchMyAPI = (async () => {
//     let response = await fetch(`${urlBase}categorias/buscartodos`)
//     response = await response.json()

    
//   })

  // const fetchMyAPI = (async () => {
  //   const response = await fetch('http://localhost:8080/api/prueba/categorias/buscartodos',{method: 'GET'})
  //   const data= await response.json()
  //   const {result} = data 
  //   setListaCategorias(result)
  // })
export const obtenerCategorias= () =>{


  fetch(`${urlBase}categorias/buscartodos`)
  .then(res => res.json())
  // .then(res => setListaCategorias(res.data))
}
