const stars = document.querySelectorAll(".rating-star-icon");

stars.forEach((star, clickedIdx) => {
    star.addEventListener("click", () => {
       stars.forEach((otherStar, otherIdx) => {
           if(otherIdx <= clickedIdx){
               otherStar.classList.add("rating-star-icon-active");
           }
           else{
               otherStar.classList.remove("rating-star-icon-active")
           }
       })
       
    })
}) 
