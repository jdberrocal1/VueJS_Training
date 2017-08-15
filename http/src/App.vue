<template>
  <div class="container">
    <vue-progress-bar></vue-progress-bar>
    <div class="row">
      <h3>HTTP</h3>
      <div class="form-group">
        <label for="username">Title</label>
        <input class="form-control" v-model="post.title" type="text" name="username" id="username">
      </div>
      <div class="form-group">
        <label>Message</label>
        <textarea class="form-control" v-model="post.message" rows="3"></textarea>
      </div>
      <button class="btn btn-primary" @click="sendData()">Create Post</button>
      <button class="btn btn-success" @click="getData()">Get Posts</button>
      <br><br>
      <ul class="list-group">
        <li class="list-group-item" v-for="p in posts">{{p.date | formatDate}} - {{p.title}} - {{p.message}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        post: {
          title:'',
          message:'',
          date: ''
        },
        posts: []
      }
    },
    methods:{
      sendData(){
        this.$Progress.start();
        this.post.date = new Date();
        this.$http.post('', this.post)
          .then(response => {
            this.post.title = '';
            this.post.message = '';
            this.getData();
            this.$Progress.finish();
          })
          .catch(error => {
            console.log(error);
            this.$Progress.fail();
          });
      },
      getData(){
        this.$Progress.start();
        this.$http.get('')
          .then(response => {
            this.posts = response.data;
            this.$Progress.finish();
          })
          .catch(error => {
            console.log(error);
            this.$Progress.fail()
          });
      }
    }
  }
</script>

<style>
</style>
