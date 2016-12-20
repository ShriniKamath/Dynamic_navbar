angular.module('componentExample').component('naviBar', {
  templateUrl: 'components/navbar/navbar.html',
  controller: naviController,
	controllerAs:'naviCtrl',
  transclude: {
      navbarDetails: 'navbarDetails', // mandatory transclusion
  },

})
function naviController($scope, $element, $attrs, $transclude) {

  // var count = $transclude.find('navbar-details')[0].children.length;
  // var content = $transclude.find('navbar-details')[0];
  // console.log(content);
  // console.log("Transcluded html content nodes:"+count);

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
