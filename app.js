(function(){

  var options = INSTALL_OPTIONS;
  var isPreview = INSTALL_ID == "preview";

  window.ramenSettings = window.ramenSettings || {};
  window.ramenSettings.organization_id = "567370fa7765627985111a00";

  if (isPreview) {
    window.ramenSettings.user = {
      id: "eager-preview-user",
      email: "eager-preview-user@example.com",
      name: "Eager Preview User"
    };

    if (!options.organization_id) {
      window.ramenSettings.survey_id = "5673a44e7765626368ff0000";
    } else {
      window.ramenSettings.survey_id = "56738f9a7765624ca66e2200";
    }
  } else {
    if (options.automaticUser) {
      var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      for (var k in window) {
        if (k === 'frame' || k === 'frameElement' || k === 'parent' || k === 'opener' || k === 'top') {
          continue;
        }

        if (window.hasOwnProperty(k)) {
          try {
            var val = window[k];
            if (typeof v === 'object' && v.id && v.email && emailRegex.test(v.email)) {
              user = {};
              user.email = v.email;

              user.id = v.id || v.ID || v.USER_ID || v.userId;
              user.name = v.name || v.full_name || v.fullName || v.FULL_NAME || v.FULLNAME || (!v.firstName ? '' : v.firstName + v.lastName) || !v.username;
              user.createdAt = v.createdAt || v.created_at || v.created || v.created_date || v.createdDate || v.CREATED_AT;
            }
          } catch (e) {}
        }
      }
    } else {
      try {
        user = window.eval(options.manuallySpecifiedUser);
      } catch (e) {}
    }

    if (user && typeof user === 'object' && user.email && user.id) {
      window.ramenSettings.user = user;
    } else {
      return;
    }
  }

  var script = document.createElement('script');
  document.head.appendChild(script);

  script.src = 'https://cdn.ramen.is/assets/ramen.js';
})();
