(function() {
    'use strict';
    console.log('reading js');
    let timer;
    let sex;
    let color;
    let ness;
    let cat;
    let cookie;
    let sat;
    let woman;
    let neglect;
    let gorgeous;
    let discontent;

    document.getElementById('next').addEventListener('click', function() {
        console.log(1);


        clearInterval(timer);
        var img = document.getElementById("img")
        sex = document.getElementById("sex").value;
        color = document.getElementById("color").value;
        ness = document.getElementById("ness").value;
        cat = document.getElementById("cat").value;
        cookie = document.getElementById("snack").value;
        sat = document.getElementById("happy").value;

        timer = setInterval(function() {
            img.style.display = "block";
        }, 10);

        window.setTimeout(function() {
            window.clearTimeout(timer, 100)
            img.style.display = 'none';
            document.getElementById("sad").style.display = 'grid'
            document.getElementById("happy").style.display = 'none'
        }, 100)

    })

    document.getElementById('sad').addEventListener('submit', function(event) {
        event.preventDefault();

        //sleep(2000);

        window.setTimeout(function() {
            var photo = document.getElementById("photo")
            photo.style.display = 'none';
            var ca = document.getElementById('ca')
            ca.style.display = 'none';


            woman = document.getElementById("man").value;
            neglect = document.getElementById("person").value;
            gorgeous = document.getElementById("cloth").value;
            discontent = document.getElementById('un').value;


            let data = `The Wind Witness \n
            <br>
            <br>
            A gust of wind slowly wanders,
            <br>
            Gently comes on top of a little ` + sex + `
            <br>
            She has watery ` + color + ` eyes,
            <br>
            Fills with kindness and ` + ness + `.\n
            <br>
            <br>
            She crouches down beside a frail ` + cat + `,
            <br>
            Softly and lightly pets the cat.
            <br>
            She feeds the cat with a piece of ` + cookie + `
            <br>
            From her warm, little hands.\n
            <br>
            <br>
            The cat is very ` + sat + `,
            <br>
            A smile appears on the girl’s innocent face.
            <br>
            Wind is delighted,
            <br>
            Wind floats away with joy and cheer.\n
            <br>
            <br>
            Later, the wind comes to a ` + woman + `,
            <br>
            Who wears ` + gorgeous + ` and fancy cloth.
            <br>
            The two old-aged women behind her,
            <br>
            Who are carrying the heavy luggage.\n
            <br>
            <br>
            On noble woman’s face,
            <br>
            there is only ` + neglect + ` and scorn.
            <br>
            She can’t see the weariness from women’s faces.
            <br>
            Wind floats away only with ` + discontent + ` and 
            disappointment.\n`

            let txt = document.getElementById("txt");
            document.getElementById("txt").style.fontStyle = "italic";
            txt.innerHTML = data;

            txt.style.display = 'block';
            txt.style.margin = '-100px 500px';
            txt.style.paddingTop = '50px';

        }, 1000)
    })

    function sleep(numberMillis) {
        var now = new Date();
        var exitTime = now.getTime() + numberMillis;
        while (true) {
            now = new Date();
            if (now.getTime() > exitTime)
                return;
        }
    }

}());