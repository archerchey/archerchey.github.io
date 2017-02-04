/**
 * Created by archer on 2017/2/3.
 */

/*
* require
* jquery.js, showdown.js
*
* */
// var MarkdownConverter = function () {
//     return {
//         convertHtml: function (file, callback) {
//             function convert(markdown) {
//                 var converter = new showdown.Converter();
//                 var html = converter.makeHtml(markdown);
//                 if (typeof callback === "function"){
//                     callback(html);
//                 }
//             }
//
//             $.ajax({
//                 async: false,
//                 url: file,
//                 success: function (result) {
//                     convert(result)
//                 }
//             });
//         }
//     }
// }();

require.config({
    baseUrl: "../lib",
    paths: {
        "jquery": "jquery/jquery-3.1.1.min",
        "showdown": "showdown/showdown.min"
    }
});

require(['jquery', 'showdown'], function ($, showdown) {

    var MarkdownConverter = function () {
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
                    async: false,
                    url: file,
                    success: function (result) {
                        convert(result)
                    }
                });
            }
        }
    }();
});