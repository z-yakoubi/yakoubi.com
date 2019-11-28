<template>
    <div class="grid-container">
        <div class="grid-x align-center">
            <div class="cell medium-8">
                <div class="blog-post" v-for="(article, index) in articles">
                    <h3>
                        {{ article.title }}
                        <small>{{ $d(new Date(article.created), "short", "fr-FR") }}</small>
                    </h3>
                    <img
                            class="thumbnail"
                            v-bind:src="`http://37.139.25.243${article.field_image.uri.url}`"
                    />
                    <p v-if="article.body" v-html="article.body.summary"></p>
                    <div class="callout">
                        <ul class="menu simple">
                            <li>
                                <a href="#">Auteur : {{ article.uid.name }}</a>
                            </li>
                            <li>
                                <a href="#">Comment : {{ article.comment.comment_count }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Jsona from "jsona";

    export default {
        name: "blog",
        data() {
            return {
                articles: []
            };
        },
        created() {
            const _this = this;
            const dataFormatter = new Jsona();

            axios({
                baseURL: "http://37.139.25.243/jsonapi/",
                method: "get",
                url: "node/article?include=field_image,uid"
            })
                .then(function (response) {
                    _this.articles = dataFormatter.deserialize(response.data);
                    console.log(_this.articles);
                })

                .catch(error => console.log(error));
        }
    };
</script>
