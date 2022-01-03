

let result = [];

function showw(e) {
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;
  var email = document.getElementById("email").value;

  firebase
    .database()
    .ref("User/" + name)
    .set(
      {
        name: name,
        comment: comment,
        email: email,
       
    
      },
      function (error) {
        if (error) {
          // The write failed...
          console.log(error);
        } else {
          // alert("DONE");
          result.push({
            name,
            comment,
            email,
            
            
          });



          document.getElementById("name").value="";
          document.getElementById("comment").value="";
          document.getElementById("email").value="";

          

          document.getElementById("id1").innerHTML = result
            .map(
              (el) =>
              `<div class="comment-text">
                <h4>
                    <a href="">${el.name} </a> 
                </h4>
                <p>${el.email}</p> 
                <h3>
                    ${el.comment}
                </h3>
            </div>`
                // `<div class="comment-text">
                // <div  style="font-size: medium;font-weight: bolder;">
                //     Name: 
                //     <span class="ml-2">${el.name} Email: ${el.email}</span>
                // </div>
                // <div class="p-3 mb-2 bg-info text-white" style="font-size: medium;font-weight: lighter;"> ${el.comment}</div>
                // var date=new Date();  
                // var day=date.getDate();  
                // var month=date.getMonth()+1;  
                // var year=date.getFullYear();  
                // document.write("<br>Date is: "+day+"/"+month+"/"+year); 
                // </div>`
            )
            .join("");
        }
      }
    );

}
