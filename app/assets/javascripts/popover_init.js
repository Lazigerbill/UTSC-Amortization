

// $(document).ready ->
//   console.log('hello')
//   $("a[rel~=popover], .has-popover").popover()
//   $("a[rel~=tooltip], .has-tooltip").tooltip()


$(document).ready(function(){

    $('[data-toggle=popover].has-popover').popover({ 
        trigger:'hover',
        html: true, 
        content: function() {
          return $(this).next('#popover_content_wrapper').html();
        }
    });

});