function loadContract() {
    $(".contract").hide();
    var contract = $("#contract-val").val()
    $("#" + contract).show();
}

function updateNdaDate() {
    $("#nda-date").text($("#nda-date-val").val())
}

function updateNdaDisclosing() {
    $("#nda-disclosing").text($("#nda-disclosing-val").val())
}

function updateNdaRecipient() {
    $("#nda-recipient").text($("#nda-recipient-val").val())
}