// ======================================
// كلية القضارف للعلوم والتكنولوجيا
// JavaScript Effects
// ======================================


// تشغيل الكود بعد تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {

    // --------------------------------------
    // ظهور العناصر عند التمرير
    // --------------------------------------

    const elements = document.querySelectorAll(
        ".card, .feature, .why-card, .info-box"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elements.forEach(function (element) {

        element.classList.add("hidden");

        observer.observe(element);

    });



    // --------------------------------------
    // تأثير عند تحريك الماوس على البطاقات
    // --------------------------------------

    const cards = document.querySelectorAll(
        ".card, .feature, .why-card"
    );


    cards.forEach(function (card) {

        card.addEventListener("mousemove", function (event) {

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;

            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;

            const centerY = rect.height / 2;

            const rotateX =
                (y - centerY) / 20;

            const rotateY =
                (centerX - x) / 20;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        });


        card.addEventListener("mouseleave", function () {

            card.style.transform =
                "perspective(800px) rotateX(0) rotateY(0)";

        });

    });



    // --------------------------------------
    // زر العودة لأعلى الصفحة
    // --------------------------------------

    const topButton = document.createElement("button");

    topButton.innerHTML = "↑";

    topButton.className = "top-button";

    document.body.appendChild(topButton);


    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {

            topButton.classList.add("active");

        } else {

            topButton.classList.remove("active");

        }

    });


    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });



    // --------------------------------------
    // تأثير على روابط القائمة
    // --------------------------------------

    const navLinks =
        document.querySelectorAll("nav a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {

                item.classList.remove("active-link");

            });


            this.classList.add("active-link");

        });

    });



    // --------------------------------------
    // كتابة متحركة للعنوان
    // --------------------------------------

    const title =
        document.querySelector(".hero h1");


    if (title) {

        const text = title.textContent;

        title.textContent = "";

        let index = 0;


        function typeWriter() {

            if (index < text.length) {

                title.textContent += text.charAt(index);

                index++;

                setTimeout(typeWriter, 60);

            }

        }


        typeWriter();

    }

});