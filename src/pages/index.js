import './index.css';

import Card from '../components/Card.js';
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";

const profileEditBtn = document.querySelector(".profile__edit-btn");
const avatarEditBtn = document.querySelector(".profile__edit-avatar-btn");
const cardBtnElement = document.querySelector(".profile__add-btn");

const profileForm = document.querySelector(".popup__form_type_profile");
const cardForm = document.querySelector(".popup__form_type_card");
const avatarForm = document.querySelector(".popup__form_type_avatar");

const popupName = document.querySelector(".popup__input_type_name");
const popupProfession = document.querySelector(".popup__input_type_profession");
const cardContainer = ".cards-container";




const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_type_active'
};

const profileValidation = new FormValidator(validationSettings, profileForm);
const newCardValidation = new FormValidator(validationSettings, cardForm);
const avatarValidation = new FormValidator(validationSettings, avatarForm);

profileValidation.enableValidation();
newCardValidation.enableValidation();
avatarValidation.enableValidation();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-41/',
  headers: {
    'authorization': '8357035a-bce9-4448-9840-71df6831b184',
    'content-type': 'application/json'
  }
})
const userInfo = new UserInfo({nameSelector: ".profile__name", professionSelector: ".profile__profession", avatarSelector: ".profile__avatar"});


Promise.all([api.getProfileInfo(), api.getCards()])
    .then(([profileInfo, cards]) => {
      userInfo.setUserInfo(profileInfo);
      cards.forEach(cardData => {
          section.addItem(renderCard(cardData, userInfo.id));
        })
    }).catch((err) => {
  console.log(`Ошибка ${err}`);
})


const handleProfileFormSubmit = (data) => {

  const userInfoEdited = api.patchProfile(data);
  renderLoading("popup_section_profile", true);
  userInfoEdited.then((userData) => {
    userInfo.setUserInfo(userData);
    openProfilePopup.close();
  }).catch((err) => {
    console.log(`Ошибка ${err}`);
  }).finally(() => {
    renderLoading("popup_section_profile", false);
  });
}

profileEditBtn.addEventListener("click", () => {
  const getUserInfo = userInfo.getUserInfo();
  popupName.value = getUserInfo.name;
  popupProfession.value = getUserInfo.profession;

  openProfilePopup.open();
});

const openProfilePopup = new PopupWithForm(".popup_section_profile", handleProfileFormSubmit);
openProfilePopup.setEventListeners();

const section = new Section({}, cardContainer);

cardBtnElement.addEventListener("click", () => {
  newCardValidation.toggleButtonState();
  openCardPopup.open();
});

const handleCardFormSubmit = (data) => {
  renderLoading("popup_section_card", true);
  const newCard = api.addCard(data);
  newCard.then((cardData) => {
    section.addItem(renderCard(cardData, userInfo.id));
    openCardPopup.close();
  }).catch((err) => {
    console.log(`Ошибка ${err}`);
  }).finally(() => {
    renderLoading("popup_section_card", false);
  });
}

const handleCardDeleteBtn = (card) => {
  openSubmitPopup.open();
  openSubmitPopup.getCardId(card);
}

const handlerCardDelete = (card) => {
  api.deleteCard(card.cardId).then(() => {
  card.removeCard()
  }).catch((err) => {
    console.log(`Ошибка ${err}`);
  })
}

const openSubmitPopup = new PopupWithSubmit(".popup_confirm_delete", handlerCardDelete)
openSubmitPopup.setEventListeners();


const openCardPopup = new PopupWithForm(".popup_section_card", handleCardFormSubmit);
openCardPopup.setEventListeners();

const openViewerPopup = new PopupWithImage(".viewer", ".viewer__img", ".viewer__title");
const handleCardClick = (link, name) => {
  openViewerPopup.open(link, name);
};
openViewerPopup.setEventListeners();

const renderCard = (cardData, userId) => {
  const card = new Card(cardData, ".card__template", handleCardClick, userId, handleCardDeleteBtn, addLike, removeLike);
  return card.generateCard();
};

const openAvatarPopup = new PopupWithForm(".popup_edit_avatar", (data) => {
  renderLoading("popup_edit_avatar", true);
  api.editAvatar(data.link).then((res) => {
    userInfo.setUserInfo(res);
    openAvatarPopup.close();
  }).catch((err) => console.log(err))
      .finally(() => {
    renderLoading("popup_edit_avatar", false);
  });
});

openAvatarPopup.setEventListeners();

avatarEditBtn.addEventListener("click", () => {
  avatarValidation.toggleButtonState();
  openAvatarPopup.open();
})

const renderLoading = (popup, isLoading = false) => {
  const currentActiveButton = document.querySelector(
      `.${popup} .popup__submit`
  );
  if (isLoading) {
    currentActiveButton.textContent = 'Сохранение...';
  } else {
    currentActiveButton.textContent = 'Сохранить';
  }
};

const addLike = (card) => {
  api.addLike(card).then(({likes}) => {
  card.updateLikes(likes);
  card.renderCounter()
  }).catch((err) => {
    console.log(`Ошибка ${err}`);
  })
}

const removeLike = (card) => {
  api.removeLike(card).then(({likes}) => {
    card.updateLikes(likes);
    card.renderCounter()
  }).catch((err) => {
    console.log(`Ошибка ${err}`);
  })
}