<template>
<div>
  <h1>ID: Insert ID number</h1>
  <form>
    <label for="name">Name:</label><br>
    <input type="text" name = "name" v-model = "name" placeholder="Insert name from db here" maxlength = "50" /><br>
    <label for="description">Description:</label><br>
    <textarea e="description" name = "description" v-model = "description" placeholder="Insert description from db here" maxlength = "500" /><br>    
    <label for="ReleaseYear">Release Year:</label><br>
    <input type="text" name = "ReleaseYear" v-model = "releaseYear" placeholder="Insert release year from db here" maxlength = "4" /><br>    
    <button>Save</button>
  </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
