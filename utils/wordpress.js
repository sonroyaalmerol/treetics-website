const Wordpress = require('wpapi');
const { backendURL } = require('./constants');

const wp = new Wordpress({
  endpoint: `${backendURL}/wp-json`
})

wp.comics = wp.registerRoute('wp/v2', '/comics/(?P<id>\\d+)' );
wp.theMasterOfColor = wp.registerRoute('wp/v2', '/the_master_of_color/(?P<id>\\d+)' );
wp.drawings = wp.registerRoute('wp/v2', '/drawings/(?P<id>\\d+)' );

module.exports = wp;