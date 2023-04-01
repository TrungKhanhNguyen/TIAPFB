// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {

    $('.btnSubmitTransaction').click(function(){
        $(this).find('.spinner-border').removeClass('d-none');
        $(this).prop('disabled', true);
        loadData();
    });

    async function loadData() {
        var pfburl = $('#url').val();
        var pfbdata = $('#data').val();
        var pfbnamespace = $('#namespaceid').val();
        var pfbgaslimit = $('#gaslimit').val();
        var pfbfee = $('#fee').val();
        const parameters = {namespace_id : pfbnamespace, data : pfbdata, gas_limit: pfbgaslimit, fee : pfbfee};
        var sdsd = JSON.stringify(parameters);
        console.log(sdsd);
            // const test = await fetch(pfburl, {
            //     method: 'POST',
            //     body: JSON.stringify(parameters),
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // })
            // .then(response => response.text())
            // .catch((error) => {
            //     console.error("Error:", error);
            //   });
            // postData("http://localhost:26659/submit_pfb", { "namespace_id": "0c204d39600fddd3", "data": "f1f20ca8007e910a3bf8b2e61da0f26bca07ef78717a6ea54165f5","gas_limit": 80000,"fee": 2000}).then((data) => {
            //     console.log(data); // JSON data parsed by `data.json()` call
            // });
            //const datatest = await test.json();
            //$('.contentResponse').html(test);
        }
});

