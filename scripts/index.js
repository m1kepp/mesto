// находим список и шаблон
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

// удаление карточки 
function deleteCard(evt) {
  const card = evt.target.closest('.places__item');
  card.remove();
}

// лайк 
function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

// создание карточки
function createCard(cardData, handleDeleteCard) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

  // подставляем данные
  cardElement.querySelector('.card__title').textContent = cardData.name;

  const img = cardElement.querySelector('.card__image');
  img.src = cardData.link;
  img.alt = cardData.name;

  // обработчики
  cardElement
    .querySelector('.card__delete-button')
    .addEventListener('click', handleDeleteCard);

  cardElement
    .querySelector('.card__like-button')
    .addEventListener('click', likeCard);

  return cardElement;
}

// выводим карточки на страницу 
for (let i = 0; i < initialCards.length; i += 1) {
  const card = createCard(initialCards[i], deleteCard);
  placesList.append(card);
}