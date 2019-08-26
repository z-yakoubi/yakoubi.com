<template>
  <div class="about">
    <select v-model="selected" multiple>
      <option disabled value="">Choisissez</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Sélectionné : {{ selected }}</span>

    <h1>This is an about page</h1>
    <div class="row">
      <div class="col-6">
        <p>
          Unlock the power of Git LFS in your Netlify workflow. Git stores
          pointer files in your repository, then uploads the real files to our
          asset server. Upload images at high resolution, then serve exactly the
          size you need in your site using image transformations on the fly.
        </p>
      </div>
      <div class="col-6">
        Unlock the power of Git LFS in your Netlify workflow. Git stores pointer
        files in your repository, then uploads the real files to our asset
        server. Upload images at high resolution, then serve exactly the size
        you need in your site using image transformations on the fly.
      </div>
    </div>
    <div class="count">{{ second }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "blog",
  data() {
    return {
      selected: "",
      second: 0
    };
  },

  mounted: function() {
    setInterval(() => {
      this.second++;
    }, 1000);
  }
};
</script>
