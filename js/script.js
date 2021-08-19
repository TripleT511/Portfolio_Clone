/* Show menu burger */
const menuburger = document.querySelector(".nav__menu-btn");
const overlay = document.querySelector(".overlay");
const menumobile = document.querySelector(".nav__mobile");
menuburger.addEventListener("click", function () {
    menuburger.classList.toggle("open");
    overlay.classList.toggle("show");
    menumobile.classList.toggle("show");
})
overlay.addEventListener("click", function () {
    menuburger.classList.toggle("open");
    overlay.classList.toggle("show");
    menumobile.classList.toggle("show");

})
/* add & remove class active */
const activemenu = document.querySelectorAll(".nav__link");
function linkActive() {
    activemenu.forEach(n => n.classList.remove("active"));
    this.classList.add("active");
    menumobile.classList.remove("show");
    overlay.classList.remove("show");
    menuburger.classList.remove("open");
}
activemenu.forEach(n => n.addEventListener("click", linkActive));
/* show ul__list menu */
const blogshow = document.querySelector(".show-blog");
const pageshow = document.querySelector(".show-pages");
const list_blog = document.querySelector(".list-blogs");
const list_pages = document.querySelector(".list-pages");
const page2show = document.querySelector(".show-pages2");
const list_pages2 = document.querySelector(".list-pages2");
blogshow.addEventListener("click", function () {
    blogshow.classList.toggle("fa-chevron-down");
    blogshow.classList.toggle("fa-chevron-up");

    list_blog.classList.toggle("active");
})

pageshow.addEventListener("click", function () {
    pageshow.classList.toggle("fa-chevron-down");
    pageshow.classList.toggle("fa-chevron-up");
    list_pages.classList.toggle("active");
})
page2show.addEventListener("click", function () {
    page2show.classList.toggle("fa-chevron-down");
    page2show.classList.toggle("fa-chevron-up");
    list_pages2.classList.toggle("active");
})

const blogdk = document.querySelector(".list-dk-blog");
const navitemblog = document.querySelector(".nav__item--blog");
const navitempages = document.querySelector(".nav__item--pages");
const pagesdk = document.querySelector(".list-dk-pages");
navitemblog.addEventListener("mouseover", function () {
    blogdk.style.display = "block";
})
navitemblog.addEventListener("mouseleave", function () {
    setTimeout(() => {
        blogdk.style.display = "none";
    }, 1000);
})
navitempages.addEventListener("mouseover", function () {
    pagesdk.style.display = "block";
})
navitempages.addEventListener("mouseleave", function () {
    setTimeout(() => {
        pagesdk.style.display = "none";
    }, 1000);
})


$(document).ready(function () {
    /* Counter Up */
    $(".fact__number").counterUp({
        delay: 10,
        time: 1000
    });
    /* Scroll Y */
    $(window).scroll(function () {
        if ($("body,html").scrollTop() > 150) {
            $(".nav").addClass("fixed");
        }
        else {
            $(".nav").removeClass("fixed");
        }
        if ($("body,html").scrollTop() > 400) {
            $(".lendautrang").addClass("show");
        }
        else {
            $(".lendautrang").removeClass("show");
        }
    });
    /* back to top */
    $(".lendautrang").on("click", function () {
        $("body,html").scrollTop(0, 400);
    })
})

/* carousel */
$('#slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        768: {
            items: 2,
            nav: false
        }
    }
})
$('#slider2').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        768: {
            items: 3,
            nav: false
        },
        1000: {
            items: 5,
            nav: false
        }
    }
})
/* filer image */
const portfolioList = document.querySelector(".portfolio__list"),
    portfolioItems = document.querySelectorAll(".portfolio__item");

portfolioList.addEventListener("click", function (e) {
    if (e.target.classList.contains("list__filter") &&
        !e.target.classList.contains("active")) {
        portfolioList.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const newtarget = e.target.getAttribute("data-filter");
        portfolioItems.forEach((Item) => {
            if (newtarget === Item.getAttribute("data-category") || newtarget === "All") {
                Item.classList.remove("hide");
                Item.classList.add("show");
            } else {
                Item.classList.remove("show");
                Item.classList.add("hide");
            }
        })
    }
})



