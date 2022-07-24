<template>
<div>

  <div class="edit-box">
    <form >
      <div class="record-box">
        <input placeholder="Name" name="" required="" maxlength = "50" v-model = "name">
      </div>
      <div class="record-box">
        <input placeholder="Release Year" name="" required="" maxlength = "4" v-model = "releaseYear"  >
      </div>
        <div class="record-box">
        <input placeholder="Description" name="" maxlength="500" v-model = "description" >
      </div>
      <a @click="save">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Save
      </a>
      <a @click="homeButtonClicked">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Home
      </a>
      <a @click="deleteButtonClicked" v-if="deleteButtonHidden"    >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Delete
      </a>
    </form>
  </div>

  </form>
  </div>
</template>

<script>
export default {
  data () { 
    if(determineButtonClick()){

      let x = hitAPI('GET');
      return {
        name: x.name,
        description:x.description,
        releaseYear: x.releaseYear,
        deleteButtonHidden: true,
      }

    }
    // if the add new record button is clicked
    else{
      return {
        name: '',
        description: '',
        releaseYear: '',
        deleteButtonHidden: false,
      }
      
    }

  },
  methods:{
    save(){
      if (validateNameInput(this.name) && validateYearInput(this.releaseYear)){

        if (determineButtonClick()){
          hitAPI('PUT' ,this.name, this.description, this.releaseYear, this.$router);
        }
        else{
          hitAPI('POST', this.name, this.description, this.releaseYear, this.$router);
        }
      }
    },
    homeButtonClicked(){
      this.$router.push('/home');

    },
    deleteButtonClicked(){
      hitAPI('DELETE', this.name, this.description, this.releaseYear, this.$router)
    },
  }
}

function hitAPI(request, name, description, releaseYear, router){
  var baseURL = "https://localhost:44305/TechTest"

  if(request == 'GET'){
    baseURL = baseURL + '/' + getIDFromURL();
  }

  if(request == 'POST' || request == 'PUT'){
    validateNameInput(name);
    validateYearInput(releaseYear);
  }

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( request, baseURL, false ); // false for synchronous request
  xmlHttp.setRequestHeader('Content-Type', 'application/json');
  if(request == 'GET'){
    xmlHttp.send( null );
  }
  else if (request == 'POST'){
    xmlHttp.send(JSON.stringify({
              name: name,
              description: description,
              releaseYear: parseInt(releaseYear)
          }));
  }
  else if (request == 'PUT'){
    xmlHttp.send(JSON.stringify({
              id: parseInt(getIDFromURL()),
              name: name,
              description: description,
              releaseYear: parseInt(releaseYear)
          }));
  }
  else{
        xmlHttp.send(JSON.stringify({
              id: parseInt(getIDFromURL()),
          }));
  }
  
  if (parseInt(xmlHttp.status) == 200){
    console.log("Record submitted successfully")
    if (request != 'GET')
      router.push('/home')
  }
  else{
    console.log("Record failed to submit")
    alert("Unable to create new record. Please try again");
  }
  if(request == 'GET'){
    return JSON.parse(xmlHttp.responseText); 
  }
}


function validateNameInput(name){
  if (name == ""){
    alert("Name text box is empty");
    return false;
  }
  return true;
}

function validateYearInput(year){  
  console.log(year)
  if (year == ""){
    alert("Release year text box is empty");
    return false;
  }
  if (isNaN(year)){
    alert("Release year input needs to be a number");
    return false
  }
  return true;

}


function determineButtonClick(){
  return (String(window.location.href).includes('view'));
}
function updatePage(){
  
         var data = document.getElementById('header').innerHTML = "<H3>Public Offers</H3>"
         console.log(data);
         data.title = "asd"
        //.innerHTML = "<H3>Public Offers</H3>";


}

function getIDFromURL(){
  var x = window.location.href.split('/');
  return x[x.length - 1];
}




</script>

<style scoped>


html {
  height: 100%;
}
body {
  margin:0;
  padding:0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
}

.edit-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #f3f3f3;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.edit-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.edit-box .record-box {
  position: relative;
}

.edit-box .record-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #009879;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #009879;
  outline: none;
  background: transparent;
}
.edit-box .record-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.edit-box .record-box input:focus ~ label,
.edit-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #009879;
  font-size: 12px;
}

.edit-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #009879;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.edit-box a:hover {
  background: #009879;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #009879,
              0 0 25px #009879,
              0 0 50px #009879,
              0 0 100px #009879;
}

.edit-box a span {
  position: absolute;
  display: block;
}

.edit-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #009879);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.edit-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #009879);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.edit-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #009879);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.edit-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #009879);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}
</style>
