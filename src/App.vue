<template>
    <div id="app">
        <nav class="top-bar">
            <div class="top-bar-left">
                <ul class="menu">
                    <li class="menu-text">
                        <router-link to="/">Blog</router-link>
                    </li>
                    <li class="menu-text">
                        <router-link to="/contact">Nous contactez</router-link>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="callout large primary">
            <div class="text-center">
                <h1>FULLWAVE</h1>
                <h2 class="subheader">AGENCE WEB PARIS & CASABLANCA - EXPERTE DRUPAL</h2>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<style lang="scss">
    .thumbnail {
        width: 100%;
    }
</style>
