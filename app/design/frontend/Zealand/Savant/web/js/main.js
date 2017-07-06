define([
  "jquery",
], 
function($) {
  "use strict";

  // Here your custom code...
  //console.log('Hola2');
  $(document).ready(function() {
	var address = $(location).attr('href');
	console.log(address);
	var header = $(".page-header");
	var me  = document.currentScript;
	console.log(header.getAttribute('src'));
	console.log(me.getAttribute('src'));
	header.css("background-image","none").delay( 5000 ).css("background-image","url(../images/backgrounds/zips.jpg)");
	console.log('background done');
  });
  return;
});