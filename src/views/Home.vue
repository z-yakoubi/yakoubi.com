<template>
  <div class="grid-container">
    <div class="grid-x align-center">
      <div class="cell medium-8">
        <div
          class="blog-post"
          v-for="(article, index) in articles"
          :key="index"
        >
          <h3>
            {{ article.title }}
            <small>{{ $d(new Date(article.created), "short", "fr-FR") }}</small>
          </h3>
          <img
            class="thumbnail"
            width="100%"
            v-bind:src="
              `https://dev-fullwaveagency.pantheonsite.io${article.field_image.uri.url}`
            "
          />
          <p v-if="article.body" v-html="article.body.summary"></p>
          <div class="callout">
            <ul class="menu simple">
              <li>
                <a href="#">Auteur : {{ article.uid.name }}</a>
              </li>
              <li>
                <a href="#">Comment : {{ article.comment.comment_count }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    articles() {
      return this.$store.getters.getResourcesByType("node--article");
    }
  },
  asyncData({ store: { dispatch, getters } }) {
    if (getters.getResourcesByType("node--article")) return;

    return dispatch("fetchResources", {
      resource: "node/article",
      params: {
        include: "field_image,uid"
      }
    });
  }
};
</script>
