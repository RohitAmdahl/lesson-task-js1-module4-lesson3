const url = "https://breakingbadapi.com/api/characters/";

const options = document.querySelector(".details")

  async function MakeApiCall(){
    const response = await fetch(url);
    const details = await response.json();

    console.log(details); 

  
}

MakeApiCall()