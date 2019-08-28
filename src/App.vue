<template>
    <div id="app">
        <nav :class="{ active: show }" class="navbar-nav" id="js-responsive-nav">
            <div class="wr">
                <div class="logo">
                    <img alt="logo" src="../src/assets/logo.png"/>
                </div>
                <div class="btn-header ">
                    <button class="header-btn" v-if="show" key="on" @click="show = false">
                        open
                    </button>
                    <button class="header-btn" v-else key="off" @click="show = true">
                        close
                    </button>
                </div>
                <div class="nav-responsive" :class="{ active: show }" v-if="show">
                    <router-link to="/">Home</router-link>
                    <br/>
                    <router-link to="/about">About</router-link>
                    <br/>
                    <router-link to="/blog">blog</router-link>
                    <br/>
                </div>
                <div v-else class="nav">
                    <router-link class="b" to="/">Accueil</router-link>
                    <router-link class="b" to="/about">Qui somme-Nous</router-link>
                    <router-link class="b" to="/blog">blog</router-link>
                    <router-link class="b" to="/contact">Nous-contactez</router-link>
                </div>
            </div>
        </nav>
        <div class="ban">
            <div class="slogan">Fullwave</div>
            <img src="../src/assets/ban22.jpg"/>
        </div>
        <router-view/>
        <footer class="main-footer">
                <div class="wr1">
                    <div class="plan">
                        <h2>Liens</h2>
                        <router-link class="b" to="/">Home</router-link>
                        <br/>
                        <router-link class="b" to="/about">About</router-link>
                        <br/>
                        <router-link class="b" to="/blog">blog</router-link>
                        <br/>
                    </div>
                    <div class="adresses">
                        <h2>Contactez-nous</h2>
                        <address>
                            <a href="tel:+212602811500">+212) 602 81 15 00</a>
                            <br/>
                            <a href="mailto:contact@fullwaveagency.com"
                            >contact@fullwaveagency.com</a
                            >
                        </address>
                    </div>
                    <div class="rs">
                        <h2>Reseaux sociaux</h2>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/fullwaveagency">Facebook</a>
                            </li>
                            <li>
                                <a href="https://www.drupal.org/fullwave">Drupal</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer2 container">
                    <p class="text-muted">
                        Copyright 2019 © Fullwave Technology, All right reserved
                    </p>
                </div>
        </footer>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    .container {
        width: 1150px;
        max-width: 100%;
        margin: 0 auto;
        padding: 0 15px;
    }
    body {
        margin: 0;
    }

    .wr {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 8px;
        grid-auto-rows: minmax(60px, auto);
        width: 100%;
    }

    .wr1 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 8px;
        grid-auto-rows: minmax(60px, auto);
        width: 100%;
        padding-top: 15px;

        &.plan {
            grid-column: 1 / 3;
            grid-row: 1;
            padding-left: 20px;
        }

        &.adresses {
            grid-column: 2 / 3;
            grid-row: 1;
        }

        &.rs {
            grid-column: 3 / 3;
            grid-row: 1;
        }

    }
    .ban{
        position: relative;
        margin-bottom: -4px;
        padding: 0;
    img {
        width: 100%;
    }
    }
    .slogan {
        position: absolute;
        top: 165px;
        color: white;
        font-size: 50px;
        padding: 0 10%;
    }

    .navbar-nav {
        background: #fff;
        width: 100%;
        display: block;
        position: fixed;
        z-index: 1;

        a {
            font-weight: bold;
            color: #2c3e50;
            padding: 15px 20px;

            &.router-link-exact-active {
                color: #1fa0c1;
            }
        }
    }

    .logo {
        grid-column: 1 / 2;
        grid-row: 1;
        text-align: left;
        padding-top: 10px;
    }

    .btn-header {
        display: none;
    }

    .nav-responsive {
        display: none;
    }

    .nav {
        grid-column: 3/ 5;
        grid-row: 1;
        padding-top: 15px;
    }

    .main-footer {
        padding: 30px 0;
        background: #333;
        color: #fff;

        a {
            color: white;
        }
    }

    @media only screen and (max-width: 768px) {
        .btn-header {
            position: relative;
            display: block;
            float: right;
        }
        .b {
            display: none;
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
        el: "#app",
        data() {
            return {
                show: false
            };
        },
        methods: {
            navresponsive: function () {
                this.show = !this.show;
            }
        }
    };
</script>
