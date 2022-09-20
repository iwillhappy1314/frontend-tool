import Cookies from 'js-cookie';
import uniq from 'uniq';

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

let loading = '<svg class="animate-spin ml-2 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">\n' +
    '        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>\n' +
    '        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>\n' +
    '      </svg>';

jQuery(document).ready(function($) {
    let inquiryCart = Cookies.get('wenpriseInquiryCart') ? JSON.parse(Cookies.get('wenpriseInquiryCart')) : [];
    $('.rs-inquiry').click(function() {
        inquiryCart.push($(this).data('pid'));
        $(this).addClass('loading').append(loading);

        Cookies.set('wenpriseInquiryCart', JSON.stringify(uniq(inquiryCart)));

        sleep(500).then(() => {
            $(this).removeClass('loading').text('View Inquiry List');
        });

        return false;
    });
});
