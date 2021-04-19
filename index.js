window.onscroll = setHeaderStyle;
window.onresize = setHeaderStyle;

function navBarExpand() {
  if (document.getElementById("navBarToggle").checked) {
    if (window.matchMedia("(max-width: 460px)").matches) {
      document.getElementById("navBar").style.width = "192px";
      document.getElementById("navBarHeader").style.display = "inherit";
      document.getElementById("navBarHeaderLogo").style.display = "block";
      document.getElementById("navBarHeaderImg").style.display = "block";
      document.getElementById("navBarItemLabelCatalog").style.display = "block";
      document.getElementById("navBarItemLabelHealth").style.display = "block";
      document.getElementById("navBarItemLabelBeauty").style.display = "block";
      document.getElementById("navBarItemLabelLeisure").style.display = "block";
      document.getElementById("navBarItemLabelAuto").style.display = "block";
    } else {
      document.getElementById("navBar").style.width = "240px";
      document.getElementById("navBarHeaderLogo").style.display = "block";
      document.getElementById("navBarItemLabelCatalog").style.display = "block";
      document.getElementById("navBarItemLabelHealth").style.display = "block";
      document.getElementById("navBarItemLabelBeauty").style.display = "block";
      document.getElementById("navBarItemLabelLeisure").style.display = "block";
      document.getElementById("navBarItemLabelAuto").style.display = "block";
    }
  } else {
    document.getElementById("navBarHeader").style.display = null;
    document.getElementById("navBar").style = null;
    document.getElementById("navBarHeaderImg").style = null;
    document.getElementById("navBarHeaderLogo").style = null;
    document.getElementById("navBarItemLabelCatalog").style = null;
    document.getElementById("navBarItemLabelHealth").style = null;
    document.getElementById("navBarItemLabelBeauty").style = null;
    document.getElementById("navBarItemLabelLeisure").style = null;
    document.getElementById("navBarItemLabelAuto").style = null;
  }
}

function setHeaderStyle() {
  let isScroll =
    document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;

  if (window.matchMedia("(max-width: 460px)").matches) {
    if (isScroll) {
      document.getElementById("searchHeaderName").style.display = "none";
      document.getElementById("searchHeader").style.paddingLeft = "68px";
      document.getElementById("searchHeader").style.paddingBottom = "27px";
      document.getElementById("searchHeader").style.paddingRight = "21px";
      document.getElementById("searchHeader_InputSearchIcon").style.backgroundImage = "none";
      document.getElementById("searchHeader_InputSearchIcon").style.padding = "12px 16px";
    } else {
      document.getElementById("searchHeaderName").style.display = "block";
      document.getElementById("searchHeaderName").style.textAlign = "right";
      document.getElementById("searchHeader").style.paddingTop = "26px";
      document.getElementById("searchHeader").style.paddingRight = "21px";
      document.getElementById("searchHeader").style.paddingBottom = "27px";
      document.getElementById("searchHeader").style.paddingLeft = "20px";
      document.getElementById("searchHeader_InputSearchIcon").style.backgroundImage = null;
      document.getElementById("searchHeader_InputSearchIcon").style.padding = null;
    }
  } else if (window.matchMedia("(max-width: 768px)").matches) {
    if (isScroll) {
      document.getElementById("searchHeaderName").style.display = "none";
      document.getElementById("searchHeader").style.paddingLeft = "77px";
      document.getElementById("searchHeader").style.paddingBottom = "27px";
      document.getElementById("searchHeader").style.paddingRight = "27px";
    } else {
      document.getElementById("searchHeaderName").style.display = "block";
      document.getElementById("searchHeaderName").style.textAlign = "right";
      document.getElementById("searchHeader").style.paddingLeft = "26px";
      document.getElementById("searchHeader").style.paddingBottom = "27px";
      document.getElementById("searchHeader").style.paddingRight = "27px";
    }
  } else {
    if (isScroll) {
      document.getElementById("searchHeaderName").style.display = "none";
      document.getElementById("searchHeader").style.paddingLeft = "60px";
      document.getElementById("searchHeader").style.paddingBottom = "40px";
      document.getElementById("searchHeader").style.paddingRight = "60px";
    } else {
      document.getElementById("searchHeaderName").style.display = "block";
      document.getElementById("searchHeaderName").style.textAlign = "left";
      document.getElementById("searchHeader").style.paddingLeft = "60px";
      document.getElementById("searchHeader").style.paddingBottom = "40px";
      document.getElementById("searchHeader").style.paddingRight = "60px";
    }
  }
}
