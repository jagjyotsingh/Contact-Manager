angular.module("ContactApp", [])
.controller("ContactController", function($scope){


$scope.createOrEdit = true;
(function(){ 
	$scope.contacts = [
            {
              id: 1,
              name : 'Terrence S. Hatfield',
              tel: '651-603-1723',
              email: 'TerrenceSHatfield@rhyta.com',
			  face: 11
            },
            {
              id: 2,
              name : 'Chris M. Manning',
              tel: '513-307-5859',
              email: 'ChrisMManning@dayrep.com',
			  face: 10
            },
            {
              id: 3,
              name : 'Ricky M. Digiacomo',
              tel: '918-774-0199',
              email: 'RickyMDigiacomo@teleworm.us',
			  face: 13
            },
            {
              id: 4,
              name : 'Michael K. Bayne',
              tel: '702-989-5145',
              email: 'MichaelKBayne@rhyta.com',
			  face: 8
            },
            {
              id: 5,
              name : 'John I. Wilson',
              tel: '318-292-6700',
              email: 'JohnIWilson@dayrep.com',
			  face: 7
            },
            {
              id: 6,
              name : 'Rodolfo P. Robinett',
              tel: '803-557-9815',
              email: 'RodolfoPRobinett@jourrapide.com',
			  face: 6
            }
          ]
		
}());


$scope.delete = function(id){

  $scope.contacts.splice(id, 1);

}

$scope.edit = function(id){
  $scope.createOrEdit = false;

  $scope.details = $scope.contacts[id];

}
$scope.editSave = function(id){
   if(angular.isDefined(id)){
	$scope.isNew = false;
	
	for(var i = 0; i < $scope.contacts.length; i++){
           if(id == $scope.contacts[i].id){
               $scope.contacts[i] = $scope.details;
           }          
     }
   }
else{
   $scope.contacts.unshift($scope.details);
   }
   $scope.createOrEdit = true;

}
$scope.createSave = function(){
	$scope.isNew = true;
	$scope.details = {};
     $scope.createOrEdit = false;
	
     


}
$scope.cancel = function(){
    $scope.createOrEdit = true;
}



});