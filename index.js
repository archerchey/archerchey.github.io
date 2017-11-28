require.config({
    baseUrl: "",
    paths: {
        "siteManger": "js/site/SiteManager"
    }
});

require(['siteManger'], function (siteManger) {

    $(function () {
        siteManger.getContent("blogs.json", function (result) {
            var list = result.blogs.list;
            list.forEach(function (ret) {
                // $("#blog_content").append("<a>" + ret.file + "</a>")
            })
        })
    });
});