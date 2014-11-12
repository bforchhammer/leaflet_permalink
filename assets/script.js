(function ($) {
    $(document).on('leaflet.map', function (e, settings, lMap) {
        if (settings.plugins.permalink) {
            lMap.addControl(new L.Control.Permalink(settings.plugins.permalink));
        }
    });
})(jQuery);
