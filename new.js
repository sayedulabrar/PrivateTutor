



function todo(){
  moment();
  showComment(); 
  }






function showComment() {
  firebase
    .database()
    .ref("User/")
    .once("value")
    .then(
      function (snapshot) {
        const res = [];
        
        snapshot.forEach(function (child) {
          var n = child.val().name;
          var m = child.val().comment;
          var o = child.val().email;

          res.push({
            n,
            m,
            o,
          });
        });
        document.getElementById("id1").innerHTML = res
          .map(
            (el) =>
              `<div class="comment-text">
              <h4>
                  <a href="">${el.n} </a> 
              </h4>
              <p>${el.o}</p> 
              <h3>
                  ${el.m}
              </h3>
          </div>`
          )
          .join("");

          
        
        
                  
      },
      function (error) {
        if (error) {
        } else {
        }
      }
    );

    
    } 

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

          document.getElementById("name").value = "";
          document.getElementById("comment").value = "";
          document.getElementById("email").value = "";

          document.getElementById("id2").innerHTML = result
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
            )
            .join("");
        }
      }
    );
}

function hide()
{

  document.getElementById("id1").innerHTML='<div></div>';
  document.getElementById("id2").innerHTML='<div></div>';
                


}




function moment() {
  firebase
    .database()
    .ref("User/")
    .once("value")
    .then(
      function (snapshot) {
        const res = [];
        
        snapshot.forEach(function (child) {
          var n = child.val().name;
          var m = child.val().comment;
          var o = child.val().email;

          res.push({
            n,
            m,
            o,
          });
        });

        var size = Object.keys(res).length;
        document.getElementById("goo").innerHTML=`<h4>${size} comments</h4>`;

          
        
        
                  
      },
      function (error) {
        if (error) {
        } else {
        }
      }
    );

    
    } 










//     let result = [];

// function sho(e) {
//   var name = document.getElementById("name").value;
//   var message = document.getElementById("message").value;
//   var email = document.getElementById("email").value;

//   firebase
//     .database()
//     .ref("User/" + message)
//     .set(
//       {
//         name: name,
//         message: message,
//         email: email,
//       },
//       function (error) {
//         if (error) {
//           // The write failed...
//           console.log(error);
//         } else {
//           // alert("DONE");
//           result.push({
//             name,
//             message,
//             email,
//           });

//           document.getElementById("name").value = "";
//           document.getElementById("message").value = "";
//           document.getElementById("email").value = "";

//           document.getElementById("id2").innerHTML = result
//             .map(
//               (el) =>
//                 `<div class="comment-text">
//                 <h4>
//                     <a href="">${el.name} </a> 
//                 </h4>
//                 <p>${el.email}</p> 
//                 <h3>
//                     ${el.message}
//                 </h3>
//             </div>`
//             )
//             .join("");
//         }
//       }
//     );
// }
