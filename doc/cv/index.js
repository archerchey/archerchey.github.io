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

    var file = "cv.md";

    $(function () {
        converter.convertHtml(file, function (html) {
            $("#content").html(html);
        })
    });
});