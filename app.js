(function(){

  var options = INSTALL_OPTIONS;
  var isPreview = INSTALL_ID == "preview";

  if (!options.customerId) {
    return;
  }

  var script = document.createElement('script');
  document.head.appendChild(script);

  script.src = 'https://cdn.ramen.is/assets/ramen.js';

  if (isPreview){
    script.src += "?preview=true";
  }

})();
