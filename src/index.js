function parent(ele, targetSelector) {
  const targetList = Array.from(document.querySelectorAll(targetSelector));
  while (!targetList.includes(ele)) {
    if (ele.parentNode) {
      ele = ele.parentNode;
    } else {
      ele = null;
      break;
    }
  }
  return ele;
}

function linkAnalysis(link) {
  const toLink = encodeURIComponent(link);
  const referrer = encodeURIComponent(document.referrer);
  const localLink = encodeURIComponent(location.href);
  const gifImg = new Image();
  gifImg.src = `/ca.gif?f=${localLink}&t=${toLink}&r=${referrer}`;
}

function hancleClick(event) {
  const target = event.target;
  let toLink = null;
  if (target.nodeName === "A") {
    toLink = target.href;
  } else {
    const aNode = parent(target, "a");
    if (aNode) {
      toLink = aNode.href;
    }
  }
  toLink && linkAnalysis(toLink);
}

window.addEventListener("click", hancleClick, false);

// unload
function hancleUnload() {
  const body = "unload=unload";
  const headers = {
    type: "application/x-www-form-urlencoded",
  };
  const blobData = new Blob([body], headers);
  navigator.sendBeacon("/ca.gif", blobData);
}
window.addEventListener("unload", hancleUnload, false);
