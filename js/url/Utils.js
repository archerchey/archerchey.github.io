/**/

require.config({
    baseUrl: "../lib",
    paths: {
        "jquery": "jquery/jquery-3.1.1.min"
    }
});

define(['jquery'], function ($) {

    return {
        getUrlParam: function (key) {
            var reg = new RegExp('[?|&]' + key + '=([^&]+)')
            var match = location.search.match(reg)
            return match && match[1]
        }
    };

});