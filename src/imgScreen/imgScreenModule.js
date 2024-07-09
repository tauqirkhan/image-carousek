import img1 from "../asset/1.jpg";
import img2 from "../asset/2.jpg";
import img3 from "../asset/3.jpg";
import img4 from "../asset/4.jpg";
import img5 from "../asset/5.jpg";
import img6 from "../asset/6.jpg";
import img7 from "../asset/7.jpg";
import img8 from "../asset/8.jpg";
import img9 from "../asset/9.jpg";
import img10 from "../asset/10.jpg";

function image() {
  const imageArr = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
  ];
  const imgDiv = document.querySelector(".imageDiv");
  const rightArrow = document.querySelector(".rightArrow");
  const leftArrow = document.querySelector(".leftArrow");
  const footerDiv = document.querySelector(".footer");
  const FIVE_SECONDS = 5 * 1000;
  let currentImgIndex = 0;

  rightArrow.addEventListener("click", showNextImage);
  leftArrow.addEventListener("click", showPreviousImage);
  //   footerDiv.addEventListener("click", changeImageUsingFooterChild);
  setInterval(showNextImage, FIVE_SECONDS);

  const image = new Image(1000, 500);
  image.src = imageArr[currentImgIndex];
  imgDiv.appendChild(image);

  renderFooterChild();

  function renderFooterChild() {
    imageArr.forEach((img, index) => {
      const div = document.createElement("div");
      div.classList.add("footerChild");
      div.textContent = index;
      footerDiv.appendChild(div);

      div.addEventListener("click", () => changeImageUsingFooterChild(index));
    });
  }

  function changeImageUsingFooterChild(index) {
    currentImgIndex = index;
    changeImage(index);
  }

  function showNextImage() {
    currentImgIndex >= imageArr.length - 1
      ? (currentImgIndex = 0)
      : currentImgIndex++;
    changeImage(currentImgIndex);
  }
  function showPreviousImage() {
    currentImgIndex <= 0 ? (currentImgIndex = 9) : currentImgIndex--;
    changeImage(currentImgIndex);
  }

  function changeImage(index) {
    image.src = imageArr[index];
  }
}

export { image };
