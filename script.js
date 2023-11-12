/*******************
     Navigace
********************/

const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");
const header = document.querySelector("header");

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.remove("fa-bars");
    hamburgerIcon.classList.add("fa-xmark");
    menuList.style.display = "block";
    header.style.height = "150px";
  } else {
    hamburgerIcon.classList.remove("fa-xmark");
    hamburgerIcon.classList.add("fa-bars");
    menuList.style.display = "none";
    header.style.height = "70px";
  }
});

/*******************
 Světný a tmavý mód
********************/

const sectionText = document.querySelector(".container");
const heading = document.querySelector("h1");
const paragraphs = document.querySelectorAll("p");
const darkMode = document.querySelector(".dark");
const lightMode = document.querySelector(".light");

darkMode.addEventListener("click", () => {
  sectionText.style.backgroundColor = "var(--background_brown)";
  heading.style.color = "var(--special_beige)";
  paragraphs.forEach((paragraph) => {
    paragraph.style.color = "var(--special_beige)";
  });
  lightMode.style.display = "block";
  darkMode.style.display = "none";
});

lightMode.addEventListener("click", () => {
  sectionText.style.backgroundColor = "#fff";
  heading.style.color = "var(--special_brown)";
  paragraphs.forEach((paragraph) => {
    paragraph.style.color = "var(--special_brown)";
  });
  lightMode.style.display = "none";
  darkMode.style.display = "block";
});

/*******************
      Obrázky
********************/

const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");

const bigImg = (img) => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.15)";
  });
};

const smallImg = (img) => {
  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
};

bigImg(image1);
smallImg(image1);
bigImg(image2);
smallImg(image2);
bigImg(image3);
smallImg(image3);

/*******************
    Zadání hesla
********************/

const passwordInputs = document.querySelectorAll(".password-input");
const paragraphText = document.querySelector(".result-text");

const getInputContent = (input) => {
  return input.value;
};

const insertContent = (htmlTag, content) => {
  htmlTag.textContent = content;
};

const addClass = (htmltag, className) => {
  htmltag.classList.add(className);
};
const removeClass = (htmltag, className) => {
  htmltag.classList.remove(className);
};

passwordInputs.forEach((oneInput) => {
  oneInput.addEventListener("input", () => {
    const password1Value = getInputContent(passwordInputs[0]);
    const password2Value = getInputContent(passwordInputs[1]);

    if (password1Value === password2Value) {
      insertContent(paragraphText, "Hesla jsou shodná");
      addClass(paragraphText, "valid");
      removeClass(paragraphText, "invalid");
    } else {
      insertContent(paragraphText, "Hesla se neshodují");
      addClass(paragraphText, "invalid");
      removeClass(paragraphText, "valid");
    }

    if (password1Value === "" && password2Value === "") {
      insertContent(paragraphText, "");
    }
  });
});

/*******************
 Návratové tlačítko
********************/

const button = document.getElementById("back-button");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
});
