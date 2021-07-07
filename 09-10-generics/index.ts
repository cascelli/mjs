interface Photo {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string  
}

// fetch('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=03')
//   .then(res => res.json())
//   .then((data: Photo[]) => {
//     console.log(data.map)
//   })

fetch('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=03')
  .then(res => res.json())
  .then(data => {
    
  })


  newFetch<Photo[]>('http://jsonplaceholder.typicode.com/photos?_start=0&_limit=03')
    .then(photos => {
      photos.map( photo => photo.title)
    })
  
    
  
  async function newFetch <T> (url: string)  { // <T>  => Declarado um tipo Generic
    const res = await fetch(url)
    // const data = await res.json()
    // return data as T

    // Forma simplificada
    const data: T = await res.json() // já iform quie data é do tipo generic (<T>)
    return data

  }

