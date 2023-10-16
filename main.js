
div1.onclick = function () {
    this.style.backgroundColor = "white"
    div2.style.backgroundColor = "transparent"
    div3.style.backgroundColor = "transparent"
    climove.style.transform = "translate(0%)"
}

div2.onclick = function () {
    this.style.backgroundColor = "white"
    div1.style.backgroundColor = "transparent"
    div3.style.backgroundColor = "transparent"
    climove.style.transform = "translate(-25%)"
}

div3.onclick = function () {
    this.style.backgroundColor = "white"
    div2.style.backgroundColor = "transparent"
    div1.style.backgroundColor = "transparent"
    climove.style.transform = "translate(-50%)"
}

// Add event listener for window resize
window.addEventListener('resize', function () {
    if (window.innerWidth < 1280) {
        // Apply mobile styles
        div1.style.backgroundColor = "white";
        div2.style.backgroundColor = "transparent";
        div3.style.backgroundColor = "transparent";
        div1.onclick = function () {
            this.style.backgroundColor = "white"
            div3.style.backgroundColor = "transparent"
            div2.style.backgroundColor = "transparent"
            climove.style.transform = "translate(0%)"
        }
        div2.onclick = function () {
            this.style.backgroundColor = "white"
            div3.style.backgroundColor = "transparent"
            div1.style.backgroundColor = "transparent"
            climove.style.transform = "translate(-11%)"
        }
        div3.onclick = function () {
            this.style.backgroundColor = "white"
            div2.style.backgroundColor = "transparent"
            div1.style.backgroundColor = "transparent"
            climove.style.transform = "translate(-22%)"
        }
    } else {
        // Apply desktop styles
        div1.style.backgroundColor = "transparent";
        div2.style.backgroundColor = "transparent";
        div3.style.backgroundColor = "transparent";
        climove.style.transform = "translateX(0%)"
    }
});

// Call the function on page load and whenever the window is resized
window.addEventListener("load", setResponsiveStyles);
window.addEventListener("resize", setResponsiveStyles);

var m = 0

menuclick.onclick = function () {
    if (m == 0) {
        megamenu.style.display = "block"
        m = 1
    } else {
        megamenu.style.display = "none"
        m = 0
    }
}

const pageheight = window.innerHeight;
var height = skills

const element = document.getElementById('skills');


window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 3590) {
        prog1.style.width = "85%"
        prog2.style.width = "75%"
        prog3.style.width = "60%"
        p1.innerHTML = "85%"
        p2.innerHTML = "75%"
        p3.innerHTML = "60%"

    } else {
        prog1.style.width = "0%"
        prog2.style.width = "0%"
        prog3.style.width = "0%"
        p1.innerHTML = "0%"
        p2.innerHTML = "0%"
        p3.innerHTML = "0%"

    }
});

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        nav.style.backgroundColor = "black"
    } else {
        nav.style.backgroundColor = "#1f2122"
    }
});


function setResponsiveStyles() {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition)
        if (window.innerWidth < 800) {
            if (scrollPosition > 4080) {
                prog1.style.width = "85%"
                prog2.style.width = "75%"
                prog3.style.width = "60%"
                p1.innerHTML = "85%"
                p2.innerHTML = "75%"
                p3.innerHTML = "60%"
            } else {
                prog1.style.width = "0%"
                prog2.style.width = "0%"
                prog3.style.width = "0%"
                p1.innerHTML = "0%"
                p2.innerHTML = "0%"
                p3.innerHTML = "0%"
            }
        }

    });

}
function setResponsiveStyles() {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition)
        if (window.innerWidth < 620) {
            if (scrollPosition > 5800) {
                prog1.style.width = "85%"
                prog2.style.width = "75%"
                prog3.style.width = "60%"
                p1.innerHTML = "85%"
                p2.innerHTML = "75%"
                p3.innerHTML = "60%"
            } else {
                prog1.style.width = "0%"
                prog2.style.width = "0%"
                prog3.style.width = "0%"
                p1.innerHTML = "0%"
                p2.innerHTML = "0%"
                p3.innerHTML = "0%"
            }
        }

    });

}
function setResponsiveStyles() {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition)
        if (window.innerWidth < 620) {
            if (scrollPosition > 5800) {
                prog1.style.width = "85%"
                prog2.style.width = "75%"
                prog3.style.width = "60%"
                p1.innerHTML = "85%"
                p2.innerHTML = "75%"
                p3.innerHTML = "60%"
            } else {
                prog1.style.width = "0%"
                prog2.style.width = "0%"
                prog3.style.width = "0%"
                p1.innerHTML = "0%"
                p2.innerHTML = "0%"
                p3.innerHTML = "0%"
            }
        }

    });

}