// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {

    $('.btnSubmitTransaction').click(function(){
        clearAllText();
        $(this).find('.spinner-border').removeClass('d-none');
        $(this).prop('disabled', true);
        $('.text-success').addClass('d-none');
        $('.text-danger').addClass('d-none');
        loadData();
    });

    function clearAllText(){
        $('.blockHeight').text('');
        $(".transactionId").text('');
        $('#contentResponse').text('');
        $('#messageReceived').text('');
    }

    function enableSubmitBtn(){
        $('.btnSubmitTransaction').find('.spinner-border').addClass('d-none');
        $('.btnSubmitTransaction').prop('disabled', false);
        $('.btnText').text('Submit');
    }

    async function loadData() {
        var pfburl = $('#url').val();
        var pfbdata = $('#data').val();
        var pfbnamespace = $('#namespaceid').val();
        var pfbgaslimit = $('#gaslimit').val();
        var pfbfee = $('#fee').val();
        
        var tempParams = '{"namespace_id": "repnamespaceid","data": "repdata","gas_limit": repgaslimit, "fee": repfee}';

        var parameters = tempParams.replace('repnamespaceid',pfbnamespace).replace('repdata',pfbdata).replace('repgaslimit',pfbgaslimit).replace('repfee',pfbfee);

        //console.log(parameters);
              $.ajax({
                url: pfburl,
                type: 'POST',
                data: parameters ,
                contentType: 'application/json',
                success: function (res) {
                    console.log(res);
                    //alert(response.status);
                    var dataparse = JSON.stringify(res,undefined,2);
                    $('#contentResponse').text(dataparse);
                    //console.log(d.height); 
                    var responseHeight = res.height;
                    var responsetxhash = res.txhash;
                    $('.blockHeight').text(responseHeight);
                    $(".transactionId").attr("href", "https://testnet.mintscan.io/celestia-incentivized-testnet/txs/"+responsetxhash)
                    $(".transactionId").text(responsetxhash);
                    

                    $('.text-success').removeClass('d-none');
                    $('.text-danger').addClass('d-none');

                    var getmsgUrl = 'http://localhost:26659/namespaced_shares/'+ pfbnamespace +'/height/' + responseHeight;

                    console.log(getmsgUrl);
                    $('.btnText').text('Getting message...');
                    $.ajax({
                        url: getmsgUrl,
                        type: 'GET',
                        contentType: 'json',
                        success: function(msgResponse){
                            $('#messageReceived').html(msgResponse);
                            enableSubmitBtn();
                        },
                        error: function(req,stt,err){
                            $('#messageReceived').html(req.responseText);
                            enableSubmitBtn();
                        }
                    });
                },
                error: function (xhr, status, error) {
                    $('#contentResponse').html(xhr.responseText);
                    $('.text-danger').removeClass('d-none');
                    $('.text-success').addClass('d-none');
                    enableSubmitBtn();
                    //console.log(xhr.responseText);
                }
            }); 
            
            
            
        }
});

