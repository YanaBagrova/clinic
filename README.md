# tomson-clinic
## Web-приложение для многопрофильной клиники

Данное приложение разработано по заказу стоматологической клиники Tomson.
Заказчик хотел получить функциональное приложение для онлайн-бронирования услуг.
Приложение включает в себя клиентскую часть, написанную при помощи библиотеки REACT и реализованную посреддством фреймфорка Express серверную часть.
Главную страницу приложения украшает слайдер с фотографиями интерьеров клиники.
![](/images/main.png)

В центре размещены блоки с основными категориями услуг клиники. 
![](/images/categories.png)

По клику на профильную категорию - стоматологию - осуществляется переход на новую страницу, где представлены блоки с прайсами конкретных услуг(по клику на блок открывается модальное окно).
![](/images/categories2.png)
![](/images/prices.png)

Внизу главной страницы интегрированы yandex-карты с отметкой местоположения клиники.
![](/images/maps.png)

Запись на услугу производится по клику на кнопку 'Записаться' вверху страницы.
![](/images/booking.png)

Также клиент может получить обратную связь по клику на кнопку 'Задать вопрос'.

## Стек технологий:
JavaScript

**DB**: PostgreSQL, Sequelize ORM

**Back**: Node.js, Express

**Front**: React + Redux, HTML5, SCSS/CSS
