function t() {
    $('#time').text(moment().format('h:mm A'))
    $('#time').css('color', 'white');
    $('#time').css('text-align', 'center');
    $('#time').css('font-size', '150px');
    // $('#time').css('padding-top', '100px');
    $('#time').css('margin', 'auto', '0');

};
t();