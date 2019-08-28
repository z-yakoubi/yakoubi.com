<template>
    <div class="about">
            <div class="wr">
                <div class="txt">
                    <h1>Fullwave</h1>
                    <h2>
                        EXPERTISES: DRUPAL 7 & 8, PRESTASHOP, EMAILING, SEO...
                    </h2>
                    <ul>
                        <li> Gestion de projet web</li>
                        <li> Conseil, audit et accompagnement à la conception</li>
                        <li> Charte graphique</li>
                        <li> Conception de l'identité graphique (web, flyers, carte de visites...)</li>
                        <li> Web design</li>
                        <li> Charte graphique adaptée au standards web (W3C)</li>
                        <li> Intégration</li>
                        <li> Découpage et integration de maquettes : HTML5, CSS3, jQuery, Node.js</li>
                    </ul>
                </div>
              <div class="image three" data-aos="fade-down-left"></div>

              <!--    <div class="count">{{ second }}</div>-->
            </div>
        </div>
</template>

<script>
    // @ is an alias to /src
    import axios from "axios";

    export default {
        name: "blog",
        data() {
            return {
                // second: 0,

            };
        },

        mounted: function () {
            // setInterval(() => {
            //  this.second++;
            //},500)
        }
    };
</script>
<style lang="scss">

</style>