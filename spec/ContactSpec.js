describe('Contact Manager', function() {
    var $scope = {};
    var controller;
	beforeEach(module("ContactApp"));
	beforeEach(inject(function($controller, $rootScope){
		$scope = $rootScope.$new();
		controller = $controller("ContactController", {$scope: $scope});
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
          ]; 
		  $scope.createOrEdit = true;	
  }));
 
  it("should delete contact from the list", function(){
	
	
	$scope.delete(1); //delete with index 1 will yield following result
	  
	expect($scope.contacts).toEqual(
	 [
            {
              id: 1,
              name : 'Terrence S. Hatfield',
              tel: '651-603-1723',
              email: 'TerrenceSHatfield@rhyta.com',
			  face: 11
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
		 
	 );
	  
  });
  it("should assign value to details for editing contact", function(){
	  $scope.edit(0);
	  expect($scope.createOrEdit).toBeFalsy();
	  expect($scope.details).toEqual({
              id: 1,
              name : 'Terrence S. Hatfield',
              tel: '651-603-1723',
              email: 'TerrenceSHatfield@rhyta.com',
			  face: 11
            });
	  
  });
  
  it("should create new contact when editSave was called with zero arguments", function(){
	  $scope.details = { //When details field populated with this value
		  id: 7,
		  name : 'Jagjyot',
		  tel: '+91-9916932221',
		  email: 'jagjyot_rishi@yahoo.com',
		  face: 15
	   };
	   $scope.editSave();// called with zero arguments 
	   
	   expect($scope.contacts).toEqual(
	   
	   [
            {
				id: 7,
				name : 'Jagjyot',
				tel: '+91-9916932221',
				email: 'jagjyot_rishi@yahoo.com',
				face: 15
			},
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
	   );
	  
    });
	it("should edit contact when editSave was called with id argument", function(){
	  $scope.details = {
              id: 1,
              name : 'Terrence S.',
              tel: '651-603-1724',
              email: 'TerrenceS@rhyta.com',
			  face: 11
            };
	   $scope.editSave(1);// called with index 1 
	   expect($scope.isNew).toBeFalsy();
	   expect($scope.contacts).toEqual(
	   
	   [
            {
              id: 1,
              name : 'Terrence S.',
              tel: '651-603-1724',
              email: 'TerrenceS@rhyta.com',
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
	   );
	  
  });
 
  
	
});