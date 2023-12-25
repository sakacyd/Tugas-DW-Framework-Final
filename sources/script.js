
const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);

  
  setTimeout(() => {
    wrapper.querySelector(".alert").classList.add("fade-out");
  }, 3000);

  
  setTimeout(() => {
    wrapper.remove();
  }, 3500);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert(
      "Mohon Maaf, Sementara Fitur Masih Dalam Tahap Pengembangan !!",
      "danger"
    );
  });
}

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var checkimgs = document.querySelectorAll(".checkimg");
  var slides = document.querySelectorAll(".slidee");

  function setActive(index) {
    slides.forEach(function (slide) {
      slide.classList.remove("active");
    });

    checkimgs.forEach(function (checkimg) {
      checkimg.classList.remove("active");
    });

    document.querySelector(".s" + index).classList.add("active");
    checkimgs[index - 1].classList.add("active");
  }

  checkimgs.forEach(function (checkimg, index) {
    checkimg.addEventListener("click", function () {
      var imageIndex = this.dataset.index;
      setActive(imageIndex);
    });

    checkimg.addEventListener("mouseover", function () {
      if (!checkimg.classList.contains("active")) {
        checkimg.classList.add("hover");
      }
    });

    checkimg.addEventListener("mouseout", function () {
      checkimg.classList.remove("hover");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var warnaText = document.getElementById("warnaText");
  var wbImages = document.querySelectorAll(".wb img");

  wbImages.forEach(function (image) {
    image.addEventListener("click", function () {
      var colorText = this.dataset.warna;
      warnaText.textContent = colorText;

      wbImages.forEach(function (img) {
        img.classList.remove("selected");
      });

      this.classList.add("selected");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var jenisSablon = document.querySelector(".jenis");
  var jenisButtons = document.querySelectorAll(".jb");

  jenisButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var typeText = this.dataset.type;

      jenisButtons.forEach(function (jb) {
        jb.classList.remove("selected");
      });

      this.classList.add("selected");
    });
  });
});
