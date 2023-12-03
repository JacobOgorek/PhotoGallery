document.addEventListener("DOMContentLoaded", function () {
        var backToTopBtn = document.getElementById("back-to-top-btn");

        window.addEventListener("scroll", function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener("click", function () {
            // Scroll to the top smoothly
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    });

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }

