<template>
  <div class="container">
    <h1 class="mt-4 text-center">Leaderboard</h1>
    <form>



    </form>
    <table class="table mt-5">
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
        </tr>
      </tbody>
    </table>

  <button @click="addButtonClicked">Add Record</button>

  </div>



</template>

<script>

export default {
  name: "Home",
  data: () => ({ name: "", score: "", allScores: [] }),
  computed: {
    dbRecordList: function() {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open( "GET", "https://localhost:44305/TechTest", false ); // false for synchronous request
      xmlHttp.send( null );
      return JSON.parse(xmlHttp.responseText); 
    },
  },
  methods: {
    addButtonClicked(){
      this.$router.push('/CreateNewRecord');
    }
  },
};
</script>