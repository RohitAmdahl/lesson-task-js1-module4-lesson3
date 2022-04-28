
const details = document.querySelector (".details");

const querystring = document.location.search;

const params =  URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url ="https://breakingbadapi.com/api/characters/"; 


console.log(url);


async function fetchApi(){

  try{
    const response = await fetch(url);
    const  details = await response.json();
    console.log(details);
  }
  catch(error){
    details.innerHTML = message("error", error)
  }
}

fetchApi()

function creatHtml(details){

  details.innerHTML += `<h1>${details.name}</h1>
                              <p>${details.occupation}<span class="id"></span></p>`


                         

}