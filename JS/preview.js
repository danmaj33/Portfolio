 $(".preview-button").click(function() {
                     var addrs = $(this).attr('data-gbr');
                     var ttl = $ (this).attr('data-judul');
                     $(".the-image").attr({
                       "src": addrs
                     })
                     $(".judul").html(ttl)
                     $(".the image").show(0);
                     $(".fullscreen").fadeIn(300);
                   });
                   
                   $(".fullscreen").click(function() {
                     $(".fullscreen").fadeOut(300, function() {});
                   });