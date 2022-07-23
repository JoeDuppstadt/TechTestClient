<template>
  <div class="container">
    <h1 class="mt-4 text-center">Home</h1>
    <form>


    </form>
    <table id="recordTable" class="styled-table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Release Year</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, i) in dbRecordList" :key="i">
          <td>{{ entry.name }}</td>
          <td>{{ entry.description }}</td>
          <td>{{entry.releaseYear}}</td>
          <td>
              <input  @click="editButtonClicked(entry.id)"  type="image" src="https://cdn-icons-png.flaticon.com/512/84/84380.png" name="submit" width="25" height="25" alt="submit"/>  
              <input  @click="deleteButtonClicked(entry.id)" type="image" src="https://www.pikpng.com/pngl/m/159-1591301_pc-icon-to-delete-comments-delete-icon-svg.png" name="submit" width="25" height="25" alt="submit"/> 


          </td>
        </tr>
      </tbody>
    </table>

  <button @click="addButtonClicked">Add New Record</button>

  </div>



</template>



<script>
//url = 'https://localhost:44305/TechTest'
export default {
  //url: 'https://localhost:44305/TechTest'

  name: "Home",
  //data: () => ({ url: 'https://localhost:44305/TechTest', score: "", allScores: [] }),
  computed: {
    dbRecordList: function() {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", 'https://localhost:44305/TechTest', false ); // false for synchronous request
      xmlHttp.send( null );
      return JSON.parse(xmlHttp.responseText); 
    },
  },
  methods: {
    addButtonClicked(){
      this.$router.push('/CreateNewRecord');
    },
    editButtonClicked(){
      this.$router.push('/view');
    },
    deleteButtonClicked(id){
      try{
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "DELETE", 'https://localhost:44305/TechTest', false ); // false for synchronous request
        xmlHttp.setRequestHeader('Content-Type', 'application/json');
        xmlHttp.send(JSON.stringify({
          id: parseInt(id)
        }));    
        location.reload();
      } catch(e){
          console.error(e);
          alert("Unable to delete record");
      }
  
    },
    editButtonClicked(id){
      this.$router.push("/viewRecord/"+ id);
    }

  }
}

</script>


<style scoped>
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    margin-left: auto;
    margin-right: auto;
}
.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: center;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}

</style>