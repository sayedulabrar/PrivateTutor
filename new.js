function search() 
{
    var id= document.getElementById("id").value;

firebase.database().ref('User/'+ id).once('value').then(function(snapshot) {
                if (snapshot.exists()) {
                     var name_ = snapshot.val().name;
                     var id_ = snapshot.val().id;
                    var mail_ = snapshot.val().email;
                      document.getElementById("name").value = name_;
                      document.getElementById("id").value = id_;
                      document.getElementById("email").value =  mail_;
                }
                else
                {

                }
        }, function(error) {
            if (error) {

            } else {

            }
          });
}

// function delete_()
// {
//     var del_user = document.getElementById("for_del").value;
//     let userRef = firebase.database().ref('User/' + del_user);
//     userRef.remove();
//     alert("Successfully Removed");
// }
// function all_student_view()
// {

//     firebase.database().ref('User/').once('value').then(function(snapshot) {
//         snapshot.forEach(function(child) {
//             var m= child.val().id;
//             var n= child.val().name;
//             var o= child.val().email;
//             alert(m + " "+ n+ " "+ o);


//         });
//         }, function(error) {
//             if (error) {
//             } else {

//             }
//           });

// }

function showw(e) {
    var name = document.getElementById("name").value;
    var comment= document.getElementById("comment").value;
    var email= document.getElementById("email").value;


     firebase.database().ref('User/' + name).set({
            name : name,
            comment : comment,
            email : email

           
          }, function(error) {
            if (error) {
              // The write failed...
              console.log(error)
            } else {
                alert("DONE");
              
           
            }
          });



        // var name= document.getElementById("name").value;

        // firebase.database().ref('User/'+ name).once('value').then(function(snapshot) {
        //         if (snapshot.exists()) {
        //              var name_ = snapshot.val().name;
        //              var comment_ = snapshot.val().comment;
        //             var mail_ = snapshot.val().email;
                    
        //             let contdiv= document.getElementById("id1");
        //             var node = document.createElement("h4");
                    
        //             node.appendChild(textnode);
        //             document.getElementById("id1").appendChild(node);
        //         }
        //         else
        //         {

        //         }
        // }, function(error) {
        //     if (error) {

        //     } else {

        //     }
        //   });
 } 

