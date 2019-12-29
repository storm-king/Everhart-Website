$(document).ready(function()
{
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=185714634@N08&format=json&jsoncallback=?&"

    $.getJSON(url, function(data) {
        var html = "";
        var className = "contentPic"
        var banClassName = "bannerPic"
        $.each(data.items, function(i, item){
            if(item.title == "BeforeAndAfterSteeple"){
                var flickrPath = "https://live.staticflickr.com/65535/49108128902_cfecee13e0_c.jpg"
                html = "<img class=" + className + " src=" + flickrPath + ">";
                $("#homePic").html(html);
            }
            else if(item.title == "aboutUs-banner"){
                var flickrPath = "https://live.staticflickr.com/65535/49107842937_64957e2db6_c.jpg"
                html = "<img class=" + banClassName + " src=" + flickrPath + ">";
                $("#aboutUsBanner").html(html);
            }
            else if(item.title == "customer-reviews-banner"){
                var flickrPath = "https://live.staticflickr.com/65535/49107841377_73ed80c1dc_c.jpg"
                html = "<img class=" + banClassName + " src=" + flickrPath + ">";
                $("#customerReviewBanner").html(html);
            }
            else if(item.title == "contact-us-banner"){
                var flickrPath = "https://live.staticflickr.com/65535/49107649401_76728452eb_c.jpg"
                html = "<img class=" + banClassName + " src=" + flickrPath + ">";
                $("#contactBanner").html(html);
            }
            else if(item.title == "our-services-banner"){
                var flickrPath = "https://live.staticflickr.com/65535/49107841367_d31675e46f_c.jpg"
                html = "<img class=" + banClassName + " src=" + flickrPath + ">";
                $("#serviceBanner").html(html);
            }
        });       
    });
        

    $.getJSON("about.json", function(data){
        $.each(data, function(){
            $.each(this, function(key,value){
                $("#aboutIntroHead").append("<h1>" + value.header + "</h1>");
                $("#aboutContent").append("<p>" + value.paragraph1 + "</p>" +
                "<p>" + value.paragraph2 + "</p>" +"<p>" + value.paragraph3 + "</p>");
            });
        });
    });


    var images = ['images/steeple-logo-generic.png',
                  'images/aboutUs-banner.jpg',
                  'images/customer-reviews-banner.png',
                  'images/BeforeAndAfterSteeple.jpg',
                  'images/power-washing-service.jpg',
                  'images/church-exterior-painting.jpg',
                  'images/contact-us.png',
                  'images/contact-us-banner.png',
                  'images/our-services-banner.jpg',
                  'images/powerwash-service-pic.jpg',
                  'images/steeple-logo.png',
                  'images/painting-service.jpg',
                  'review1.png',
                  'review2.png',
                  'review3.png'];

    imagePreload = new Image();

    // preload the image for each link
    for (i = 0; i < 10; i ++){
        imagePreload.src = images[i]
    }

    $(".header").sticky({topSpacing:0});

    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 800,
        slideMargin: 0,
        randomStart: true,
        moveSlides: 1,
        pause: 5000
    });

    $("#datePicker").datepicker();


});
// end ready