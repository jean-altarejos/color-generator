function simpleColor() {
   const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

   let btn = document.getElementById("btnClick");
   btn.addEventListener("click", function(){
        let randomNumber = Math.floor(Math.random() * colors.length);
        let colorCode = document.querySelector(".color-code");
        colorCode.innerHTML = colors[randomNumber];
        document.body.style.backgroundColor = colors[randomNumber];
        
   });
}


function hexColor(){

   let btn = document.getElementById("btnClick");
   btn.addEventListener("click", function(e){
      let randomHexCode = ['#'];
      for (let i = 0; i < 6; i++){
           let newHexCode = 0;
           newHexCode = Math.floor(Math.random() * 16);
           if (newHexCode >= 10){
               switch (newHexCode) {
                  case 10:
                     newHexCode = 'A';
                     break;

                  case 11:
                     newHexCode = 'B';
                     break;
                  
                  case 12:
                     newHexCode = 'C';
                     break;

                  case 13:
                     newHexCode = 'D';
                     break;

                  case 14:
                     newHexCode = 'E';
                     break;

                  case 15:
                     newHexCode = 'F';
                     break;
                  default:
                     break;
               }
           }
           randomHexCode.push(newHexCode);
      }

      let colorCode = document.querySelector(".color-code");
      randomHexCode = randomHexCode.join('');
      colorCode.innerHTML = randomHexCode;
      document.body.style.backgroundColor = randomHexCode;
   });
}