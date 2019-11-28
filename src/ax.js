import axios from "axios";
import Jsona from "jsona";

export default {
    data() {
        return {
            articles: []
        };
    },
    created() {
        const _this = this;
        const dataFormatter = new Jsona();

        axios({
            baseURL: "https://dev-fullwaveagency.pantheonsite.io/jsonapi",
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
