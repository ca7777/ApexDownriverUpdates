/* Credit: http://www.templatemo.com */

$(document).ready(function(){

	//$('#service_tabs li:first-child').tab('show');

	$('#services .services_buttons li').each( function(){
		$(this).on('click', function(){
			change_panels( $(this).index() );
		});
	});
    
    $('.nav a').on('click', function() {
        $('.navbar-toggle').click();
    });
    
    $('.bioslot').on('click', function(){
        var namevar = 'bio' + $(this).attr('name'); 
        $('.bioshown').removeClass('bioshown').addClass('biohidden');
        $("#" + namevar).removeClass('biohidden').addClass('bioshown');
    });
});

function change_panels(new_index){
	var arrow_positions = [ 20, 110, 205, 300, 395 ];
	var new_top = arrow_positions[new_index] + 'px';

	$('.arrow-left').animate({marginTop:new_top}, 500);
	$('#services_tabs li:nth-child('+(new_index+1)+')').tab('show');
	$('.services_buttons li').removeClass('active');
	$('.services_buttons li:nth-child('+(new_index+1)+')').addClass('active');
}

var map = '';

function initialize() {
    var mapOptions = {
      zoom: 9,
      center: new google.maps.LatLng(42.3861595,-83.207234)
    };
    apexIco = "//www.apexdownriver.com/images/favicon.ico";
    map = new google.maps.Map(document.getElementById('google_map'),  mapOptions);
    var myLatLng = {lat: 42.1630317, lng: -83.2298511};
    var marker = new google.maps.Marker({
        position: myLatLng,
        icon: apexIco,
        map: map,
        label: '',
        title: 'Apex Downriver Brownstown'

    });
    var myLatLng2 = {lat: 42.205062, lng: -83.4883612}; 
    var marker2 = new google.maps.Marker({
        position: myLatLng2,
        icon: apexIco,
        map: map,
        label: '',
        title: 'Apex Downriver Belleville'
    });
    var myLatLng3 = {lat: 42.2975842, lng: -83.3898921}; 
    var marker3 = new google.maps.Marker({
        position: myLatLng3,
        icon: apexIco,
        map: map,
        label: '',
        title: 'Apex Downriver Westland'
    });
    var myLatLng4 = {lat: 42.4792826, lng: -82.9456221}; 
    var marker4 = new google.maps.Marker({
        position: myLatLng4,
        icon: apexIco,
        map: map,
        label: '',
        title: 'Apex Downriver Eastpointe'
    });
}

// load google map
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);

