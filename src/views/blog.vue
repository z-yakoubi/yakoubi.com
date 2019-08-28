<template>
    <div class="blg">
        <input type="checkbox" id="Projets" value="Projets" v-model="checkedNames">
        <label for="Projets">Projets</label>
        <input type="checkbox" id="Clients" value="Clients" v-model="checkedNames">
        <label for="Clients">Clients</label>
        <div class="sel">{{ checkedNames }}</div>

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
        data() {
            return {
                articles: [],
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
                });
        }
    };
</script>
