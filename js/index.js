
const selectElement = document.querySelector("#number_element");

console.log({selectElement});

selectElement.addEventListener("change",function(event){
  const value = parseInt(event.target.value);

  const list = document.querySelector(".list");

  list.innerHTML = "";

  for(let i=1; i<=value; i++) {
    list.innerHTML += `<a class="item" href="details.html?id=${i}">${i}</a>`

  }
  
  //console.log({value})

})


// const url  ="https://breakingbadapi.com/api/characters/"; 
// const options = document.querySelector(".details")

//   async function MakeApiCall(){
//     const response = await fetch(url);
//     const details = await response.json();

//     console.log(details); 


//     for (let i = 0; i < details.length; i++) {
//       console.log(details[i].name);
      
//     }

  
// }

// MakeApiCall()