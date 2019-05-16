

var bigger = 80;
var arrOfBoxes = []; // My boxes
var letters = ['I','T','A','Y'];
var globalCount = 0;
var clicksArr = [];//letters that i clicked on
var clickedBoxes = [];//clicked boxes
var letterCount = 0;

(function() {
    var box;
    var timer; 
    /*
    
        #blackSquare3{
            position: absolute;
            background: linear-gradient(0deg, #000000, #000000), #000000; 
            right: 24px;
            top: 21px;
            height:80px;
            width:80px;
        }
    */
   var clickBox = document.createElement("div");
   clickBox.id = "blackSquare3"
   clickBox.style.position = "absolute";
   clickBox.style.backgroundColor = "#000000";
   clickBox.style.right = "24" + 'px';
   clickBox.style.top = "21" + 'px';
   clickBox.style.height = "80" + 'px';
   clickBox.style.width = "80" + 'px';
    
   
   document.body.appendChild(clickBox);
   clickBox.addEventListener('click',setBoxes);

    function setBoxes(){
        const main = document.getElementsByTagName("main")[0];
            
        for(var i=0;i<3;++i){
            box = document.createElement("div");

            box.id = 'littleBlackSquare_' + globalCount++;
            box.className = 'littleBlackSquare';//check his attributes
            box.style.width = bigger + 'px';
            box.style.height = bigger + 'px';
            box.style.backgroundColor = "black";

            var randLetter = Math.floor(Math.random()*letters.length);

            var para = document.createElement('p');
            para.style.textAlign = 'center';
            para.style.marginTop = bigger*0.25 + 'px';
            para.style.fontSize = bigger*0.25 + 'px';
            para.innerHTML = letters[randLetter];
            
            box.appendChild(para);
            main.appendChild(box);
            arrOfBoxes.push(box);
            box.addEventListener('click', clicks);
            bigger +=20;
        }
    }

    var clicks = function(){//here i get different boxes
       clickedBoxes.push(this.id);//array of boxes.id
       this.style.color = "#F8F8FF";
       clicksArr.push(this.firstChild.innerHTML);//pushes 2 letters insize this array
       if(clicksArr.length == 2){
        compareLetters();
       }
    }


    function compareLetters(){
        console.log("compare");
        var deli = clickedBoxes[0].indexOf('_');
        var y = clickedBoxes[0].substring(deli+1,clickedBoxes[0].length);
        deli = clickedBoxes[0].indexOf('_');
        var z = clickedBoxes[1].substring(deli+1,clickedBoxes[1].length);
        if(clickedBoxes[0] != clickedBoxes[1]){//confirm that it's not the same box
            console.log("Different box"); 
            if(arrOfBoxes[y].style.backgroundColor == arrOfBoxes[z].style.backgroundColor){//confirm that it's diifferent box colors
            console.log("same box color")
                if(clicksArr[0] == clicksArr[1]){//confirms the same letter
                    letterMatch();
                    return;
                }
            }
        }
        else    console.log("Unmatched");
                timer = setInterval(hideLetter,500);
                return;
    }


    function letterMatch(){
        console.log("letterMatch");
        for(i=0;i<2;++i){
            var deli = clickedBoxes[i].indexOf('_');
            x = clickedBoxes[i].substring(deli+1,clickedBoxes[i].length);            
            arrOfBoxes[x].style.backgroundColor = "#FFD700";
        }
        len = clickedBoxes.length;
        for(i=0; i < len;++i){
            clickedBoxes.pop();
            clicksArr.pop();
        }
        letterCount = 0;
    }
    

    function hideLetter(){
        console.log("hideLetter");
        for(i=0;i<2;++i){
            var deli = clickedBoxes[i].indexOf('_');
            x = clickedBoxes[i].substring(deli+1,clickedBoxes[i].length);
            console.log(arrOfBoxes[x].style.backgroundColor);
            console.log(x);
            if(arrOfBoxes[x].style.backgroundColor != "rgb(255, 215, 0)"){
                arrOfBoxes[x].style.color = "black";
            }            
        }
        len = clickedBoxes.length;
        for(i=0; i < len;++i){
            clickedBoxes.pop();
            clicksArr.pop();
        }
        letterCount = 0;
        clearInterval(timer);
    }

})();


