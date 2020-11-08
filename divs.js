

$(document).ready(()=>{
    $.ajax({
      url:"http://localhost:3000/posts",
      method:"GET",
      data:{get_param :'value'},
      success:(posts) =>{
        $.each(posts,function(key,record){
            
           
            $("#blog").append(createView(record));
            //createView(record);
        });
      }
    })
})

function createButton(v)
{
  let editBtn =document.createElement('a');
   editBtn.textContent="read more..";
    editBtn.setAttribute('target','_blank');
    editBtn.setAttribute('href','abc.html?id='+v.blogid);
    editBtn.onclick = function(){
    console.log(v.blogid);
    var ids= v.blogid;

     $.ajax({
      url:"http://localhost:3000/posts"+ids,
      method:"GET",
      data:{get_param :'value'},
      success:(blogs) =>{
        console.log(posts);
        $("#show").append(posts.title);
        // $.each(blogs,function(key,record){
        //   $("#cardId").append(createView(record));
        // });
      }
    });   
  }
  return editBtn;
}

function createView(record){
            var ab= record.description;
            console.log(ab.slice(0,20));
            var c=ab.slice(0,20);
            let div1 =document.createElement('div');
            let para =document.createElement('p');
            let para1 =document.createElement('p');
            para.innerHTML = c;
            para1.innerHTML = record.title;
            let mb=createButton(record);
            
            div1.appendChild(para);
            div1.appendChild(para1);
            div1.appendChild(mb);
            return div1;

          
    //    let colDiv =document.createElement('div');
    //     colDiv.className = "col-sm-6 col-md-4 col-lg-3 mt-4";
    //     let cardDiv=document.createElement('div');

    //     cardDiv.className = "card";
    //     colDiv.appendChild(cardDiv);
    //     let div1 =document.createElement('div');
    //     div1.className = "card-body";
    //     let title =document.createElement('h4');
    //     title.className='card-title';
      
    //     let category =document.createElement('p');
    //     category.className='card-text';
    //     let description =document.createElement('p');
    //     description.className='card-text';

    //     var ab= record.description;
    //     var c=ab.slice(0,200);
    //     description.innerHTML = c;
    //     var head= record.title;
    //     var cate = record.category;

    //     title.innerHTML = head;
    //     category.innerHTML = cate;
    //     // anchor.innerHTML ="Read more..."
    //     let mb=createButton(record);
    //     div1.appendChild(title);
    //     div1.appendChild(category);
    //     div1.appendChild(description);
    //     div1.appendChild(mb);

    //     var cont = document.getElementById("cardId");
    //     cardDiv.appendChild(div1);
    //     cont.appendChild(colDiv);
    //         return cont;
}
