var app = angular.module ('myApp', []);

app.controller('imageCtrl' ,function($scope){
    $scope.cardType = "";
    $scope.imageSrc = "";

    $scope.updateImage = function(){
        var input = $scope.cardType.toLowercase();
    }
    if(number === 3){
        image.src = "./logo/american express.png"
    }
    else if(number === 4){
        image.src = "./logo/visa.png"
    }
    else if(number === 5){
        image.src = "./logo/mastercard.png"
    }
    else if(number === 6){
        image.src = "./logo/discover.png"
    }
    else{
        $scope.imageSrc = "./verve.png";
    }
}) 

// app.controller('secondControllerScope' , function(scope){
//     $scope.cardName = ""
// })

// if(document.getElementById('number').clicked == true)
// {
//    alert("button was clicked");
// }

// function showimage(){
//     var number = document.getElementById("numberinput").value;
//     var image = document.getElementById(image);
//     if(number === 3){
//         image.src = "icons8american express"
//     }
//     else if(number === 4){
//         image.src = "/logo/visa.png"
//     }
//     else if(number === 5){
//         image.src = "/logo/mastercard.gn"
//     }
//     else if(number === 6){
//         image.src = "/logo/discover"
//     }
//     else if (number ===7){

//    }
// } 