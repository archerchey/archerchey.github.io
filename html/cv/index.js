/**
 * Created by archer on 2017/2/4.
 */

require.config({
    baseUrl: "../../",
    paths: {
        "converter": "js/markdown/MarkdownConverter"
    }
});

require(['converter'], function (converter) {

    var dir = "../../docs/cv/";
    var file = "cv.md";

    $(function () {
        var path = dir + file;
        converter.convertHtml(path, function (html) {
            $("#content").html(html);
        })
    });
});