//Business Logic

// UI Logic
  



  function checkSides(event) {
    event.preventDefault();
    console.log("hi");
    const inp1 = parseInt(document.querySelector("#side1").value);
    const inp2 = parseInt(document.querySelector("#side2").value);
    const inp3 = parseInt(document.querySelector("#side3").value);
    console.log(inp1,inp2,inp3);
    sumA = (inp1 + inp2);
    sumB = (inp1 + inp3);
    sumC = (inp2 + inp3);
      if (sumA === sumB && sumB === sumC){
       alert("Equilateral"); 
      }   
      if (sumA != sumB && sumB === sumC){
        alert("Isosceles");
      } 
      if (sumA === sumB && sumB != sumC){
        alert("Isosceles");
      }
      // if (sumA != sumB && sumB != sumC){
      //   alert("Scalene");
      // }
      if(sumA < inp3 || sumB < inp2 || sumC < inp1) {
        alert("sorry, this is not a triangle, try the page for squares");
      } else {
        alert("Scalene");
      }

  }


  window.addEventListener("load", function(){
    const form = document.querySelector("#tracker");
    form.addEventListener("submit", checkSides);
  });  













