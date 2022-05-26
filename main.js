(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i,a,c,u){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"updateLikes",(function(e){s._likes=e})),t(this,"renderCounter",(function(){s._element.querySelector(".card__like-counter").textContent=s._likes.length,s._likes.some((function(e){return e._id===s._userId}))?s._cardLikeBtn.classList.add("card__like-btn_active"):s._cardLikeBtn.classList.remove("card__like-btn_active")})),t(this,"_viewerHandler",(function(){s.handleCardClick(s._link,s._name)})),t(this,"removeCard",(function(){s._element.remove(),s._element=null})),this._name=e.name,this._link=e.link,this._cardSelector=r,this.handleCardClick=o,this._likes=e.likes,this._userId=i,this._cardOwnerId=e.owner._id,this._handleCardDeleteBtn=a,this.cardId=e._id,this._addLike=c,this._removeLike=u}var r,o;return r=n,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".card__img"),this._cardLikeBtn=this._element.querySelector(".card__like-btn"),this._cardTrashBtn=this._element.querySelector(".card__trash-btn"),this._userId!==this._cardOwnerId&&this._cardTrashBtn.remove(),this._setEventListeners(),this.renderCounter(),this._element.querySelector(".card__title").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this._element}},{key:"_setEventListeners",value:function(){var e=this;this._cardLikeBtn.addEventListener("click",(function(t){t.target.classList.contains("card__like-btn_active")?e._removeLike(e):e._addLike(e)})),this._cardImage.addEventListener("click",(function(){e._viewerHandler()})),this._cardTrashBtn.addEventListener("click",(function(){e._handleCardDeleteBtn(e)}))}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=o((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"enableValidation",(function(){r._form.addEventListener("submit",(function(e){e.preventDefault()})),r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r.toggleButtonState()}))}))})),i(this,"toggleButtonState",(function(){r._hasInvalidInput(r._inputList)?(r._buttonElement.classList.add(r._data.inactiveButtonClass),r._buttonElement.disabled=!0):(r._buttonElement.classList.remove(r._data.inactiveButtonClass),r._buttonElement.disabled=!1)})),i(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),i(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e)})),i(this,"_showInputError",(function(e){r._errorElement=r._form.querySelector(".".concat(e.name,"-error")),e.classList.add(r._data.inputErrorClass),r._errorElement.textContent=e.validationMessage,r._errorElement.classList.add(r._data.errorClass)})),i(this,"_hideInputError",(function(e){r._errorElement=r._form.querySelector(".".concat(e.name,"-error")),e.classList.remove(r._data.inputErrorClass),r._errorElement.classList.remove(r._data.errorClass),r._errorElement.textContent=""})),this._form=n,this._data=t,this._inputList=Array.from(this._form.querySelectorAll(this._data.inputSelector)),this._buttonElement=this._form.querySelector(this._data.submitButtonSelector)}));function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.items;t.renderer,function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popupElement.classList.add("popup_type_active")}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popupElement.classList.remove("popup_type_active")}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){(t.target.classList.contains("popup__close-btn")||t.target===t.target.closest(".popup"))&&e.close()}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function y(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._popupForm=n._popupElement.querySelector(".popup__form"),n._handleFormSubmit=t,n._inputList=n._popupForm.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){var n=t.name,r=t.value;e[n]=r})),e}},{key:"setEventListeners",value:function(){var e=this;d(v(a.prototype),"setEventListeners",this).call(this),this._popupForm.onsubmit=function(){e._handleFormSubmit(e._getInputValues())}}},{key:"close",value:function(){d(v(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=O(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(o){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e))._viewerImg=document.querySelector(t),r._viewerTitle=document.querySelector(n),r}return t=a,(n=[{key:"open",value:function(e,t){this._viewerImg.src=e,this._viewerImg.alt=t,this._viewerTitle.textContent=t,g(O(a.prototype),"open",this).call(this)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){var n=t.nameSelector,r=t.professionSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._profession=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,profession:this._profession.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._name.textContent=t,this._profession.textContent=n,this._avatar.src=r,this.id=o}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getProfileInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getCards",value:function(){return fetch("".concat(this._url,"cards"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"patchProfile",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.profession})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.title,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"addLike",value:function(e){var t=e.cardId;return fetch("".concat(this._url,"cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"removeLike",value:function(e){var t=e.cardId;return fetch("".concat(this._url,"cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function A(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=t,n._popupForm=n._popupElement.querySelector(".popup__form"),n}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;R(D(a.prototype),"setEventListeners",this).call(this),this._popupForm.onsubmit=function(t){t.preventDefault(),e._handleFormSubmit(e._card),e.close()}}},{key:"getCardId",value:function(e){this._card=e}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=document.querySelector(".profile__edit-btn"),H=document.querySelector(".profile__edit-avatar-btn"),N=document.querySelector(".profile__add-btn"),J=document.querySelector(".popup__form_type_profile"),G=document.querySelector(".popup__form_type_card"),M=document.querySelector(".popup__form_type_avatar"),z=document.querySelector(".popup__input_type_name"),$=document.querySelector(".popup__input_type_profession"),K={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_type_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_type_active"},Q=new a(K,J),W=new a(K,G),X=new a(K,M);Q.enableValidation(),W.enableValidation(),X.enableValidation();var Y=new I({url:"https://mesto.nomoreparties.co/v1/cohort-41/",headers:{authorization:"8357035a-bce9-4448-9840-71df6831b184","content-type":"application/json"}}),Z=new C({nameSelector:".profile__name",professionSelector:".profile__profession",avatarSelector:".profile__avatar"});Promise.all([Y.getProfileInfo(),Y.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z.setUserInfo(o),i.forEach((function(e){te.addItem(ce(e,Z.id))}))})),V.addEventListener("click",(function(){var e=Z.getUserInfo();z.value=e.name,$.value=e.profession,ee.open()}));var ee=new m(".popup_section_profile",(function(e){var t=Y.patchProfile(e);se("popup_section_profile",!0),t.then((function(e){Z.setUserInfo(e),ee.close()})).catch((function(e){console.log("Ошибка ".concat(e))})).finally((function(){se("popup_section_profile",!1)}))}));ee.setEventListeners();var te=new u({},".cards-container");N.addEventListener("click",(function(){W.toggleButtonState(),oe.open()}));var ne=function(e){re.open(),re.getCardId(e)},re=new F(".popup_confirm_delete",(function(e){Y.deleteCard(e.cardId).then((function(){e.removeCard()})).catch((function(e){alert(e)}))}));re.setEventListeners();var oe=new m(".popup_section_card",(function(e){se("popup_section_card",!0),Y.addCard(e).then((function(e){te.addItem(ce(e,Z.id)),oe.close()})).catch((function(e){console.log("Ошибка ".concat(e))})).finally((function(){se("popup_section_card",!1)}))}));oe.setEventListeners();var ie=new j(".viewer",".viewer__img",".viewer__title"),ae=function(e,t){ie.open(e,t)};ie.setEventListeners();var ce=function(e,t){return new n(e,".card__template",ae,t,ne,le,fe).generateCard()},ue=new m(".popup_edit_avatar",(function(e){se("popup_edit_avatar",!0),Y.editAvatar(e.link).then((function(e){Z.setUserInfo(e),ue.close()})).catch((function(e){return console.log(e)})).finally((function(){se("popup_edit_avatar",!1)}))}));ue.setEventListeners(),H.addEventListener("click",(function(){X.toggleButtonState(),ue.open()}));var se=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.querySelector(".".concat(e," .popup__submit"));n.textContent=t?"Сохранение...":"Сохранить"},le=function(e){Y.addLike(e).then((function(t){var n=t.likes;e.updateLikes(n),e.renderCounter()}))},fe=function(e){Y.removeLike(e).then((function(t){var n=t.likes;e.updateLikes(n),e.renderCounter()}))}})();