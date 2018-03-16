$(document).ready (function () {
    $('form').submit(function () {
        //object to store the user inputs, the key's names match the placeholder attribute value of the input tags
        var info = {
            'First Name' : '',
            'Last Name' : '',
            'Email Address' : '',
            'Phone #' : ''
        }
        //loops through the input types, takes the user input and adds it to the object info
        //(as log as the input is not type submit to avoid the button)
        $('form input').each(function () {
            if ($(this).attr('type') != 'submit') {
                info[$(this).attr('placeholder')]=$(this).val();
            }
        });
        //appends a row with the user entered info to the table (a new row + its tds)
        $('table').append ('<tr><td>'+info['First Name']+'</td><td>'+info['Last Name']+'</td><td>'+info['Email Address']+'</td><td>'+info['Phone #']+'</td></tr>');
        return false;
    })
})