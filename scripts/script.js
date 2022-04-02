const profileEditBtn = document.querySelector(".profile__edit-btn");
const popupProfile = document.querySelector(".popup_section_profile");
const popupCard = document.querySelector(".popup_section_card");
const viewer = document.querySelector(".viewer");
const closePopupBtn = document.querySelector(".popup__close-btn");
const closePopupBtnCard = popupCard.querySelector(".popup__close-btn");
const profileForm = document.querySelector(".popup__form_type_profile");
const cardForm = document.querySelector(".popup__form_type_card");
const popupName = document.querySelector(".popup__input_type_name");
const popupProfession = document.querySelector(".popup__input_type_profession");
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");
const cardContainer = document.querySelector(".cards-container");
const addCardBtn = document.querySelector(".profile__add-btn");

function createCard(element) {
  const card = document
    .querySelector(".card__template")
    .content.firstElementChild.cloneNode(true);

  card.querySelector(".card__title").textContent = element.name;
  card.querySelector(".card__img").src = element.link;
  card.querySelector(".card__img").alt = element.name;

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
  viewer.querySelector(".viewer__img").alt = viewerTitle;
  viewer.querySelector(".viewer__title").textContent = viewerTitle;

  openPopup(viewer);
}

function addCard(event) {
  event.preventDefault();
  const cardName = popupCard.querySelector(".popup__input_type_name").value;
  const cardLink = popupCard.querySelector(".popup__input_type_link").value;
  createCard({ name: cardName, link: cardLink });
  closePopup(popupCard);

  popupCard.querySelector(".popup__input_type_name").value = "";
  popupCard.querySelector(".popup__input_type_link").value = "";
}

function removeCard(event) {
  const cardItem = event.target.closest(".card");
  cardItem.remove();
}

function openPopup(popupVersion) {
  popupVersion.classList.add("popup_type_active");
}

function presetProfile() {
  popupName.value = `${profileName.textContent}`;
  popupProfession.value = `${profileProfession.textContent}`;

  openPopup(popupProfile);
}

function closePopup(currentPopup) {
  currentPopup.classList.remove("popup_type_active");
}

function submitProfileForm(event) {
  event.preventDefault();

  profileName.textContent = popupName.value;
  profileProfession.textContent = popupProfession.value;

  closePopup(popupProfile);
}

profileForm.addEventListener("submit", submitProfileForm);
profileEditBtn.addEventListener("click", presetProfile);
closePopupBtn.addEventListener("click", () => closePopup(popupProfile));
closePopupBtnCard.addEventListener("click", () => closePopup(popupCard));
viewer
  .querySelector(".popup__close-btn")
  .addEventListener("click", () => closePopup(viewer));
addCardBtn.addEventListener("click", () => openPopup(popupCard));
cardForm.addEventListener("submit", addCard);

initialCards.forEach(createCard);
