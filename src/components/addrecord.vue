<template>
<div>
  <h1 id ="header">ID: Insert ID number</h1>
  <!-- return false stops the page from refreshing after an alert is thrown -->
  <form onsubmit="return false">
    <label for="name">Name:</label><br>
    <input type="text" name = "name" v-model = "name" placeholder="Insert name from db here" maxlength = "50" /><br>

    <label for="description">Description:</label><br>
    <textarea e="description" name = "description" v-model = "description" placeholder="Insert description from db here" maxlength = "500" /><br>
    
    <label for="ReleaseYear">Release Year:</label><br>
    <input type="text" name = "ReleaseYear" v-model = "releaseYear" placeholder="Insert release year from db here" maxlength = "4" /><br>
    
    <!-- <button @click="save">Save</button> -->
    <input @click="save" type="image" src="https://www.freepngimg.com/thumb/submit_button/25497-9-submit-button-photos.png" name="submit" width="100" height="48" alt="submit"/>  
    <input @click="homeButtonClicked" type="image" src="http://www.clker.com/cliparts/H/S/q/A/l/E/home-button-png-hi.png" name="submit" width="100" height="48" alt="submit"/>  

  </form>
  </div>
</template>

<script>
export default {
  data () {
    if (String(window.location.href).includes('Record')){

    }



    return {
      name: '',
      description: '',
      releaseYear: ''
    }
  },
  methods:{
    save(){
      if (validateInput(this.name, this.releaseYear)){
        try{
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "POST", "https://localhost:44305/TechTest", false ); // false for synchronous request
          xmlHttp.setRequestHeader('Content-Type', 'application/json');
          xmlHttp.send(JSON.stringify({
            name: this.name,
            description: this.description,
            releaseYear: parseInt(this.releaseYear)
          }));

          // check to see if post was successful
          if (parseInt(xmlHttp.status) == 200){
            console.log("Record submitted successfully")
            this.$router.push('/home')
          }
          else{
            console.log("Record failed to submit")
            alert("Unable to create new record. Please try again");
            locatuion.reload();
          }
        }catch (error){
          console.error(error);
          alert("Unable to create new record");
        }
      }
      

      //return JSON.parse(xmlHttp.responseText); 
      //apiManager.getAll();
      //console.log(this.name)
      //apiManager.post(this.name, this.description, this.releaseYear)
    },
    homeButtonClicked(){
      this.$router.push('/home');

    }

    
  }
}


function validateInput(name, year){
  if (name == ""){
    alert("Name text box is empty");
    return false;
  }
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



</script>

<style scoped>

</style>
