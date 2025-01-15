

// Array of predefined colors for unique logs
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#8E44AD', '#E74C3C', '#2ECC71', '#3498DB', '#F39C12'];

// Variable to track which color to use
let colorIndex = 0;

// Scroll detection on the results container
const results = document.querySelector('#results');

results.addEventListener('scroll', function() {
  if (results.scrollTop + results.clientHeight >= results.scrollHeight) {
    // Select the color based on the current index
    const color = colors[colorIndex];
    
    // Log the message with the unique color
    console.log('%cReached the bottom of the results', `color: ${color}`);
    
    // Move to the next color, cycle through the colors
    colorIndex = (colorIndex + 1) % colors.length;  // Cycle through colors in the array
  }
});










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

