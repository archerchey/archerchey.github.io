/**/

require.config({
    baseUrl: "../../",
    paths: {
        "jquery": "lib/jquery/jquery-3.1.1.min"
    }
});

define(['jquery'], function ($) {

    var dir = "../../json/";
    var main = "main.json";

    return {
        getJson: function (path) {
            if (!path) {
                path = dir + main;
            } else {
                path = dir + path;
            }
        }
    };

});