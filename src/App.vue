<template>
  <div id="app">
    <nav :class="{ active: show }" class="navbar-nav" id="js-responsive-nav">
      <div class="row">
        <div class="logo col-4">
          <img alt="logo" src="../src/assets/logo.png" />
        </div>
        <div class="btn-header col-lg-8">
        <button class="header-btn" v-if="show" key="on" @click="show = false">
          open
        </button>
        <button class="header-btn" v-else key="off" @click="show = true">
          close
        </button>
        </div>
        <div class="nav-responsive" :class="{ active: show }" v-if="show">
        <router-link to="/">Home</router-link><br>
        <router-link to="/about">About</router-link><br>
        <router-link to="/blog">blog</router-link><br>
        </div>

        <div v-else class="col-lg-8 col-sm-12 ">
        <router-link class="b" to="/">Home</router-link>
        <router-link class="b" to="/about">About</router-link>
        <router-link class="b" to="/blog">blog</router-link>
        </div>
      </div>
    </nav>
    <div class="ban">
      <img src="../src/assets/banniere.jpg"/>
    </div>
    <router-view />

    <footer class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <address>
              <a href="tel:+212602811500">(+212) 602 81 15 00</a>
              <br />
              <a href="mailto:contact@fullwaveagency.com">contact@fullwaveagency.com</a>
            </address>
          </div>
          <div class="col-md-4">
            <a href="tel:+33631009556">(+33) 631 00 95 56</a>
            <br />
            <a href="mailto:contact@fullwaveagency.com">contact@fullwaveagency.com</a>
          </div>
          <div class="col-md-4">
            <ul>
              <li>
                <a href="https://www.facebook.com/fullwaveagency">Facebook</a>
              </li>
              <li>
                <a href="https://www.drupal.org/fullwave">Drupal</a>
              </li>
            </ul>
          </div>
          <div class="col-md-12">
            <p class="text-muted">Copyright 2019 © Fullwave Technology, All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="scss">
  @import "scss/bootstrap";
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .ban {
    position: relative;
    width: 100%;
    img{
      width: 100%
    }
  }
  .navbar-nav {
    background: #bbd5d5;
    width: 100%;
    padding: 30px 0 ;
    display: block;
    position: fixed;
    z-index: 1;
    text-align: right;
    a {
      font-weight: bold;
      color: #2c3e50;
      padding: 0 20px;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .logo{text-align: left}
  .btn-header{
    display: none
  }
  .nav-responsive{
    display: none;
  }
  @media only screen and (max-width: 768px)  {
    .btn-header{
      position: relative;
      display: block;
      float: right;
    }
    .b{
      display: none
    }
    .nav-responsive {
      display: block;
      width: 100%;
      text-align: right;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods : {
      navresponsive: function() {
        this.show = !this.show;

      }
    }
  }
</script>

