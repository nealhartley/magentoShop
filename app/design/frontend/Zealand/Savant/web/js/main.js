define(["jquery",
], 
function ($) {
	"use strict";
    var mageJsComponent = function(imagelocation)
    {
		//Output string
		var out = "zips.jpg";

		//Create the object with links to pictures.
		var lookup = {default:"zip.jpg",
				buttons:{default:"nutButtons.jpg",
					shell:"shellButtons.jpg" ,
					corozonut:"nutButtons.jpg" ,
					metal:"nutButtons.jpg" ,
					woodcoconut:"nutButtons.jpg" ,
					leathercorded:"leatherButtons.jpg" ,
					nylonpolyester:"nutButtons.jpg" ,
					other:"nutButtons.jpg" ,
				},
				ribbioncordtape:{default:"ribbon.jpg",
					ribbion:"ribbon.jpg" ,
					cord:"ribbon.jpg" ,
					tape:"ribbon.jpg" ,
					pipingbinding:"ribbon.jpg" ,
					other:"ribbon.jpg" ,
				},
				fasteners:{default:"fastenerTapes.jpg",
					bucklessliders:"fastenerTapes.jpg",
					rings:"fastenerTapes.jpg" ,
					snapsdomes:"snapsDomes.jpg" ,
					hookeye:"hookEye.jpg" ,
					clipspins:"fastenerTapes.jpg" ,
					fastnertapes:"fastenerTapes.jpg" ,
					other:"fastenerTapes.jpg" ,
				},
				elastic:{default:"shindoElastics.jpg",
				},
				trims:{default:"trims.jpg",
					lace:"lace.jpg" ,
					sequinbeaded:"trims.jpg" ,
					fringing:"trims.jpg" ,
					braid:"trims.jpg" ,
				},
				sale:{default:"zip.jpg",
				},
			};

        //alert("Look in your browser's console");
		var path = imagelocation.imagelocation;
        console.log(imagelocation.imagelocation);
		var address = $(location).attr('href');
        address = address.replace(/-/g,"");
		address = address.replace(".html","");

		console.log(address);
		var header = $(".page-header");
		//Preping Address for object navigation
		var addressParts = address.split("/");
		console.log(addressParts);
		//Navigating object with for each loop
        $.each(addressParts, function(I, part){
			if (Object.keys(lookup).includes(part)){
				out = lookup[part].default;
				var layer2 = Object.keys(lookup[part]);
                $.each(layer2, function(I2, key){
						if(addressParts.includes(key)){
							out = lookup[part][key];
							return false;
						}
				});
				return false;
			}
		});



		path = path.replace("zips.jpg", out);
		//Set new image
		path = "url(" + path + ")";
		header.css("background-image",path);
    };

    return mageJsComponent;
});