const firebaseConfig = {
  apiKey: "AIzaSyDtv8uH9dUeTeABnJMbmjyqhhwNlWYsNCk",
  authDomain: "ipl-results-3f1fe.firebaseapp.com",
  databaseURL: "https://ipl-results-3f1fe-default-rtdb.firebaseio.com",
  projectId: "ipl-results-3f1fe",
  storageBucket: "ipl-results-3f1fe.appspot.com",
  messagingSenderId: "85309697313",
  appId: "1:85309697313:web:e5993c58d898560b002260"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


var UserInputsRef=firebase.database().ref('UserInputs')
  document.getElementById('datavalue').addEventListener('submit',submitForm);

  /* function store input values in variables */
  function submitForm(e){
    e.preventDefault();
    var year =getInputVal('year');
    readResults(year);
   
  }

  function getInputVal(id){
    return document.getElementById(id).value;}


    
function readResults(year){
  var result=firebase.database().ref(year)
    result.on('value',(data) =>{
    var ranks = data.val();
    document.getElementById("result1").innerHTML ="<br> 1. " +ranks[1];
    document.getElementById("result2").innerHTML ="<br> 2. " +ranks[2];
    document.getElementById("result3").innerHTML ="<br> 3. " +ranks[3];
    document.getElementById("result4").innerHTML ="<br> 4. " +ranks[4];
    document.getElementById("result5").innerHTML ="<br> 5. " +ranks[5];
    document.getElementById("result6").innerHTML ="<br> 6. " +ranks[6];
    document.getElementById("result7").innerHTML ="<br> 7. " +ranks[7];
    document.getElementById("result8").innerHTML ="<br> 8. " +ranks[8];
  } )
}