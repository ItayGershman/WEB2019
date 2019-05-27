var arrOfObj =[];
var flag = 0;
var counter = 0;


function addImage(){
    console.log("addImage");
    var img = document.createElement("img");
    img.setAttribute("src","images/tahini.png");
    var x = getElementById("starters");
    x.appendChild(img);
}

(function() {//onload

    var foodImg = '';
    // var counter =0;
    var count=0;
    var action = '';
    //Load Starters
    

    var startersPic = [
        {"pic" : "images/artichoke.png", "description" : "Artishock with labane"},
        {"pic" : "images/tomato.png", "description" : "Spicy tomato salad"},
        {"pic" : "images/carpaccio.png", "description" : "Beef carapccio"},
        {"pic" : "images/coloraby.png", "description" : "Baked coloraby"},
        {"pic" : "images/grape.png", "description" : "Grape salad"},
        {"pic" : "images/tahini.png", "description" : "Cauliflower in Tahini  "}

    ];

    
    $.each(startersPic, function(key, val) { 

        var div = document.createElement("div");
        div.className = "box1";
        var img = document.createElement("img");
        var p = document.createElement("p");
        p.innerHTML = val.description;

        img.className = "img-thumbnail thumb m-r";
        img.width = "250" + 'px';
        img.setAttribute("src",val.pic);
        img.setAttribute("width" , "250");
        img.setAttribute("height" , "150");
        img.id = "img_" + count;
        count++;

        div.appendChild(img);
        div.appendChild(p);
        div.addEventListener("click",showOptions);
        var addImages = document.getElementById("starters");
        console.log(addImages);
        addImages.append(div);
    })


    function showOptions(){
        flag++;
        if(flag == 0){
            return;
        }
        flag = 1;
        console.log("show");
        var div = document.createElement("div");
        var ul = document.createElement("ul");
        var li = document.createElement("li");
        var li2 = document.createElement("li");
        var a = document.createElement("a");
        var a1 = document.createElement("a");

        var div2 = document.createElement("div"); //Title:options
        div2.style.height = "20px";
        div2.style.width = "165px";
        div2.innerText = "OPTIONS";
        div2.style.backgroundColor = "gray";
        div2.style.textAlign = "center";
        div2.style.color = "white";
        div2.style.marginBottom = "10px";

        var span = document.createElement("span");
        span.className = "close";
        span.innerText = "x";
        span.addEventListener("click",closeDiv);
        


        div.style.backgroundColor = "white";
        div.style.marginTop = "-130px";
        div.style.marginLeft = "65px";
        div.style.height = "100px";
        div.style.width = "165px";
        div.style.border = "0.1px solid" ;
        div.id = "div_" + counter;
        div.appendChild(span);
        // div.style.display = "block";

        var img1 = document.createElement("img");
        img1.setAttribute("src", "images/edit.png");
        img1.style.marginLeft = "10px";
        var img2 = document.createElement("img");
        img2.style.marginLeft = "10px";
        img2.setAttribute("src", "images/delete.png");

        li.appendChild(img1);
        li2.appendChild(img2);

        a.setAttribute("href","edit_product.html");
        a.innerText = " Edit";
        a.style.marginLeft = "5px";
        a1.setAttribute("href","#");
        a1.style.marginLeft = "5px";
        a1.innerText = " Delete";

        li.style.listStyleType = 'none';
        li.style.marginBottom = "10px";
        li2.style.listStyleType = 'none';
        li.append(a);
        li2.append(a1);
        div.appendChild(div2);
        ul.appendChild(li);
        ul.appendChild(li2);
        div.appendChild(ul);
        div.style.position = "absolute";
        this.appendChild(div);
        // var divTitle

        
    }

    function closeDiv(){
        var x = document.getElementById("div_" + counter);
        x.remove();
        flag=-1;
    }

    var maindishesPic = [
        {"pic" : "images/meatballs.png", "description" : "Buri Meatballs"},
        {"pic" : "images/tilapia.png", "description" : "Fried Tilapia"},
        {"pic" : "images/lamb.png", "description" : "Lamb Chops"},
        {"pic" : "images/burger.png", "description" : "Insane Burger"},
        {"pic" : "images/chicken.png", "description" : "Grilled chicken breast"},
        {"pic" : "images/shawarma.png", "description" : "Shawarma"}
    ];


    $.each(maindishesPic, function(key, val) { 
        var div = document.createElement("div");
        div.className = "box1";
        var img = document.createElement("img");
        var p = document.createElement("p");
        p.innerHTML = val.description;

        img.className = "img-thumbnail thumb m-r";
        img.width = "250" + 'px';
        img.setAttribute("src",val.pic);
        img.setAttribute("width" , "250");
        img.setAttribute("height" , "150");
        img.id = "img_" + count;
        count++;

        div.appendChild(img);
        div.appendChild(p);
        div.addEventListener("click",showOptions);
        var addImages = document.getElementById("dishes");
        console.log(addImages);
        addImages.append(div);
    })


    //Load Desserts

    var dessertsPic = [
        {"pic" : "images/muhallebi.png", "description" : " Muhallebi  "},
        {"pic" : "images/tart.png", "description" : "Lime Tart"},
        {"pic" : "images/cheesecake.png", "description" : "Cheesecake"}
    ];


    $.each(dessertsPic, function(key, val) { 
        var div = document.createElement("div");
        div.className = "box1";
        var img = document.createElement("img");
        var p = document.createElement("p");
        p.innerHTML = val.description;

        img.className = "img-thumbnail thumb m-r";
        img.width = "250" + 'px';
        img.setAttribute("src",val.pic);
        img.setAttribute("width" , "250");
        img.setAttribute("height" , "150");
        img.id = "img_" + count;
        count++;

        div.appendChild(img);
        div.appendChild(p);
        div.addEventListener("click",showOptions);
        var addImages = document.getElementById("desserts");
        console.log(addImages);
        addImages.append(div);
    })

    
    
 })();

 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";

  }

  function addImage(){ 
  startersPic.push({"pic" : "images/tahini.png", "description" : "Tahini"});
  }