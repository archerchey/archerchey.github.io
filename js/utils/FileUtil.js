/**/

require.config({
    paths: {
        "jquery": "lib/jquery/jquery-3.1.1.min"
    }
});

define(['jquery'], function ($) {

    return {
        getContent: function (file, callback) {
            $.ajax({
                url: file,
                async: true,
                success: callback
            });
        }
    };

});