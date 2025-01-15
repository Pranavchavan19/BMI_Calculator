const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const newr=   document.querySelector('#newresult').value;

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
   
    results.innerHTML = `<span>${bmi}</span>`;
     
    if(bmi <18.6)
      {
        results.innerHTML  +=  ` </br> You are not fit`
      }
      else if(bmi > 24.9)
        {
          results.innerHTML +=  ` </br> You are Too much weighted`
        }
       else if(bmi >18.6 || b< 24.9)
        {
          results.innerHTML +=  ` </br> You are  fit`
        }
        else
        {
          results.innerHTML += ` </br>You did some mistake`
        }
    
    
  } 
});



// Scroll detection on the results container
const results = document.querySelector('#results');

results.addEventListener('scroll', function() {
  if (results.scrollTop + results.clientHeight >= results.scrollHeight) {
    console.log('Reached the bottom of the results');
    // You can add any action here, like loading more content
  }
});
