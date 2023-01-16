$(document).ready(function(){
    $("#name").on("input", function(){
        $("#ename").text($(this).val());
    });

    $("#designation").on("input", function(){
        $("#edesignation").text($(this).val());
    });

    $("#email").on("input", function(){
        $("#eemail").text($(this).val());
        $("#eemail").attr("href", "mailto:"+$(this).val());
    });

    // $("#tnumber").on("input", function(){
    //     $("#etel").text($(this).val());
    //     $("#etel").attr("href", "tel:"+$(this).val());
    // });

    $("#mnumber").on("input", function(){
        $("#emob").text($(this).val());
        $("#emob").attr("href", "tel:"+$(this).val());

    });

    // $("#website_url").on("input", function(){
    //     $("#ewebsite").text($(this).val());
    // });

    $("#address").on("input", function(){
        $("#eaddress").text($(this).val());
    });

    // $("#inp").on("input", function(){
    //     $("#elogo").text($(this).val());
    // });

    // $("#p_color").on("input", function(){
    //     $("#ep_color").text($(this).val());
    // });

    // $("#s_color").on("input", function(){
    //     $("#es_color").text($(this).val());
    // });
});

document.getElementById("buttonSaveEmailSignature").addEventListener("click", function(){
    var text = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Signature</title>
    <style>
        *{
            margin: 0px;
            padding: 0px;
        }
        body{
            width: 100%;
            margin: 0 auto;
            background-color: #ABABAB;
            padding-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        button{
            padding: 20px;
            margin-top: 40px;
            border: none;
            border-radius: 10px;
            font-weight: bolder;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 7px 7px 20px 0 rgba(0,0,0,0.3);
            background-color: #282828;
            color: white;
        }
    </style>
</head>
<body>
    <div id="EmailSignature" style="background-color: white; box-shadow: 7px 7px 20px 0 rgba(0,0,0,0.3); padding: 10px;">
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
        </style>
        <table width="480" height="134" cellspacing="0" cellpadding="0" border="0"  style="width: 480px; min-width: 480px; max-width: 480px; border-collapse: collapse; border:0; border-spacing: 0; background-color: #E8E8E8;">
            <tr>
                <td width="200" height="134" style="font-size: 0;">
                    <img  src="/e-signature/img/pp_image.jpg" alt="" width="200" height="80" border="0" style="width: 160px;height: 119px;">
                </td>
                <td width="320" height="134" style="padding-left: 15px; font-size: 0;">
                    <span id="ename" style="font-size: 14px; font-family: 'Roboto', sans-serif; font-weight: 700; color: #000; line-height: 1;">${document.getElementById("name").value}</span>
                    <br>
                    <span id="edesignation" style="font-size: 13px; font-family: 'Roboto', sans-serif; font-weight: 400; color: black; line-height: 1;">${document.getElementById("designation").value}</span>
                    <br>
                    <span style="font-size: 13px; font-family: 'Roboto', sans-serif; font-weight: 400; line-height: 1;">&nbsp;</span>
                    <br>
                    <span style="font-size: 13px; font-family: 'Roboto', sans-serif; font-weight: 700; color: #000; line-height: 1;">Email:&nbsp;</span>
                    <a id="eemail" href="mailto:${document.getElementById("email").value}" style="text-decoration: none; font-size: 13px; font-family: 'Roboto', sans-serif; font-weight: 400; color: black;">${document.getElementById("email").value}</a>
                    <br>
                    <span style="font-size: 13px; font-family: 'Roboto', sans-serif; font-weight: 700; color: #000; line-height: 1; margin-left: -6px;">&nbsp;&nbsp;Mob:&nbsp;</span>
                    <a id="etel" href="tel:${document.getElementById("mnumber").value}" style="text-decoration: none; font-size: 13px; font-family: 'Roboto', sans-serif; font-weight: 400; color: black; line-height: 2;">${document.getElementById("mnumber").value}</a>
                    <br>
                    <span style="font-size: 13px; font-family: 'Roboto', sans-serif; font-weight: 700; color: #000; line-height: 1;">Add:&nbsp;</span>
                    <a id="eaddress" href="https://goo.gl/maps/Lhz8kvyjnrUr7aCT9" target="_blank" style="text-decoration: none; font-size: 13px; font-family: 'Roboto', sans-serif; font-weight: 400; color: black;">${document.getElementById("address").value}</a>
                </td>
                <td width="10" height="134" style="font-size: 0; display:block;margin-left:auto">
                     <img src="/e-signature/img/l.png" alt="" width="10" height="134" border="0">
                </td>
            </tr>
        </table>
    </div>

    <button id="buttonCopyEmailSignature" onclick="CopyEmailSignature()">Copy Email Signature</button>
    <button id="buttonCopySourceCode" onclick="CopySourceCode()">Copy Source Code</button>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://syedakhadizatulmaria.xyz/FES/14/4/gulguli.js"></script>
</body>
</html>`;
    var filename = document.getElementById("name").value+".htm";
    
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}, false);