function CopyEmailSignature() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#EmailSignature").html()).select();
    var str = $("#EmailSignature").html();

    function listener(e) {
            e.clipboardData.setData("text/html", str);
            e.clipboardData.setData("text/plain", str);
            e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);
    $temp.remove();

    document.getElementById("buttonCopyEmailSignature").innerHTML = "Email Signature Copied";
    document.getElementById("buttonCopySourceCode").innerHTML = "Copy Source Code";
}
function CopySourceCode() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($("#EmailSignature").html()).select();
    document.execCommand("copy");
    $temp.remove();

    document.getElementById("buttonCopySourceCode").innerHTML = "Source Code Copied";
    document.getElementById("buttonCopyEmailSignature").innerHTML = "Copy Email Signature";
}