(function() {
    'use strict';

    const element = document.querySelector("#container");

    // element.addEventListener('wheel', (event) => {
    //     event.preventDefault();

    //     element.scrollBy({
    //         left: event.deltaY < 0 ? -30 : 30,

    //     });
    // });

    alert("Hello!I would like to ask for your suggestions based on the user experiences, the background setting, and the visual compnents. ");

    const container = document.getElementById("mycontainer");

    // function on() {
    //     document.getElementById("overlap").style.display = "block";
    // }

    // function off() {
    //     document.getElementById("overlap").style.display = "none";
    // }

    const img01 = document.getElementById("portrait");
    const windowImg = document.getElementById("img1");
    const contentInfo = document.getElementsByClassName("caption")
        // img01.onclick = function() {
        //     window.style.display = "block";
        //     contentInfo.innerHTML = document.getElementsByClassName(port1);
        // }

    // var span = document.getElementsByClassName("close")[0];

    // span.onclick = function() {
    //     window.style.display = "none";
    // }

    // https://www.w3schools.com/howto/howto_css_modal_images.asp

    const selection = document.querySelectorAll(".open");
    selection.forEach(element => {
        const idName = element.id;
        if (idName == "portrait") {
            element.addEventListener('click', pickSelection);
        } else if (idName == "fall") {
            element.addEventListener('click', pickSelection2);
        } else if (idName == "sunset") {
            element.addEventListener('click', pickSelection3);
        } else if (idName == "portrait2") {
            element.addEventListener('click', pickSelection4);
        } else if (idName == "life") {
            element.addEventListener('click', pickSelection5);
        } else if (idName == "interior") {
            element.addEventListener('click', pickSelection6);
        } else if (idName == "girl") {
            element.addEventListener('click', pickSelection7);
        }
    })

    function pickSelection(event) {
        //getting the event object from the callback, target refers to the current element clicked.
        event.preventDefault();
        document.getElementById('overlap').className = 'showing';
    }

    function pickSelection2(event) {
        //getting the event object from the callback, target refers to the current element clicked.
        event.preventDefault();
        document.getElementById('overlap2').className = 'showing';
    }

    function pickSelection3(event) {
        //getting the event object from the callback, target refers to the current element clicked.
        event.preventDefault();
        document.getElementById('overlap3').className = 'showing';
    }

    function pickSelection4(event) {
        //getting the event object from the callback, target refers to the current element clicked.
        event.preventDefault();
        document.getElementById('overlap4').className = 'showing';
    }

    function pickSelection5(event) {
        //getting the event object from the callback, target refers to the current element clicked.
        event.preventDefault();
        document.getElementById('overlap5').className = 'showing';
    }

    function pickSelection6(event) {
        //getting the event object from the callback, target refers to the current element clicked.
        event.preventDefault();
        document.getElementById('overlap6').className = 'showing';
    }

    function pickSelection7(event) {
        //getting the event object from the callback, target refers to the current element clicked.
        event.preventDefault();
        document.getElementById('overlap7').className = 'showing';
    }

    // document.querySelector('.open').addEventListener('click', function() {
    //     event.preventDefault();
    //     document.getElementById('overlap').className = 'showing';
    // });

    const selection2 = document.querySelectorAll(".close");
    selection2.forEach(element => {
        element.addEventListener('click', closeSelection);
    })

    function closeSelection(event) {
        //getting the event object from the callback, target refers to the current element clicked.
        event.preventDefault();
        const selection3 = document.querySelectorAll("#overlap, #overlap2, #overlap3, #overlap4, #overlap5, #overlap6, #overlap7");
        selection3.forEach(element => {
            element.className = 'hidden';
        })
    }

    // document.querySelector('.close').addEventListener('click', function() {
    //     event.preventDefault();
    //     document.getElementById('overlap').className = 'hidden';
    // });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            document.getElementById('overlap').className = 'hidden';
        }
    })

})();