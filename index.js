var firebaseConfig = {
  apiKey: "AIzaSyAkIZuJnIISdtoQ34rLoaTXA_a1V262ggs",
  authDomain: "testprojectch4.firebaseapp.com",
  databaseURL: "https://testprojectch4.firebaseio.com",
  projectId: "testprojectch4",
  storageBucket: "testprojectch4.appspot.com",
  messagingSenderId: "280306997569",
  appId: "1:280306997569:web:4abfd42c90090658e529c0",
  measurementId: "G-GMD5H1WH61"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.collection("data").onSnapshot(function(querySnapshot) {
  $("#showData-input").html("");
  querySnapshot.forEach(function(doc) {
    $("#showData-input").append(
      `<li class="list-group-item"> ${doc.data().text} </li>`
    );
  });
});

function submit() {
  db.collection("data")
    .add({
      text: $("#data-input").val()
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}