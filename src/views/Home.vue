<template>
  <div class="home">

    <select v-model="selected" multiple>
      <option disabled value="">Choisissez</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Sélectionné : {{ selected }}</span>

    <div class="article">
      <h1>Articles</h1>
      <ul v-for="article in articles">
        <li> {{ article.attributes.title }} </li>
        <p v-if="article.attributes.body" v-html="article.attributes.body.value"></p>
      </ul>
    </div>


    <div class="wrapper">
      <div class="image three"></div>

      <transition name="bounce" appear>
        <div class="txt" v-if="visible">
        <h1>Article1</h1>
        <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
      </div>
      </transition>

    </div>

    <div class="wrapper wrapper2">
      <div class="image two"></div>
      <div class="image five"></div>
      <div class="image six"></div>
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
      articles: [],
      selected: '',
      visible: true
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

  .article{
    padding: 30px;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    &.wrapper2{
      padding-top: 20px;
    }
  }
  .image{
    opacity: 0.7;
    &.two {
      grid-column: 1 / 5;
      grid-row: 1 / 4;
      background: url("../assets/ban1.png");
      background-size: cover;
      transition: all 0.2s ease-in-out;
      &:hover{ transform: scale(1.1);}
    }
    &.three {
      grid-column: 1 / 3 ;
      grid-row: 1 / 5;
      background: url("../assets/dec.jpg");
      background-size: cover;
      transition: all 0.2s ease-in-out;
      &:hover{ transform: scale(1.1);}
    }
    &.five {
      grid-column: 1 / 4;
      grid-row: 4 / 6;
      background: coral;
      transition: all 0.2s ease-in-out;

    }
    &.six {
      grid-column: 4;
      grid-row: 4 / 6;
      background:deeppink;
      -webkit-transform-origin: 50% 0;
      transform-origin: 50% 0;
      -webkit-animation: swinging 4.5s ease-in-out forwards infinite;
      animation: swinging 4.5s ease-in-out forwards infinite;
    }
  }
  .image:hover{
    opacity: 1;
  }
  .txt{
    grid-column: 3 / 5;
    grid-row: 1 / 5;
    text-align: justify;
    padding: 55px;
  }
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes swinging {
    0% {
      transform: rotate(10deg);
    }
    50% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(10deg);
    }
  }

  @keyframes hue {
    from {
      filter: hue-rotate(0deg);
    }

    to {
      filter: hue-rotate(-360deg);
    }
  }
</style>
