function resizeIframe(obj) {
  obj.style.height = 0;
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

function selectText(containerid) {
  if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select();
  } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
  }
}

//  dynamic copyright year computation
function yearComputation() {
    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("cyear").innerHTML = n;
}