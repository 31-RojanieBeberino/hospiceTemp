$(document).ready(function(){
    $('#mselect').chosen();

    $('#datepicker').datepicker();

    $('#datepicker').on('changeDate', function() {
        $('#my_hidden_input').val(
            $('#datepicker').datepicker('getFormattedDate')
        );
    });


    $('#listCard').click(function(){
        $('.listCards').css('display', 'flex');
        $('.grdResult').css('display', 'none');
        $('.rsltMap').css('display', 'none');
    });

    $('#grdCard').click(function(){
        $('.listCards').css('display', 'none');
        $('.grdResult').css('display', 'flex');
        $('.rsltMap').css('display', 'none');
    });

    $('#rslt_map').click(function(){
        $('.listCards').css('display', 'none');
        $('.grdResult').css('display', 'none');
        $('.rsltMap').css('display', 'block');
    });


});


