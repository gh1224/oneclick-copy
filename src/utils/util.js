export const copytoClipboard = function (text) {
    let copyTarget = document.createElement("input");
    copyTarget.type = "text";
    copyTarget.value = text;

    document.body.appendChild(copyTarget);
    copyTarget.select();
    document.execCommand("copy");
    document.body.removeChild(copyTarget);
}
