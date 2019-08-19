<template>
  <div class="home">
    <div class="article">
      <h1>Article FULLWAVE</h1>
      <ul v-for="article in articles">
        <li>{{ article.attributes.title }} </li>
        <p v-if="article.attributes.body" v-html="article.attributes.body.value"></p>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {
  name: "blog",
  data() {
    return {
      articles: []
    }
  },

  created() {
    const _this = this;
    // `this` est une référence à l'instance de vm
    axios.get('http://37.139.25.243/jsonapi/node/article')
            .then(function (response) {
              // handle success
              console.log(response);
              _this.articles = response.data.data;
            })
  }
};
</script>

<style lang="scss">
  .article{
    position: relative;
  }
</style>
