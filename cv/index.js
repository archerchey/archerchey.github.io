/**
 * Created by archer on 2017/2/4.
 */

var file = "曹琪-20170109.md";

require.config({
    paths: {
        "converter": "../js/markdown/MarkdownConverter"
    }
});

require(['converter'], function (converter) {


    $(function () {
        converter.convertHtml(file, function (html) {
            $("#content").html(html);
        })
    });
});