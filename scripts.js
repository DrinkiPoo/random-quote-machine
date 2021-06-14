fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    //console.log(`${data.content} —${data.author}`)
    document.getElementById("text").textContent = `"${data.content}"`;
    document.getElementById("author").textContent = `~ ${data.author}`;
  })

function getNewQuote(){
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
     document.getElementById("text").textContent = `"${data.content}"`;
    document.getElementById("author").textContent = `~ ${data.author}`;
  })
}