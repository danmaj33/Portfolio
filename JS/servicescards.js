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
        let image = document.createElement('img');
        let h3 = document.createElement('h3');
        

        
//   Output is here VVVVVVVVVVVVVVVV
        image.setAttribute('src', portfolios[i].imageurl);
        image.setAttribute('alt', portfolios[i].name + 'Logo');
        h3.textContent = portfolios[i].name;
        

        
       

       link.appendChild(card);
       card.appendChild(image);
        card.appendChild(h3);
        
        
                 // where is goes V in div.cards
                 
        document.querySelector('div.portfolio').appendChild(link);
  }
});
   
   




 