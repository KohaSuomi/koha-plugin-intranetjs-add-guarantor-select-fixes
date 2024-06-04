$(document).on('click', '#guarantor_search', function(e) {
    e.preventDefault();
    var newin = window.open('/cgi-bin/koha/members/search.pl?columns=action,cardnumber,name,category,branch,dateofbirth,address','popup','width=1024,height=768,resizable=no,toolbar=false,scrollbars=yes,top');
});