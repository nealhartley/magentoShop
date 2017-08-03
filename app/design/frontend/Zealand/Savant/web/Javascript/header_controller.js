/*define(["jquery",
], 
function ($) {
	"use strict";*/
	///////////////////////////////////////////////////////////////////////////////////////////////
	//My code block below, surrounding code is required syntax to make it usable with the magento require system

window.onload = function() {

    //if this is not the homepage or product pages we need different header functionality
    //we need to make some boolean statements for each not found.

    //list of pages that need different styling
    //checkout
    var checkout_bool = function () {
        return window.location.href.indexOf("checkout") > -1
    };
    //account
    var account_bool = function () {
        return window.location.href.indexOf("account") > -1
    };
    //contact
    var contact_bool = function () {
        return window.location.href.indexOf("contact") > -1
    };
    //advanced
    var advanced_bool = function () {
        return window.location.href.indexOf("advanced") > -1
    };
    //search/term/popular
    var search_terms_bool = function () {
        return window.location.href.indexOf("search/term/popular") > -1
    };
    //privacy-policy-cookie-restriction-mode
    var privacy_bool = function () {
        return window.location.href.indexOf("privacy-policy-cookie-restriction-mode") > -1
    };
    //magento/sales/guest/form/
    var returns_bool = function () {
        return window.location.href.indexOf("magento/sales/guest/form") > -1
    };

    if (checkout_bool() || account_bool() || contact_bool() || advanced_bool() || search_terms_bool() || privacy_bool() || returns_bool()) {
        console.log("you are in the checkout v23");

        var logo = document.getElementsByClassName('logo')[0];

        //disable bg images
        var pageheader = document.getElementsByClassName('page-header')[0];

        logo.style.paddingTop = '20px';
        return;
    }

    //this is if it is a product page
    var window_width = document.body.clientWidth;
    var window_height = document.body.clientHeight;


    console.log("window_width: " + window_width + "  window height: " + window_height);

    //we are going to adjust header element so need references to it
    var header_list = document.getElementsByClassName('page-header');

    var header = header_list[0];
    var header_height = header.clientHeight;

    console.log("header list length: " + header_list.length);

    console.log("current height of header: " + header_height);

    //make sure everything is ints
    var header_height_int = parseInt(header_height);
    var window_height_int = parseInt(window_height);
    var window_width_int = parseInt(window_width);


    //1.give correct padding

    //calc difference in order to pad header to fill entire screen
    var difference = window_height_int - header_height_int;
    //add this as padding to the bottom of the header element

    //i goofed and now need to add functionality that is obsolete, we are gonna check
    //to make sure we are on the home page or one of the products or products children pages

    var pages_w_header = [ 'buttons', 'ribbon-cord-tape', 'fasteners', 'elastic', 'trims', 'sale' ];
    var frontpage = 'http://savant.dev.myzealand.com/magento/';

    console.log(window.location.href);

    //now loop through pages_w_header and check if it equals one of them, or equals frontpage url
    for (var i =0; i < pages_w_header.length; i++) {
        if(window.location.href.indexOf(pages_w_header[i]) > -1 || window.location.href == frontpage) {
            if (window_width >= 768) {//desktop view
                console.log("inside window width statement");
                header.style.paddingBottom = difference + "px";

            } else {
                console.log("padding for header as 1/4 screen height: " + screen.height);
                header.style.paddingBottom = screen.height / 4 + "px";
            }
        }
    }
    //2.restyle the image contained within the header


    //3.reposition the image contained within the header

};
	//end of my code block//
	////////////////////////

 /*   return mageJsComponent;
});*/