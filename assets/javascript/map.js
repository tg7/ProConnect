 // be sure to add a div variable & to call the Google maps API
 /*<script async defer 
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxR5SgHlsHnIOB4A_I2SfLcFhOt9CYLMM&callback=initialize">*/
 // Declare Map variable 
     // Declare Map variable 
     console.log(true);
      var map;
      var markersData =[
      {
        lat:40.7128,
        lng:-74.0059,
        name:" New York",
        number:20
      },
      {
        lat:42.3132878,
        lng:-71.197586,
        name:"Boston",
        number: 11

      },
      {
        lat:34.0201797,
        lng:-118.6926154,
        name:"Los Angeles",
        number: 8
      },
      {
        lat:41.8333909,
        lng:-88.0130334,
        name:'Chicago',
        number:10
      },
      {
        lat:32.8203509,
        lng:-97.0122232,
        name:'Dallas',
        number:10

      },{
        lat:40.004668,
        lng:-75.2584623,
        name:'Philadelphia',
        number:10
      }];
      // on click function

      //display markers 
      function displayMarkers(){
        console.log(true);
       // this variable sets the map bounds and zoom level according to markers position
       var bounds = new google.maps.LatLngBounds();

       //for loop to set markers 
       for(var i = 0; i < markersData.length; i++){
        var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var number = markersData[i].number;
        console.log(number);
        //create markers 
        createMarkers(latlng,name,number);
        //Marker’s Lat. and Lng. values are added to bounds variable
        bounds.extend(latlng); 
       }
       map.fitBounds(bounds);
      };
      //create Marker
      function createMarkers(latlng,name,number){
        console.log(false);
        var marker = new google.maps.Marker({

          map: map,
          position: latlng,
          icon:{
            path: google.maps.SymbolPath.CIRCLE,
            scale: number,
            fillColor: 'red',
            fillOpacity:.3,
            strokeColor: 'black',
            strokeWeight: .5
          },
          customInfo: name,
          title: name
        });
        console.log(marker.customInfo + 1);
        google.maps.event.addListener(marker, 'click', function() {
          //Add event that will play music based on this specific location  
          // set variable equal to this clickable item 
          var item = $(this);
          //displa customer info 
          console.log(item[0].customInfo);
        });
      };
      // display the map 
      function initialize() {
        // Set the map options 
        var mapOptions = {
        center: {lat: 36.1998698, lng: -100.7912721},
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      };
        // using the google maps library to set the map div = to the map variable 
        map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
        displayMarkers();
      
      }
      // This loads my map on the modal 
      $("#myModal").on("shown.bs.modal", function () {
        var currentCenter = map.getCenter();  // Get current center before resizing
        google.maps.event.trigger(map, "resize");
        map.setCenter(currentCenter); 
      });// Re-set previous cente});
      // setting the size of a circle using the inforamtion from the json call
      


