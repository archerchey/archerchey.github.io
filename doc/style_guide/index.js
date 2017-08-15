/**
 * Created by archer on 2017/3/4.
 */

require.config({
    baseUrl: "../../",
    paths: {
        "urlUtil": "js/utils/UrlUtil",
        "converter": "js/markdown/MarkdownConverter"
    }
});

require(['urlUtil', 'converter'], function (urlUtil, converter) {

    $(function () {
        var name = urlUtil.getUrlParam("name");
        var file = name + ".md";
		converter.convertHtml(file, function (html) {
            $("#content").html(html);
        })
    });
});