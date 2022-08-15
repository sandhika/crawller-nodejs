const axios = require('axios');
const jsonexport = require('jsonexport')
const fs = require('fs');

const strUrl = "https://shopee.co.id/api/v4/recommend/recommend?bundle=shop_page_category_tab_main&item_card=2&limit=30&offset=0&section=shop_page_category_tab_main_sec&shopid=270053909&sort_type=1&tab_name=popular";


axios.get(strUrl)
  .then((response) => {
    let dtJson =  response.data.data.sections[0].data.item;

    jsonexport(dtJson, function(err, csv) {
      if (err) return console.error(err);
      fs.writeFile('output.csv', csv, function(err) {
        if (err) return console.error(err);
        console.log('output.csv saved');
      });
    });
          
 
  });
