function todo() {
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
          var s = child.val().email;
          var e = child.val().sub;
          var m = child.val().mes;
          console.log(n + " " + s + " " + m + "\n");

          res.push({
            n,
            m,
            s,
            e,
          });
        });
        document.getElementById("id1").innerHTML = res
          .map(
            (el) =>
              `<div class="comment-text">
                <h4>
                    <a href="">${el.e} </a> 
                </h4>
                <p>${el.s}</p> 
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
          var s = child.val().email;
          var e = child.val().sub;
          var m = child.val().mes;
          console.log(n + " " + s + " " + m + "\n");

          res.push({
            n,
            m,
            s,
            e,
          });
        });

        var size = Object.keys(res).length;
        document.getElementById(
          "goo"
        ).innerHTML = `<h4>${size} Messages Recived</h4>`;
      },
      function (error) {
        if (error) {
        } else {
        }
      }
    );
}

function hide() {
  document.getElementById("id1").innerHTML = "<div></div>";
  document.getElementById("id2").innerHTML = "<div></div>";
}

function admin(e) {
  var x = document.getElementById("user").value;
  var y = document.getElementById("pass").value;

  if (x == "Sayedul Abrar" && y == "1234") {
    window.location.replace("Admin.html");
  }
}
