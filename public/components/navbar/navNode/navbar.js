angular.module('componentExample').component('naviNode', {
  templateUrl: 'components/navbar/navNode/navbar.html',
  controller: naviNodeController,
	controllerAs:'naviNodeCtrl',
  transclude:{
      navNode:'navNode'
  }
}).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  $mdThemingProvider.alwaysWatchTheme(true);
});

function naviNodeController() {
	var naviCtrl= this;
  naviCtrl.recordCurrentPos=0;
  naviCtrl.records=[{id:0,label:'Mangalore==>Mumbai'},{id:1,label:'Mumbai==>Bangalore'},{id:2,label:'Bangalore==>Pune'},{id:3,label:'Bangalore==>Pune'},{id:4,label:'Bangalore==>Pune'}]
  naviCtrl.increment= function() {
    if(naviCtrl.recordCurrentPos<naviCtrl.records.length-1){
        naviCtrl.recordCurrentPos++;
    }else {
        naviCtrl.recordCurrentPos
    }
  }
  naviCtrl.decrement=function() {
    if(naviCtrl.recordCurrentPos>0 ){
      naviCtrl.recordCurrentPos--;
    }else {
      naviCtrl.recordCurrentPos
    }
  }
}
