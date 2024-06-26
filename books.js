var bookName = document.getElementById('bookname');
var bookCopy=document.getElementById('bookcopy');
var bookPages=document.getElementById('bookpages');
var bookBtn=document.getElementById('bookBtn');
var prinBtn=document.getElementById('print');


var total=document.getElementById('total');

 var arryList=[];
 
 arryList=JSON.parse(localStorage.getItem('bookscontainer')) ;
 
DisplayData();
 
   
  
 
function getPrice(){
    
    if(bookCopy !=''){
        var price= +bookCopy.value * (((+bookPages.value/16)*2)+9.5+2.5) ; 
   total.innerHTML=price;
   total.style.background='#040';
    }

    if(bookPages !=''){
        var price= (((+bookPages.value/16)*2)+9.5+2.5) ; 
   copy.innerHTML=price;
   copy.style.background='#040';
    }

    else{
        total.innerHTML='';
        total.style.background='rgb(189, 29, 29)';

        copy.innerHTML='';
        copy.style.background='rgb(189, 29, 29)';
    }
    
   
}

bookBtn.addEventListener('click',function(){
    getPrice();
    
     var book = {
   bookname: bookName.value,
    copy: bookCopy.value,
    pages: bookPages.value,
    total: total.innerHTML,

  };
  
  if (arryList === null) {
    arryList = []; }


  arryList.push(book);
  localStorage.setItem('bookscontainer', JSON.stringify(arryList));
  
  DisplayData();
  ClearForm();

  

}



)
  
prinBtn.addEventListener('click',function(){
    window.print();
   
})
   
  
  


// function  getData(){

//     var books ={
//       name:bookName.value,
//         copy : bookCopy.value,
//         pages : bookPages.value,
       
//      total:total.innerHTML ,
    
       
//     }


   

//   arrList.push(books);
//  localStorage.setItem('bookscontainer', JSON.stringify(arrList));

// DisplayData();
// ClearForm();


// }

function ClearForm(){
   bookName.value='';
        bookCopy.value ='';

       bookPages.value='';

      

   total.innerHTML='';}


function DisplayData(){

       
      
    
    var cartona='';
    if (arryList && arryList.length > 0)
  for ( var i = 0 ; i < arryList.length  ; i++ ) 
   {
    
  
    
        cartona +=` <tr>
        
            <td>${[i+1]}</td>
            <td>${arryList[i].bookname}</td>
            <td>${arryList[i].copy}</td>
            <td>${arryList[i].pages}</td>
           
            <td >${arryList[i].total}</td>
             <td><button class="btn btn-outline-danger" onclick='deleteItem(${i})'>Delete</button></td>
             
            
            
        </tr>
         `
       
document.getElementById('item').innerHTML=cartona;





}}


function deleteItem(indexItem){
    arryList.splice(indexItem,1);

    localStorage.setItem('bookscontainer',JSON.stringify(arryList));
    DisplayData();
}

