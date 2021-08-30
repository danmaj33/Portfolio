const requestURL = "https://danmaj33.github.io/Portfolio/JS/servicescardsjson.json";



fetch(requestURL)
  .then(function(response){
    return response.json();
  })
  .then(function (jsonObject) {
    //   console.table(jsonObject);
      
      const portfolios = jsonObject['portfolios'];


// For loop for cycling through each profile
    for (let i = 0; i < portfolios.length; i++ ) {

          //   Creating the element is here VVVVVVVVVVVVVVVV
        let link = document.createElement('a');
        link.setAttribute("href", portfolios[i].link);
        let card = document.createElement('div');
        card.setAttribute("class","item");
        let h3 = document.createElement('h3');
        let image = document.createElement('img');

        
//   Output is here VVVVVVVVVVVVVVVV
       
        h3.textContent = portfolios[i].name;
        image.setAttribute('src', portfolios[i].imageurl);
        image.setAttribute('alt', portfolios[i].name + 'Logo');

        
       

       link.appendChild(card);
        card.appendChild(h3);
        card.appendChild(image);
        
                 // where is goes V in div.cards
                 
        document.querySelector('div.portfolio').appendChild(link);
  }
});
   
   




 