import copenhagen from './copenhagen';
import 'bootstrap/dist/css/bootstrap-grid.css';
// Access config values via _config
//console.log(_config.category_ticket_field);

/*
PAGELY JS
*/
function render_base_jsonld() {
  // org
  var org = {
      "@context":"https://schema.org",
      "@graph": {
          "@type":"Organization",
          "@id":"https://pagely.com/schema/#Organization",
          "logo": {
              "@type": "ImageObject",
              "@id": "https://pagely.com/schema/#Logo",
              "url": "https://pagely.com/wp-content/uploads/2018/02/Pagely-Plg-e1519237068561-400x400.png",
              "caption": "Pagely\u00ae"
          }
          ,
          "name":"Pagely\u00ae",
          "url":"https://pagely.com/",
          "address":"515 E Grant St, Phoenix, AZ 85004",
          "duns":"167592109",
          "legalName":"Pagely, Inc.",
          "brand": {
              "@type": "Brand",
              "slogan": "We help big brands scale WordPress."
          }
          ,
          "owns":[ {
              "@id": "https://pagely.com/schema/#MainProduct"
          }
          ],
          "sameAs":["https://www.facebook.com/Pagely/",
          "https://twitter.com/pagely",
          "https://www.youtube.com/channel/UC4dnevdU6PxjMoRdFJYXVig",
          "https://www.linkedin.com/company/pagely/",
          "https://support.pagely.com/",
          "https://pagelysucks.com/",
          "https://pagelyreviews.com/",
          "https://whypagely.com/",
          "https://northstack.com/",
          "https://answers.northstack.com/",
          "https://docs.northstack.com/"]
      }
    };

  var orgJSON = JSON.stringify(org);

  var el = document.createElement('script');
  el.type = 'application/ld+json';
  el.text = orgJSON;
  document.querySelector('body').appendChild(el);

  // website
  var website_id = "https://support.pagely.com/hc/en-us/schema/#WebSite";
  var website = {
     "@context":"https://schema.org",
     "@graph": {
         "@type":"WebSite",
         "@id": website_id,
         "url": "https://support.pagely.com/hc/en-us/",
         "publisher": {
             "@id": "https://pagely.com/schema/#Organization"
         }
         ,
         "potentialAction": {
             "@type":"SearchAction",
             "target":"https://support.pagely.com/hc/en-us/search?utf8=✓&query={query}",
             "query-input": "required name=query"
         }
     }
  };

  var websiteJSON = JSON.stringify(website);
  var el = document.createElement('script');
  el.type = 'application/ld+json';
  el.text = websiteJSON;
  document.querySelector('body').appendChild(el);

  // website
  var metatag = $("link[rel=canonical]");
  var canonical = metatag.attr('href');
  //console.log(canonical);
  var webpage = {
    "@context":"https://schema.org",
    "@graph": {
      "@type":"WebPage",
      "@id": canonical+"/schema/#WebPage",
      "url": canonical,
      "inLanguage":"en-US",
      "name":"Managed WordPress Hosting by Pagely\u00ae",
      "description":"Pagely\u00ae is the original Managed WordPress Hosting provider, delivering flexible, enterprise-grade hosting &amp; support to help your business effectively scale WP.",
      "isPartOf":{
        "@id": website_id
      },
      "breadcrumb":null,
      "about":{
        "@id":"https://pagely.com/schema/#Organization"
      }
    }
  };

  var webpageJSON = JSON.stringify(webpage);
  var el = document.createElement('script');
  el.type = 'application/ld+json';
  el.text = webpageJSON;
  document.querySelector('body').appendChild(el);

  var product = {
    "@context":"https://schema.org",
    "@graph": {
      "@type":"Product",
      "@id":"https://pagely.com/schema/#MainProduct",
      "url":"https://pagely.com/",
      "name":"Pagely\u00ae Managed WordPress Hosting",
      "category":"Managed WordPress Hosting and Support",
      "description":"Scalable Managed WordPress Hosting and Support by Pagely\u00ae",
      "brand":{
        "@type":"Brand",
        "slogan":"We help big brands scale WordPress"
      },
      "logo":{
        "@id":"https://pagely.com/schema/#Logo"
      },
      "image":{
        "@id":"https://pagely.com/schema/#Logo"
      },
      "mpn":"Pagely Service",
      "sku":"Pagely Service",
      "manufacturer":{
        "@id":"https://pagely.com/schema/#Organization"
      }
    }
  };

  var productJSON = JSON.stringify(product);
  var el = document.createElement('script');
  el.type = 'application/ld+json';
  el.text = productJSON;
  document.querySelector('body').appendChild(el);
}
render_base_jsonld();
