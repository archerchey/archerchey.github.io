/**
 * Created by archer on 2017/2/3.
 */

require.config({
    paths: {
        "jquery": "lib/jquery/jquery-3.1.1.min",
        "showdown": "lib/showdown/showdown.min",
        "fileUtil": "js/utils/FileUtil"
    }
});

define(['jquery', 'showdown', 'fileUtil'], function ($, showdown, fileUtil) {

    return {
        convertHtml: function (file, callback) {

            function convert(markdown) {
                var converter = new showdown.Converter();
                var html = converter.makeHtml(markdown);
                if (typeof callback === "function"){
                    callback(html);
                }
            }

            fileUtil.getContent(file, convert);
        }
    };

});