let ratingElements= document.querySelectorAll('.rating-js');
ratingElements.forEach((ratingElement)=>{
  ratingElement.addEventListener("click", function(){
  const result = ratingElement.innerHTML;
  // console.log(result);
  localStorage.setItem('selectedRating', result);
})
})
window.addEventListener('DOMContentLoaded', ()=> {
  const result = localStorage.getItem('selectedRating');
  const element= document.querySelector('#result-section');
  if(result){
   element.innerHTML =`You selected ${result} out of 5`;
  } 
  else {
   element.innerHTML = `No rating selected`;
  }
  localStorage.clear();
})


