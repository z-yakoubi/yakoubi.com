<template>
    <div class="blg">
        <ul v-for="(article, index) in articles" :key="index">
            <h1>{{ article.attributes.title }}</h1>
            <!--<img v-bind:src="`http://37.139.25.243${arthicles[index].uri.url}`"/>-->
            <p v-if="article.attributes.body" v-html="article.attributes.body.value"></p>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "blog",
        el : "blog",
        data() {
            return {
                articles: [],
                arthicles: [],
                checkedNames: []
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
                    _this.arthicles = response.data.included;

                });
        }
    };
</script>
