/**/

require.config({
    paths: {}
});

define([], function () {

    return {
        getUrlParam: function (key) {
            var reg = new RegExp('[?|&]' + key + '=([^&]+)');
            var match = location.search.match(reg);
            return match && match[1]
        }
    };

});