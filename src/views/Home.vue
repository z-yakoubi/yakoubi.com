<template>
    <div class="home">
        <div class="wrapper ">
            <div class="txt1" data-aos="fade-up">
                <h1>Article1</h1>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                </p>
            </div>
            <div class="image six" data-aos="fade-up"></div>
        </div>

        <div class="wrapper">
            <div class="image three" data-aos="fade-up"></div>
            <transition name="bounce">
                <div class="txt"  data-aos="fade-up">
                    <h1>Article2</h1>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </transition>
        </div>

        <div class="article" data-aos="fade-up">
            <h1>Articles</h1>
            <ul v-for="article in articles">
                <li>{{ article.attributes.title }}</li>
                <p v-if="article.attributes.body" v-html="article.attributes.body.value"></p>
            </ul>
        </div>

        <div class="wrapper wrapper2 container">
            <div class="image two"></div>
            <div class="image five" data-aos="fade-up"></div>
            <div class="image four" data-aos="fade-up"></div>
            <div class="image seven" data-aos="fade-up"></div>
            <div class="image eight" data-aos="fade-up"></div>
        </div>
        </div>
</template>

<script>
    // @ is an alias to /src
    import axios from "axios";

    export default {
        name: "blog",
        el: "home",
        data() {
            return {
                articles: [],
            };
        },
        created() {
            const _this = this;
            // `this` est une référence à l'instance de vm
            axios
                .get("http://37.139.25.243/jsonapi/node/article")
                .then(function (response) {
                    // handle success
                    console.log(response);
                    _this.articles = response.data.data;
                });
        }
    };
</script>

<style lang="scss">
    .article {
        position: relative;
        padding: 30px;
    }
    .wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
        grid-auto-rows: minmax(100px, auto);

        &.wrapper2 {
            padding: 20px 0;
        }
    }

    .image {
        &.two {
            grid-column: 1 / 5;
            grid-row: 1 / 4;
            background: url("../assets/ban11.png");
            background-size: cover;
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: scale(1.06);
            }
        }

        &.three {
            grid-column: 3 / 5;
            grid-row: 1 / 5;
            background: url("../assets/deco.jpg");
            background-size: cover;
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: scale(1.1);
            }
        }

        &.six {
            grid-column: 1 / 3;
            grid-row: 1 / 5;
            background: url("../assets/bell.png") no-repeat center;
            -webkit-transform-origin: 50% 0;
            transform-origin: 50% 0;
            -webkit-animation: swinging 4.5s ease-in-out forwards infinite;
            animation: swinging 4.5s ease-in-out forwards infinite;
        }

        &.five {
            grid-column: 1 / 2;
            grid-row: 4 / 6;
            background: coral;
            transition: all 0.2s ease-in-out;
        }

        &.four {
            grid-column: 4 / 5;
            grid-row: 4 / 6;
            background: #ff46bb;
            transition: all 0.2s ease-in-out;
        }

        &.seven {
            grid-column: 3 / 4;
            grid-row: 4 / 6;
            background: #2c3e50;
        }

        &.eight {
            grid-column: 2 / 3;
            grid-row: 4 / 6;
            background: green;
        }
    }

    .txt1 {
        grid-column: 3 / 5;
        grid-row: 1 / 5;
        text-align: justify;
        padding: 20px;
    }

    .txt {
        grid-column: 1 / 3;
        grid-row: 1 / 5;
        text-align: justify;
        transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
        padding: 20px;
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
