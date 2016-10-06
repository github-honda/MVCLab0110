function CheckSubmitUpdate() {

    var sError = "";
    var vMS1 = document.getElementById('txtMS1').value;
    var vMS2 = document.getElementById('txtMS2').value;
    var vMI1 = document.getElementById('txtMI1').value;
    var vMI2 = document.getElementById('txtMI2').value;

    if (vMS1 == "")
        sError += "\n欄位編號不可空白.";
    if (vMS2 == "")
        sError += "\n欄位姓名不可空白.";
    if (!parseInt(vMI1, 10))
        sError += "\n欄位國文分數請輸入整數.";
    if (!parseInt(vMI2, 10))
        sError += "\n欄位英文分數請輸入整數.";

    if (sError != "") {
        sError = "錯誤通知:" + "\n" + sError;
        alert(sError);
        return false;
    }
    else {
        return confirm("確認修改嗎?");
    }
}

function CheckSubmitDelete() {

    var sError = "";
    var vMS1 = document.getElementById('txtMS1').value;

    if (vMS1 == "")
        sError += "\n欄位編號不可空白.";

    if (sError != "") {
        sError = "錯誤通知:" + "\n" + sError;
        alert(sError);
        return false;
    }
    else {
        return confirm("確認刪除嗎?");
    }
}

