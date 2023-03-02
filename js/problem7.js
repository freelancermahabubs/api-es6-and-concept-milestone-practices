const loadPhotos = async() =>{
  const url = `https://jsonplaceholder.typicode.com/photos`
try{
  const res = await fetch(url);
  const data = await res.json();
  showPhots(data)
}
catch(error){
  console.log(error)
}
};
const showPhots = (photos) =>{
  const photosContainer = document.getElementById('photo-container');

  photos.slice(0, 30).forEach(photo => {
   
    const photoDiv = document.createElement('div');
    // console.log(photo)
    const {id, thumbnailUrl} = photo;
    photoDiv.classList.add('col')
    photoDiv.innerHTML = ` 
    <div class="card h-100">
      <img onclick="singleDataLoad('${id}')" src="${thumbnailUrl}" class="card-img-top" alt="...">
      
  </div>  
    `;
    photosContainer.appendChild(photoDiv);
  });
};

const singleDataLoad = async(photoId) =>{
  const URL = `https://jsonplaceholder.typicode.com/photos/${photoId}`
try{
  const res = await fetch(URL);
  const data = await res.json();
  singleDetailsShow(data)
}
catch(error){
  console.log(error)
}

};


const singleDetailsShow = (single) =>{
  console.log(single)
  const {thumbnailUrl, title} = single;
  const singleDataContainer = document.getElementById('details');
  singleDataContainer.innerHTML = `
      <img  src="${thumbnailUrl}"  class="w-25 mx-auto" alt="...">
      <P>${title}</p>
      </div> 
  `;
}
loadPhotos()

