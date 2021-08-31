
let list = document.getElementById('charactersList')
const imageindex = [0, 1, 2, 3,4,5,6,7,8]
const searchBar = document.getElementById('searchBar')
const pop =document.getElementById('popup')
const popbody=document.getElementById('popbody')
const popimg=document.getElementById('popimg')
const bodytext=document.getElementById('bodytext')
const bodytex2=document.getElementById('bodytext2')
const bodytex3=document.getElementById('bodytext3')
const bodyt5=document.querySelector('#body5')
hey()
function popup(){
    pop.classList.remove('close')
    bodyt5.classList.remove('key')
  
    
}


function hey() {
    fetch('https://www.omdbapi.com/?apikey=5a06b1e0&s=avenger')
        .then(res => res.json())
        .then(data => {
            const data1=data.Search
            salam(data1)
            
           
         
        })
}



function salam(data1) {
    imageindex.forEach((i) => {
        let div=document.createElement('div')
        div.classList.add('divs')
        let image = document.createElement('img')     
        image.src = `${data1[i].Poster}`
        div.classList.add('div')
        image.classList.add('sekil')
        
        div.innerHTML = `<h4 class="text">${data1[i].Title}</h4>`
        div.appendChild(image)                
        list.appendChild(div)
        console.log(data1)

       
   
        div.addEventListener('click',myFunction)
        function myFunction() {
          
           
            pop.classList.add('close')
            bodyt5.classList.add('key')
             
           
          
            
             bodytext.innerHTML="Name:"+data1[i].Title
             bodytex2.innerHTML="imdb"+data1[i].imdbID
             bodytex3.innerHTML="year"+data1[i].Year
           
            popimg.src=`${data1[i].Poster}`
           
           
          }
   
       
    
        searchBar.addEventListener('keyup', (e) => {
            div.appendChild(image)
            list.appendChild(div)
            const searchString = e.target.value.toUpperCase();
            if (data1[i].Title.toUpperCase().includes(searchString)) {

               // image.src = `${data1[i].Poster}`
                //div.innerHTML=`<h4>${data1[i].Title}</h4>`
                //div.appendChild(image)


            } else {
                list.removeChild(div)

                
            }
     

        });


    })


}


///6e8a27a700c6e43c9a97709a6b09688d
