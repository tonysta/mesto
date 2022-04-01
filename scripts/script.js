const profileEditBtn = document.querySelector(".profile__edit-btn");
const popupProfile = document.querySelector(".popup_section_profile");
const popupCard = document.querySelector(".popup_section_card");
const viewer = document.querySelector(".viewer");
const popupCloseBtn = document.querySelector(".popup__close-btn");
const popupCloseBtnCard = popupCard.querySelector(".popup__close-btn");
const profileForm = document.querySelector(".popup__form_type_profile");
const cardForm = document.querySelector(".popup__form_type_card");
const popupName = document.querySelector(".popup__input_type_name");
const popupProfession = document.querySelector(".popup__input_type_profession");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const cardContainer = document.querySelector(".cards-container");
const addCardBtn = document.querySelector(".profile__add-btn");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function renderCard(element) {
  const card = document
    .querySelector(".card__template")
    .content.firstElementChild.cloneNode(true);

  card.querySelector(".card__title").textContent = element.name;
  card.querySelector(".card__img").src = element.link;

  card
    .querySelector(".card__like-btn")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("card__like-btn_active");
    });

  card.querySelector(".card__img").addEventListener("click", openViewer);

  card.querySelector(".card__trash-btn").addEventListener("click", removeCard);

  cardContainer.prepend(card);
}

function openViewer(event) {
  const viewerImg = event.target.src;
  const viewerTitle =
    event.target.nextElementSibling.firstElementChild.textContent;

  viewer.querySelector(".viewer__img").src = viewerImg;
  viewer.querySelector(".viewer__title").textContent = viewerTitle;

  popupOpen(viewer);
}

function addCard(event) {
  event.preventDefault();
  const cardName = popupCard.querySelector(".popup__input_type_name").value;
  const cardLink = popupCard.querySelector(".popup__input_type_link").value;
  renderCard({ name: cardName, link: cardLink });
  popupClose(event);
}

function removeCard(event) {
  const cardItem = event.target.closest(".card");
  cardItem.remove();
}

function popupOpen(popupVersion) {
  popupVersion.classList.add("popup_type_active");

  popupName.value = `${profileName.textContent}`;
  popupProfession.value = `${profileProfession.textContent}`;
}

function popupClose(event) {
  event.target.closest(".popup").classList.remove("popup_type_active");
}

function formSubmitHandler(event) {
  event.preventDefault();

  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;

  popupClose(event);
}

profileForm.addEventListener("submit", formSubmitHandler);
profileEditBtn.addEventListener("click", () => popupOpen(popupProfile));
popupCloseBtn.addEventListener("click", popupClose);
popupCloseBtnCard.addEventListener("click", popupClose);
viewer.querySelector(".popup__close-btn").addEventListener("click", popupClose);
addCardBtn.addEventListener("click", () => popupOpen(popupCard));
cardForm.addEventListener("submit", addCard);

initialCards.map(renderCard);
