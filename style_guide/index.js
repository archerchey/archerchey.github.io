/**
 * Created by archer on 2017/3/4.
 */

require.config({
    paths: {
        "utils": "../js/url/Utils",
        "converter": "../js/markdown/MarkdownConverter"
    }
});

require(['utils', 'converter'], function (utils, converter) {

    $(function () {
        var name = utils.getUrlParam("name");
        var file = name + ".md";
		converter.convertHtml(file, function (html) {
            $("#content").html(html);
        })
    });
});