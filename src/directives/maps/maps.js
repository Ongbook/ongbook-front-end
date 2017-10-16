(function(){
  'use strict;'
  angular
  .module('ongbook')
  .directive('maps',function () {
    return {
      restrict:'E',
      template:'<div></div>',
      replace:true,
      link:function ( scope, element, attrs ) {
        var mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(-14.18650192, -51.89766873),
          mapTypeId: google.maps.MapTypeId.TERRAIN
        }  
        scope.map = new google.maps.Map(document.getElementById('maps'), mapOptions);
        scope.cep = new google.maps.Geocoder();
      }
    }
  });
})();