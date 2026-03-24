
const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");
const AllDeleteBtn = document.getElementById("AllDeleteBtn");
const sortBtn =document.getElementById("sortBtn");
const searchIcon = document.getElementById("searchIcon");
inputBox.addEventListener("keydown",function(e){
    if(e.key ==="Enter"){
        addTask()
    }
})
function  addTask() {
         if(inputBox.value ===""){
          alert ("you must add something")
         }
         else{
            let li =document.createElement("li");
            let textSpan = document.createElement("span");
            textSpan.innerHTML=inputBox.value;
            textSpan.className ="task-text";
            textSpan.contentEditable=true;
          
            let closespan =document.createElement("span");
             closespan.innerHTML = "❌";
            closespan.className="close-btn";
            closespan.contentEditable=false;
            li.appendChild(textSpan);
            li.appendChild(closespan);
            list.appendChild(li);
         } 
         inputBox.value ="";
}
  list.addEventListener("click", function(e) {
    if(
      e.target.classList.contains("close-btn")){
        e.target.parentElement.remove();
      }
    
    else   if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
      }
      
      
  },false
  );
  AllDeleteBtn.addEventListener("click",function(){
    list.innerHTML= "";

  })
  sortBtn.addEventListener("click",function(){
    let items = Array.from(list.getElementsByTagName("li"));
    items.sort((a,b) =>{
      return a.textContent.localeCompare(b.textContent);
    });
    list.innerHTML="";
    items.forEach(item => {
      list.appendChild(item);
    })
  })
  searchIcon.addEventListener("click",function(){
    inputBox.classList.toggle("active");
    inputBox.focus();
  })