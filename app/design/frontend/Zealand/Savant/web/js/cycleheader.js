define(["jquery",
    ],
    function ($) {
        "use strict";
        var mageJsComponent = function(config,headerobj )
        {
            //Output string
            var headeronFLAG = 0;
            var Lastimage = "zips.jpg";
            var out ="zips.jpg";

            //Create the object with links to pictures.
            var pictureArray = [
                "zips.jpg","nutButtons.jpg","shellButtons.jpg","leatherButtons.jpg",
                "ribbon.jpg","fastenerTapes.jpg","snapsDomes.jpg",
                "hookEye.jpg" , "shindoElastics.jpg", "trims.jpg", "lace.jpg"
            ];
            var lookup = {default:"zips.jpg",
                buttons:{default:"nutButtons.jpg",
                    shell:"shellButtons.jpg" ,
                    corozonut:"nutButtons.jpg" ,
                    metal:"nutButtons.jpg" ,
                    woodcoconut:"nutButtons.jpg" ,
                    leathercorded:"leatherButtons.jpg" ,
                    nylonpolyester:"nutButtons.jpg" ,
                    other:"nutButtons.jpg" ,
                },
                ribboncordtape:{default:"ribbon.jpg",
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
                zips:{default:"zips.jpg",
                },
                sale:{default:"zips.jpg",
                },
            };

            //alert("Look in your browser's console");
            var path = config.imagelocation;
            console.log(config.imagelocation);
            var burl = config.baseurl;
            console.log(burl);
            var waitTime = parseInt(config.timeMS) * 1000;
            console.log(waitTime);
            console.log(config.timeMS);
            var address = $(location).attr('href');
            var trueAddress = address;
            address = address.replace(/-/g,"");
            address = address.replace(".html","");

            console.log(address);
            var header = $(".page-header");
            //Prepping Address for object navigation
            var addressParts = address.split("/");
            console.log(addressParts);
            //Navigating object with for each loop
            $.each(addressParts, function(I, part){
                if (Object.keys(lookup).includes(part)){
                    headeronFLAG = 2;
                    out = lookup[part].default;
                    var layer2 = Object.keys(lookup[part]);
                    $.each(layer2, function(I2, key){
                        if(addressParts.includes(key)){
                            headeronFLAG = 2;
                            out = lookup[part][key];
                            return false;
                        }
                    });
                    return false;
                }else if(trueAddress == config.baseurl){
                    console.log(trueAddress);
                    console.log(config.baseurl);
                    headeronFLAG = 1;
                }
            });

            //Function to cycle image
            function cyclehead() {
                var currentImage;
                var length;
                var random;
                console.log("cychead");
                do {
                 currentImage = pictureArray[Math.floor(Math.random()*pictureArray.length)];
                 console.log(currentImage)
                }
                while (currentImage === Lastimage);
                Lastimage = currentImage;
                header.css("background-image","url(" + path.replace("zips.jpg", currentImage) + ")");
                return;
            }

            if(headeronFLAG === 1){
                //Set first image
                header.css("background-image","url(" + path + ")");
                setInterval(cyclehead, waitTime );
            }else if(headeronFLAG === 2){
                header.css("background-image","url(" + path.replace("zips.jpg", out) + ")");
            }


        };

        return mageJsComponent;
    });
