<template>
  <div id="app">
    <nav class="top-bar">
      <div class="top-bar-left">
        <ul class="menu">
          <li class="menu-text">Blog</li>
        </ul>
      </div>
    </nav>
    <div class="callout large primary">
      <div class="text-center">
        <h1>Fullwave</h1>
        <h2 class="subheader">
          Agence Web Paris & Casablanca - Experte Drupal
        </h2>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "~foundation-sites/scss/foundation";
@include foundation-everything;
</style>
