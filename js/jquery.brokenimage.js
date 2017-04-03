(function ($) {
    $.extend($.fn, {
        qImageFallback: function () {
            return this.each(function () {
                var image = this;
                if (!image.complete || typeof image.naturalWidth == "undefined" || image.naturalWidth == 0) {
                    var fallback = $(image).attr("data-fallback");
                    $(this).unbind("error").attr("src", fallback);
                }
            });
        }
    });
})(jQuery);