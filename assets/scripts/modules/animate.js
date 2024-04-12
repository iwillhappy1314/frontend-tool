export default function() {
  jQuery('[data-animate]').each(function(index, el) {
    const element = jQuery(el);

    if (0 === element.data('animate').length) {
      return element.attr('data-animated', 'true');
    }

    element.waypoint(function(direction) {

      if ('down' === direction) {
        if ('true' === element.data('animated')) {
          return;
        }

        setTimeout(function() {
          element.addClass(element.data('animate'));
          element.addClass('animated');
          element.attr('data-animated', 'true');
        }, 300);
      }
    }, {offset: '101%'});

  });
}