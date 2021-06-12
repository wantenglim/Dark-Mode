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
    rotate: 320
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
    );
    // toggle to switch
    if (!toggle){
        toggle = true;
    }else{
        toggle = false;
    }
});
