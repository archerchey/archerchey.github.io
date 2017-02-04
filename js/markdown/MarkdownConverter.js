/**
 * Created by archer on 2017/2/3.
 */

require.config({
    baseUrl: "../lib",
    paths: {
        "jquery": "jquery/jquery-3.1.1.min",
        "showdown": "showdown/showdown.min"
    }
});

define(['jquery', 'showdown'], function ($, showdown) {

    return {
        convertHtml: function (file, callback) {

            function convert(markdown) {
                var converter = new showdown.Converter();
                var html = converter.makeHtml(markdown);
                if (typeof callback === "function"){
                    callback(html);
                }
            }

            $.ajax({
                async: true,
                url: file,
                success: function (result) {
                    convert(result)
                }
            });
        }
    };

});