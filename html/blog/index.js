require.config({
    baseUrl: "../../",
    paths: {
        "urlUtil": "js/utils/UrlUtil",
        "converter": "js/markdown/MarkdownConverter"
    }
});

require(['urlUtil', 'converter'], function (urlUtil, converter) {

    var dir = "../../blogs/";

    $(function () {
        var name = urlUtil.getUrlParam("name");
        var file = name + ".md";
        var path = dir + file;
		converter.convertHtml(path, function (html) {
            $("#content").html(html);
        })
    });
});