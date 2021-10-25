(function(){
    'use strict';
    console.log ('reading js');

      var timer;
      var sex ;
      var color ;
      var ness ;
      var cat ;
      var cookie;
      var sat;
      var woman ;
      var neglect ;
      var gorgeous ;
      var discontent;


         function show(){
             console.log(1);


             clearInterval(timer);
             var img = document.getElementById("img")
            sex = document.getElementById("sex").value;
            color = document.getElementById("color").value;
            ness = document.getElementById("ness").value;
            cat = document.getElementById("cat").value;
            cookie = document.getElementById("snack").value;
            sat = document.getElementById("happy").value;

             timer = setInterval(function (){
                img.style.display = "block";
             },10);

             
             window.setTimeout(function (){
                 window.clearTimeout(timer,100)
                 img.style.display='none';
                 document.getElementById("sad").style.display = 'grid'
                 document.getElementById("happy").style.display = 'none'
             },100);
  }

  function sub() {
      show();
      //sleep(2000);

      window.setTimeout(function () {
           var photo = document.getElementById("photo")
             photo.style.display = 'none';
             var ca = document.getElementById('ca')
             ca.style.display = 'none';


             woman = document.getElementById("man").value;
             neglect = document.getElementById("person").value;
             gorgeous = document.getElementById("cloth").value;
             discontent = document.getElementById('un').value;


             var data = `The Wind Witness
A gust of wind slowly wanders,
Gently comes on top of a little `+ sex+`,
She has watery `+ color+` eyes,
Fills with kindness and`+ ness+` .\n
She crouches down beside a frail `+ cat+`,
Softly and lightly pets the cat.
She feeds the cat with a piece of `+ cookie+`
From her warm, little hands.\n
The cat is very `+ sat+`,
A smile appears on the girl’s innocent face.
Wind is delighted,
Wind floats away with joy and cheer.\n
Later, the wind comes to a `+ woman+`,
Who wears `+ gorgeous+` and fancy cloth.
The two old-aged women behind her,
Who are carrying the heavy luggage.\n
On noble woman’s face,
there is only `+ neglect+` and scorn.
She can’t see the weariness from women’s faces.
Wind floats away only with `+ discontent+` and disappointment.`


      var txt = document.getElementById("txt");
      txt.innerText = data;


      txt.style.display = 'block';
      txt.style.margin = '-270px 500px';


      },1000);

  }

  function sleep(numberMillis){
        var now = new Date();
        var exitTime = now.getTime() + numberMillis;
        while (true) {
            now = new Date();
            if (now.getTime() > exitTime)
            return;
        }
    }

}());