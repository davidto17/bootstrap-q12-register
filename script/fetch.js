// console.log("fetch.js");

//IF RETURN A PROMISE THEN MUST RETURN SOMETHING THEN CONTINUE TO THEN
// CAN COPY FETCH JS CODE FROM CHROME DEV TOOL

function getData() {
  fetch("https://reqres.in/api/users")
    .then((res) => {
      if (res.ok) {
        console.log("SUCCESS!");
        return res.json();
      } else {
        console.log("NOT SUCCESS!");
        throw Error("ERROR");
      }
    })
    .then((data) => {
      //   console.log(data.data);
      const html = data.data
        .map((user) => {
          return `
          <div style="border:1px solid #cecece; padding:1rem;">
            <h4>Name: ${user.first_name}</h4>
            <h4>Email: ${user.email}</h4>
            <img src=${user.avatar}></img>
          </div>
          `;
        })
        .join("");
      console.log(html);
      document.querySelector("#fetch").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => console.log("SOME ERROR"));
}

getData();

function postData() {
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "User 1",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("ERROR"));
}

//RESPONSE OBJECT BODY, HAS OK
// fetch("https://reqres.in/api/users").then((res) => console.log(res));
// {
//     "page":1,
//     "per_page":6,
//     "total":12,
//     "total_pages":2,
//     "data":[
//        {
//           "id":1,
//           "email":"george.bluth@reqres.in",
//           "first_name":"George",
//           "last_name":"Bluth",
//           "avatar":"https://reqres.in/img/faces/1-image.jpg"
//        },
//        {
//           "id":2,
//           "email":"janet.weaver@reqres.in",
//           "first_name":"Janet",
//           "last_name":"Weaver",
//           "avatar":"https://reqres.in/img/faces/2-image.jpg"
//        },
//        {
//           "id":3,
//           "email":"emma.wong@reqres.in",
//           "first_name":"Emma",
//           "last_name":"Wong",
//           "avatar":"https://reqres.in/img/faces/3-image.jpg"
//        },
//        {
//           "id":4,
//           "email":"eve.holt@reqres.in",
//           "first_name":"Eve",
//           "last_name":"Holt",
//           "avatar":"https://reqres.in/img/faces/4-image.jpg"
//        },
//        {
//           "id":5,
//           "email":"charles.morris@reqres.in",
//           "first_name":"Charles",
//           "last_name":"Morris",
//           "avatar":"https://reqres.in/img/faces/5-image.jpg"
//        },
//        {
//           "id":6,
//           "email":"tracey.ramos@reqres.in",
//           "first_name":"Tracey",
//           "last_name":"Ramos",
//           "avatar":"https://reqres.in/img/faces/6-image.jpg"
//        }
//     ],
//     "support":{
//        "url":"https://reqres.in/#support-heading",
//        "text":"To keep ReqRes free, contributions towards server costs are appreciated!"
//     }
//  }
