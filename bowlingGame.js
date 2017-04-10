var app = angular.module('app', []);
app.controller('myCtrl', function($scope) {
    $scope.isVisible;
    $scope.whichFrame;
    $scope.strikeScoreForFrameOne;
    $scope.spareScoreForFrameOne;
    $scope.rollScore;
    $scope.frame1Score;
    $scope.oneRollFrame1Score;
    $scope.frame2Score;
    $scope.frame3Score;
    $scope.frame4Score;
    $scope.frame5Score;
    $scope.frame6Score;
    $scope.frame7Score;
    $scope.frame8Score;
    $scope.frame9Score;
    $scope.frame10Score;
    $scope.bowlerTotalFrameScore = 0;
    
    $scope.clickToPlay = function() {
      $scope.isVisible = true;
      $scope.disableFrames();
    };
    $scope.frame1 = function(res) {
        $scope.whichFrame = res;
        if($scope.frame1Score){
            console.log('On Second Roll');
            console.log($scope.frame1Score);
            $scope.oneRollFrame1Score = $scope.frame1Score;
            $scope.calculatingResults();            
        } else{
            $scope.play();
            if($scope.rollScore==10) {
                console.log('Strike!!!');
                $scope.strikeScoreForFrameOne=$scope.rollScore;
                $scope.frame1Score = $scope.rollScore;
                console.log($scope.frame1Score);
                console.log($scope.whichFrame);
                document.getElementById($scope.whichFrame).disabled = true;
                alert('Strike! Move onto the next Frame!');
            } 
            else {
                $scope.frame1Score = $scope.rollScore;
                console.log('Need to Roll for the 2nd Time');
                console.log($scope.frame1Score);
                console.log($scope.rollScore); 
                alert('Roll Again!');                   
            }
        }        
    };
    $scope.play = function() {
        var options = [0,1,2,3,4,5,6,7,8,9,10];
        $scope.rollScore = options[Math.floor(Math.random() * options.length)];
    };
    $scope.calculatingResults = function() {
        if($scope.oneRollFrame1Score==0){
                $scope.play();                
                if($scope.rollScore==10){
                    console.log('On the 2nd ROll, Score is 10');
                    $scope.spareScoreForFrameOne==10;
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Strike on the Second Roll!')
                    alert('Procced to the Next Frame of Game!');
                } else {
                    console.log('Here 0 !!!!!');
                    console.log('2nd New rollScore ' + $scope.rollScore); 
                    $scope.frame1Score += $scope.rollScore;
                    console.log('New frame1Score ' + $scope.frame1Score);
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Procced to the Next Frame of Game!');
                }            
            }
            else if($scope.oneRollFrame1Score==1){
                console.log('On the 2nd ROll, Score is 1');
                var options = [0,1,2,3,4,5,6,7,8,9];
                $scope.rollScore = options[Math.floor(Math.random() * options.length)];
               if($scope.rollScore==9){
                    $scope.spareScoreForFrameOne==10;
                    console.log('On the 2nd ROll, Score is 9');
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Strike on the Second Roll!')
                    alert('Procced to the Next Frame of Game!');
                } else {
                    console.log('Here 1 !!!!!');
                    console.log('New rollScore ' + $scope.rollScore); 
                    $scope.frame1Score += $scope.rollScore;
                    console.log('New frame1Score ' + $scope.frame1Score);
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Procced to the Next Frame of Game!');
                }    
            }
            else if($scope.oneRollFrame1Score==2){
                var options = [0,1,2,3,4,5,6,7,8];
                $scope.rollScore = options[Math.floor(Math.random() * options.length)];
               if($scope.rollScore==8){
                    $scope.spareScoreForFrameOne==10;
                    console.log('On the 2nd ROll, Score is 8');
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Strike on the Second Roll!')
                    alert('Procced to the Next Frame of Game!');
                } else {
                    console.log('Here 2 !!!!!');
                    console.log('New rollScore ' + $scope.rollScore); 
                    $scope.frame1Score += $scope.rollScore;
                    console.log('New frame1Score ' + $scope.frame1Score);
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Procced to the Next Frame of Game!');
                }   
            }
            else if($scope.oneRollFrame1Score==3){
                var options = [0,1,2,3,4,5,6,7];
                $scope.rollScore = options[Math.floor(Math.random() * options.length)];
               if($scope.rollScore==7){
                    $scope.spareScoreForFrameOne==10;
                    console.log('On the 2nd ROll, Score is 7');
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Strike on the Second Roll!')
                    alert('Procced to the Next Frame of Game!');
                } else {
                    console.log('Here 3 !!!!!');
                    console.log('New rollScore ' + $scope.rollScore); 
                    $scope.frame1Score += $scope.rollScore;
                    console.log('New frame1Score ' + $scope.frame1Score);
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Procced to the Next Frame of Game!');
                }   
            }
            else if($scope.oneRollFrame1Score==4){
                var options = [0,1,2,3,4,5,6];
                $scope.rollScore = options[Math.floor(Math.random() * options.length)];
               if($scope.rollScore==6){
                    $scope.spareScoreForFrameOne==10;
                    console.log('On the 2nd ROll, Score is 6');
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Strike on the Second Roll!')
                    alert('Procced to the Next Frame of Game!');
                } else {
                    console.log('Here 4 !!!!!');
                    console.log('New rollScore ' + $scope.rollScore); 
                    $scope.frame1Score += $scope.rollScore;
                    console.log('New frame1Score ' + $scope.frame1Score);
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Procced to the Next Frame of Game!');
                }   
            }
            else if($scope.oneRollFrame1Score==5){
            var options = [0,1,2,3,4,5];
                $scope.rollScore = options[Math.floor(Math.random() * options.length)];
               if($scope.rollScore==5){
                    $scope.spareScoreForFrameOne==10;
                    console.log('On the 2nd ROll, Score is 5');
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Strike on the Second Roll!')
                    alert('Procced to the Next Frame of Game!');
                } else {
                    console.log('Here 5 !!!!!');
                    console.log('New rollScore ' + $scope.rollScore); 
                    $scope.frame1Score += $scope.rollScore;
                    console.log('New frame1Score ' + $scope.frame1Score);
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Procced to the Next Frame of Game!');
                }   
            }
            else if($scope.oneRollFrame1Score==6){
            var options = [0,1,2,3,4];
                $scope.rollScore = options[Math.floor(Math.random() * options.length)];
               if($scope.rollScore==4){
                    $scope.spareScoreForFrameOne==10;
                    console.log('On the 2nd ROll, Score is 4');
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Strike on the Second Roll!')
                    alert('Procced to the Next Frame of Game!');
                } else {
                    console.log('Here 6 !!!!!');
                    console.log('New rollScore ' + $scope.rollScore); 
                    $scope.frame1Score += $scope.rollScore;
                    console.log('New frame1Score ' + $scope.frame1Score);
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Procced to the Next Frame of Game!');
                }   
            }
            else if($scope.oneRollFrame1Score==7){
            var options = [0,1,2,3];
                $scope.rollScore = options[Math.floor(Math.random() * options.length)];
               if($scope.rollScore==3){
                    $scope.spareScoreForFrameOne==10;
                    console.log('On the 2nd ROll, Score is 3');
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Strike on the Second Roll!')
                    alert('Procced to the Next Frame of Game!');
                } else {
                    console.log('Here 7 !!!!!');
                    console.log('New rollScore ' + $scope.rollScore); 
                    $scope.frame1Score += $scope.rollScore;
                    console.log('New frame1Score ' + $scope.frame1Score);
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Procced to the Next Frame of Game!');
                }   
            }
            else if($scope.oneRollFrame1Score==8){
            var options = [0,1,2];
                $scope.rollScore = options[Math.floor(Math.random() * options.length)];
               if($scope.rollScore==2){
                    $scope.spareScoreForFrameOne==10;
                    console.log('On the 2nd ROll, Score is 2');
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Strike on the Second Roll!')
                    alert('Procced to the Next Frame of Game!');
                } else {
                    console.log('Here 8 !!!!!');
                    console.log('New rollScore ' + $scope.rollScore); 
                    $scope.frame1Score += $scope.rollScore;
                    console.log('New frame1Score ' + $scope.frame1Score);
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Procced to the Next Frame of Game!');
                }   
            }
            else {
            var options = [0,1];
                $scope.rollScore = options[Math.floor(Math.random() * options.length)];
               if($scope.rollScore==1){
                    $scope.spareScoreForFrameOne==10;
                    console.log('On the 2nd ROll, Score is 1');
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Strike on the Second Roll!')
                    alert('Procced to the Next Frame of Game!');
                } else {
                    console.log('Here 9 !!!!!');
                    console.log('New rollScore ' + $scope.rollScore); 
                    $scope.frame1Score += $scope.rollScore;
                    console.log('New frame1Score ' + $scope.frame1Score);
                    document.getElementById($scope.whichFrame).disabled = true;
                    alert('Procced to the Next Frame of Game!');
                }   
            }
    };
    $scope.restartGame = function(){
        $scope.disableFrames();
    };
    $scope.quitGame = function() {
        $scope.isVisible = false;
        $scope.disableFrames();
    };
    $scope.disableFrames = function() {
        $scope.rollScore = 0;
        $scope.frame1Score = 0;
        $scope.oneRollFrame1Score = 0;
        $scope.frame2Score = 0;
        $scope.frame3Score = 0;
        $scope.frame4Score = 0;
        $scope.frame5Score = 0;
        $scope.frame6Score = 0;
        $scope.frame7Score = 0;
        $scope.frame8Score = 0;
        $scope.frame9Score = 0;
        $scope.frame10Score = 0;
        $scope.bowlerTotalFrameScore = 0;
        document.getElementById('frame1').disabled = false;
        document.getElementById('frame2').disabled = false;
        document.getElementById('frame3').disabled = false;
        document.getElementById('frame4').disabled = false;
        document.getElementById('frame5').disabled = false;
        document.getElementById('frame6').disabled = false;
        document.getElementById('frame7').disabled = false;
        document.getElementById('frame8').disabled = false;
        document.getElementById('frame9').disabled = false;
        document.getElementById('frame10').disabled = false;
    };
});