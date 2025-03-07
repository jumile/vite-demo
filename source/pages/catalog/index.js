import logo from '/assets/images/logo-desktop.svg';

document.querySelector('#app').innerHTML = `
<header class="header">
    <div class="wrapper">
      <a href="/">
        <picture>
          <source srcset="images/logo-mobile.svg" width="41" height="39" media="(max-width: 767px)">
          <img class="logo" src="${logo}" alt="Логотип" width="131" height="131">
        </picture>
      </a>
      <h1 class="header__title">Каталог мороженого</h1>
    </div>
  </header>
  <main>
    <section class="catalog wrapper">
      <div class="catalog__filters">
        <div class="filter">
          <h2 class="filter__title">Жирность:</h2>
          <ul class="filter__list" id="filter-fat">
            <li>
              <label class="filter__item">
                <input class="filter__radio" type="radio" name="fat" value="0">
                0%
              </label>
            </li>
            <li>
              <label class="filter__item">
                <input class="filter__radio" type="radio" name="fat" value="10">
                до 10%
              </label>
            </li>
            <li>
              <label class="filter__item">
                <input class="filter__radio" type="radio" name="fat" value="30">
                до 30%
              </label>
            </li>
            <li>
              <label class="filter__item">
                <input class="filter__radio" type="radio" name="fat" value="more">
                выше 30%
              </label>
            </li>
            <li>
              <label class="filter__item">
                <input class="filter__radio" type="radio" name="fat" value="all" checked>
                все
              </label>
            </li>
          </ul>
        </div>
        <div class="filter">
          <h2 class="filter__title">Цена</h2>
          <ul class="filter__list" id="filter-prices">
            <li>
              <label class="filter__item">
                <input class="filter__radio" type="radio" name="currency" value="rouble" checked>
                ₽
              </label>
            </li>
            <li>
              <label class="filter__item">
                <input class="filter__radio" type="radio" name="currency" value="dollar">
                $
              </label>
            </li>
            <li>
              <label class="filter__item">
                <input class="filter__radio" type="radio" name="currency" value="euro">
                €
              </label>
            </li>
          </ul>
        </div>
      </div>
      <ul class="catalog-list">
      </ul>
    </section>
    <section class="order wrapper">
      <h2 class="order__title">Закажите мороженое</h2>
      <form class="order-form" action="#" method="post">
        <input class="order-form__field" type="text" placeholder="Название мороженого">
        <input class="order-form__field" type="text" placeholder="Ваше имя">
        <input class="order-form__field" type="tel" placeholder="Ваш телефон">
        <button class="order-form__button" type="submit">Оформить заказ</button>
      </form>
    </section>

  </main>
  <footer class="footer">
    <p class="footer__text"><span class="footer__year">© 2024</span> Все права защищены.</p>
  </footer>
`;