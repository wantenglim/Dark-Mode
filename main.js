const moonPath = "M21.5 25C21.5 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 21.5 11.1929 21.5 25Z";

const sunPath = "M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25Z";

const darkMode = document.querySelector("#darkMode");

let toggle = false;
// click on the sun
darkMode.addEventListener('click',() => {
    // use anime.js
    // set timeline
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });
    // add different animations on the timeline
    timeline.add({
        targets: ".sun",
        d: [
            {value: toggle? sunPath : moonPath}
        ]
    })
    .add({
        targets: "#darkMode",
        rotate: toggle ? 0 : 320
    },
    "-=350"
    )
    .add({
        targets: "body",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    },
    "-=700"
    )
    .add({
        targets: ".navbar",
        backgroundColor: toggle ? "rgb(255, 251, 250)" : "rgb(30,30,30)",
    },
    "-=700"
    )
    .add({
        targets: ".nav-link",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    },
    "-=700"
    )
    .add({
        targets: "footer",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    },
    "-=700"
    )
    .add({
        targets: ".fa-bars",
        color: toggle ? "rgb(0,0,0)" : "rgb(255,255,255)"
    },
    "-=700"
    )
    .add({
        targets: ".fa-apple",
        color: toggle ? "rgb(0,0,0)" : "rgb(255,255,255)"
    },
    "-=700"
    )
    .add({
        targets: ".box",
        boxShadow: toggle ? "0 4px 8px 0 rgba(0,0,0,0.2)" : "0 1px 4px 0 rgba(255,255,255,0.2)"
    },
    "-=700"
    )
    .add({
        targets: ".card-body",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(30,30,30)",
    },
    "-=700"
    );
    // toggle to switch
    if (!toggle){
        toggle = true;
    }else{
        toggle = false;
    }
});

// active nav bar tab
 var items = document.getElementsByClassName("borderb")

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active")
    
    // If there's no active class
    if (current.length > 0){
        current[0].className = current[0].className.replace(" active", "")
    }
    // Add the active class to the current/clicked button
    this.className += " active"
    })
}