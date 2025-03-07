import './style.scss';
import './assets/scripts/main.js';
import logo from './assets/images/logo-desktop.svg';
import cones from './assets/images/cones-desktop.png';
import cocktail from './assets/images/cocktail-desktop.png';
import eskimo from './assets/images/eskimo-desktop.png';
import wafel from './assets/images/wafel-desktop.png';
import blueberry from './assets/images/blueberry.png';
import chocolate from './assets/images/chocolate.png';
import fistashki from './assets/images/fistashki.png';
import mango from './assets/images/mango.png';
import strawberry from './assets/images/strawberry.png';
import vanilla from './assets/images/vanilla.png';

document.querySelector('#app').innerHTML = `
<header class="header">
<picture>
  <source srcset="images/logo-mobile.svg" width="41" height="39" media="(max-width: 767px)">
  <img class="logo" src="${logo}" alt="Логотип" width="150" height="150">
</picture>
<button class="toggle-btn" type="button">
    <span class="toggle-btn__line"></span>
    <span class="toggle-btn__line"></span>
    <span class="toggle-btn__line"></span>
  </button>
<nav class="header__nav">      
  <ul class="main-nav">
    <li><a class="main-nav__link" href="#about">О нас</a></li>
    <li><a class="main-nav__link" href="/pages/catalog/">Каталог</a></li>
    <li><a class="main-nav__link" href="#best">Лучшие вкусы</a></li>
  </ul>
</nav>
<div class="wrapper">
  <h1 class="header__title">Изысканное наслаждение</h1>
  <p class="header__text">Наши рецепты вдыхают жизнь в изысканность ингредиентов: ароматное натуральное масло,
    свежие сливки и только натуральные добавки. Мы тщательно отбираем каждый компонент премиального
    мороженого,
    стремясь подарить вам истинное наслаждение.</p>
  <a class="header__button" href="catalog.html">Заказать</a>
</div>
</header>
<main>
<section class="about" id="about">
  <div class="wrapper">
    <h2 class="about__title">Традиции и любовь</h2>
    <div class="about__wrapper-text">
      <p class="about__text">Наше мороженое сделает вас не только чуть счастливее, но и здоровее. Здоровье
        и польза - главные принципы, которых мы придерживаемся, создавая наше мороженое.</p>
      <p class="about__text">Мы используем традиционные рецепты и 100%-но натуральные ингредиенты. Наши
        продукты можно давать детям с трех лет. Сладкоежкам мы можем предложить 55 видов мороженого, 15
        типов кофе и 23 вида молочных коктейлей.</p>
      <p class="about__text">Всё наше мороженое изготавливается на собственном производстве с
        использованием современного оборудования и проверенных временем технологий. </p>
    </div>
  </div>
</section>
<section class="select" id="catalog">
  <div class="wrapper">
    <h2 class="select__title">Выберите мороженое</h2>
    <ul class="select__list">
      <li>
        <img src="${cones}" alt="Шарики мороженого в вафельных конусах" width="344" height="220">
        <h3>Шарики</h3>
        <p>Шарики мороженого в&nbsp;ассортименте с&nbsp;топингом на&nbsp;выбор.</p>
        <a href="catalog.html"></a>
      </li>
      <li>
        <img src="${cocktail}" alt="Коктейли с фруктами" width="344" height="242">
        <h3>Коктейли</h3>
        <p>Натуральное молоко и свежие фрукты - вот рецепт идеального коктейля.</p>
        <a href="catalog.html"></a>
      </li>
      <li>
        <img src="${eskimo}" alt="Шарики мороженого в вафельных конусах" width="344" height="224">
        <h3>Эскимо</h3>
        <p>Идеальный рецепт пломбира, покрытого глазурьтю или настоящим шоколадом.</p>
        <a href="catalog.html"></a>
      </li>
    </ul>
  </div>
</section>
<section class="best" id="best">
  <div class="wrapper best__wrapper">
    <ul class="taste__buttons-list">
      <li><button class="taste__button taste__button--vanilla" type="button"><span>Ваниль</span></button></li>
      <li><button class="taste__button taste__button--blueberry" type="button"><span>Черника</span></button></li>
      <li><button class="taste__button taste__button--chocolate" type="button"><span>Шоколад</span></button></li>
      <li><button class="taste__button taste__button--strawberry" type="button"><span>Клубника</span></button></li>
      <li><button class="taste__button taste__button--fistashki" type="button"><span>Фисташки</span></button></li>
      <li><button class="taste__button taste__button--mango" type="button"><span>Манго</span></button></li>
    </ul>
    <div class="widget">
      <ul class="widget__list">
        <li><img class="widget__list-img widget__list-img--vanilla" src="${vanilla}"
            alt="Шарик ванильного мороженого" width="127" height="107"></li>
        <li><img class="widget__list-img widget__list-img--blueberry" src="${blueberry}"
            alt="Шарик черничного мороженого" width="153" height="139"></li>
        <li><img class="widget__list-img widget__list-img--chocolate" src="${chocolate}"
            alt="Шарик шоколадного мороженого" width="129" height="117"></li>
        <li><img class="widget__list-img widget__list-img--strawberry" src="${strawberry}"
            alt="Шарик клубничного мороженого" width="134" height="120"></li>
        <li><img class="widget__list-img widget__list-img--fistashki" src="${fistashki}"
            alt="Шарик фисташкового мороженого" width="128" height="119"></li>
        <li><img class="widget__list-img widget__list-img--mango widget__list-img--current" src="${mango}"
            alt="Шарик мороженого с манго" width="129" height="129"></li>
      </ul>
      <div class="widget__wafel-wrapper">
        <img class="widget__wafel" src="${wafel}" alt="Вафельный рожок" width="616" height="560">
      </div>
    </div>
    <ul class="name-list">
      <li class="name name--vanilla">Ваниль</li>
      <li class="name name--blueberry">Черника</li>
      <li class="name name--chocolate">Шоколад</li>
      <li class="name name--strawberry">Клубника</li>
      <li class="name name--fistashki">Фисташки</li>
      <li class="name name--mango name--current">Манго</li>
    </ul>
    <div class="best__content">
      <h2 class="best__title">Волшебные вкусы</h2>
      <p class="best__text">Для приготовления мороженого используются сливки и молоко высочайшего качества.
        Все ингредиенты и добавки произведены из натурального сырья.</p>
      <a class="best__button" href="catalog">Попробовать</a>
    </div>
  </div>
</section>
<section class="subscribe">
  <div class="wrapper">
    <form class="subscribe-form" action="#" method="post">
      <input class="subscribe-form__input" type="email" placeholder="Ваш e-mail" name="email">
      <button class="subscribe-form__button" type="submit">Подписаться</button>
    </form>
  </div>
</section>
</main>
<footer class="footer">
<p class="footer__text"><span class="footer__year">© 2024</span> Все права защищены.</p>
</footer>
`;

console.log(import.meta.env);