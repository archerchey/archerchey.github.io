/**
 * Created by archer on 2017/2/4.
 */

var file = "cv.md";

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