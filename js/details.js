
const details = document.querySelector (".details");
const idElement = document.querySelector (".id");
const queryString = document.location.search;

const params =  new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url =`https://breakingbadapi.com/api/characters/${id}`; 

console.log(url);

let payload ={ };

function creatHtml(){
  console.log({payload,id});

if (Object.keys(payload).length){
  idElement.innerText = id;

details.innerHTML = "";
  details.innerHTML += `<h1>${payload.name}</h1>
  <p>${payload.occupation[0]}<span class="id"></span></p>`

  }
                                                 
}
async function fetchApi(){

  try{
    const response = await fetch(url);
    const data = await response.json();
    console.log({data});
    payload = {...data[0]};
    creatHtml();
  }
  catch(error){
    details.innerHTML = message("error", error)
  }
}



 fetchApi()


