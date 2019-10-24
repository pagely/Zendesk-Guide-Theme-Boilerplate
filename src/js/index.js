import copenhagen from "./copenhagen";
import "bootstrap/dist/css/bootstrap-grid.css";
// Access config values via _config
//console.log(_config.category_ticket_field);

/*
PAGELY JS
*/

function redirectArticles() {
  var url = window.location.href;
  if (url.includes("support.pagely.com/hc/en-us/articles/")) {
    var titleId = url.replace(
      "https://support.pagely.com/hc/en-us/articles/",
      ""
    );

    //Checks for more than just ID number in URL (usually title of article in URL)
    if (titleId.includes("-")) {
      var currentId = titleId.substring(0, titleId.indexOf("-"));
    }
    //If nothing else, then titleId it is set to currentId variable
    else {
      var currentId = titleId;
    }

    //Initializes an object for external redirects and an object for Guide redirects
    var redirect = {};
    var external_redirect = {};

    //Internal Redirect Mapping - From a Zendesk Guide article to another Guide article
    //Redirect[‘old article id’] = new article id;
    //Redirect[‘1’] = 2;
    //example:
    redirect["360000332291"] = 227131167;
    redirect["226884367"] = 227131167;
    redirect["200236850"] = 203115864;
    redirect["200237010"] = 360000032212;
    redirect["218441547"] = 360007390832;
    redirect["201162260"] = 115003871111;

    //Replace YOURSUBDOMAIN with the location of your help center. For example, “support.company.com”
    //Redirects if needed -> Doesn’t redirect if not.
    if (currentId in redirect) {
      if (typeof redirect[currentId] !== "undefined") {
        newUrl =
          "https://support.pagely.com/hc/en-us/articles/" + redirect[currentId];
        window.location.replace(newUrl);
      }
    } else if (currentId in external_redirect) {
      if (typeof external_redirect[currentId] !== "undefined") {
        newExternalUrl = external_redirect[currentId];
        window.location.replace(newExternalUrl);
      }
    }
  }
}
redirectArticles();
