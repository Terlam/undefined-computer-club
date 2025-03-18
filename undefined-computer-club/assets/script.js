const TextElement = document.querySelector('#text');//This is like the text that is being displayed on the screen
const words = ["Kakooza ","Harunah" ]  //array of words that are to be typed in
let wordindex = 0; //This is like the positionn of the word in the array 
let charindex = 0; //This is like the position of the character in the word   
let isDeleting = false; //This is like a boolean that checks if the word is being deleted or not

function typeffect(){ 
    let currentword = words[wordindex]; //This acces the first word in the words array(by default)
    let displayedtext = isDeleting ? currentword.substring(0,charindex--)  : currentword.substring(0,charindex++); 
     //This is like the text that is being displayed  on the screen  and it checks if the word is being deleted or not
     TextElement.textContent = displayedtext;
     let typingspeed = isDeleting ? 50 : 100; //This is like the speed at which the text is being typed in
   if(!isDeleting && displayedtext ===currentword){
      typingspeed = 1000;
      isDeleting = true;
   } else if(isDeleting && displayedtext ===""){
      isDeleting = false;
      wordindex = (wordindex + 1) % words.length
      typingspeed = 500;

   }
   
   setTimeout(typeffect,typingspeed)

   }
   document.addEventListener("DOMContentLoaded",typeffect)
   ///this is where the thumbnail interactivity code begins
   const thumb_nail = document.querySelector('.thumb_nail')
   const modal = document.getElementById('modal');
   const full_image = document.getElementById('full_image');
   thumb_nail.addEventListener('click', ()=>{
      full_image.src = thumb_nail.src;
      modal.classList.remove('hidden');
    setTimeout( ()=>{
      full_image.classList.remove("scale-0")
    },50 )
   });
   modal.addEventListener('click',(e)=>{
      if(e.target !==full_image){
         full_image.classList.add("scale-0");
         setTimeout(()=>{
            modal.classList.add('hidden')
         },300)
      }
   })