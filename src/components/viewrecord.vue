<template>
<div>
  <h1>ID: Insert ID number</h1>
  <form>
    <label for="name">Name:</label>
    <input type="text" name = "name" v-model = "name" placeholder="Insert name from db here" maxlength = "50" /><br>

    <label for="description">Description:</label>
    <textarea type="description" name = "description" v-model = "description" placeholder="Insert description from db here" maxlength = "500"/><br>
    
    <label for="ReleaseYear">Release Year:</label>
    <input type="text" name = "ReleaseYear" v-model = "releaseYear" placeholder="Insert release year from db here" maxlength = "4" /><br>
    
    <button @click="">Save</button>
  </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      description: '',
      releaseYear: ''
    }
  }
}
</script>

<style scoped>

</style>
