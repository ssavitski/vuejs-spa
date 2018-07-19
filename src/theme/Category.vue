<template>
  <div class="container content">
    <div class="columns">
      <div class="column is-one-third"
           v-for="post in posts"
           v-bind:key="post.id">
        <app-post :link="post.rest_api_enabler.Link">
          <h3 slot="title" v-html="post.title.rendered"></h3>
          <div slot="content" v-html="post.excerpt.rendered"></div>
        </app-post>
      </div>
    </div>
  </div>
</template>

<script>
  import Post from './Post.vue';
  import appService from './../app.service';

  export default {
    components: {
      'app-post': Post,
    },

    data() {
      return {
        id: this.$route.params.id,
        posts: [],
      };
    },

    methods: {
      loadPosts() {
        let categoryId = 2;

        if (this.id === 'front-end') {
          categoryId = 11;
        }

        appService.getPosts(categoryId).then(posts => {
          this.posts = posts;
        });
      },
    },

    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
        this.loadPosts();
      },
    },

    created() {
      this.loadPosts();
    },
  };
</script>
