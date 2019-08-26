<template>
    <div class="blg">
        <ul v-for="article in articles">
            <li>{{ article.attributes.title }}</li>
            <p v-if="article.attributes.body" v-html="article.attributes.body.value"></p>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "blog",
        el: "home",
        data() {
            return {
                articles: []
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
