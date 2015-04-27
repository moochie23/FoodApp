angular.module('starter.controllers', [])

.service('detailService', function() {
    this.itemName;
    this.itemid;
    this.itemtxt;
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('FruitCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Apple', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Banana', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})

.controller('VegetableCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomato', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carrot', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})

.controller('aaaCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomatoaaa', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carrotaaa', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})

.controller('bbbCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomatobbb', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carrotbbb', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})

.controller('cccCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomatoccc', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carrotccc', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})

.controller('dddCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomatoddd', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carrotddd', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})
.controller('eeeCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomatoeee', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carroteee', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})
.controller('fffCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomatofff', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carrotfff', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})
.controller('gggCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomatoggg', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carrotggg', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})

.controller('hhhCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomatohhh', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carrothhh', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})
.controller('iiiCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomatoiii', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carrotiii', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})
.controller('jjjCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomatojjj', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carrotjjj', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

}).controller('kkkCtrl', function($scope,detailService) {
  $scope.Fruit = [
    { title: 'Tomatokkk', id: 1, fm: "y", txt: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, online services, and personal computers. Its best-known hardware products are the Mac line of computers, the iPod media player, the iPhone smartphone, the iPad tablet computer, and the Apple Watch smartwatch. Its online services include iCloud, the iTunes Store, and the App Store. Apples consumer software includes the OS X and iOS operating systems, the iTunes media browser, the Safari web browser, and the iLife and iWork creativity and productivity suites.'},
    { title: 'Carrotkkk', id: 2, fm: "n", txt: 'A banana is an edible fruit, botanically a berry,[1][2] produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] (In some countries, bananas used for cooking may be called plantains.) The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used.' },
  ];

  $scope.getDetail=function(ObjectData){
	detailService.itemName=ObjectData.title;
	detailService.itemid=ObjectData.id;
	detailService.itemid=ObjectData.txt;
  }

})
.controller('PlaylistCtrl', function($scope,$stateParams,detailService) {
	$scope.detailService=detailService;    	
});