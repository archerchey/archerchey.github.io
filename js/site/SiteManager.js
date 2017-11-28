/**/

require.config({
    paths: {
        "jquery": "lib/jquery/jquery-3.1.1.min",
        "fileUtil": "js/utils/FileUtil"
    }
});

define(['jquery', 'fileUtil'], function ($, fileUtil) {

    var dir = "json/";
    var main = "main.json";

    return {
        getContent: function (path, callback) {
            if (!path) {
                path = dir + main;
            } else {
                path = dir + path;
            }
            fileUtil.getContent(path, callback);
        }
    };

});