import React from "react";
import Header from "./components/Header";
import Drinks from "./components/Drinks";
import Info from "./components/Info";
import Footer from "./components/Footer";

class App extends React.Component {
  images = [
    {
      src: './images/cube.webp',
      className: 'rotate--run no-display'
    },
    {
      src: './images/lemon.webp',
      className: 'rotate--run'
    },
    {
      src: './images/red_circle.webp',
      className: 'rotate--run no-display'
    },
    {
      src: './images/bottle.webp',
      className: 'rotate--run'
    }
  ];
  drinks = [
    {
      title: "ЛКЛ ЛАГЕР",
      text: "ОХМЕЛЕННЫЙ ЛАГЕР С МЯГКОЙ ГОРЕЧЬЮ И НЕНАВЯЗЧИВОЙ ЦИТРУСОВОЙ АРОМАТИКОЙ. ХОРОШ И САМ ПО СЕБЕ, НО В ПОЛНОЙ МЕРЕ РАСКРЫВАЕТСЯ С ЕДОЙ ПОСОЧНЕЕ. ПРОСТО СОЗДАН ДЛЯ БУРГЕРА, КРЫЛЫШЕК ИЛИ БЛЮД С МЮНХЕНСКИМИ КОЛБАСКАМИ.",
      src: "./images/green_drink.png",
      textClass: "drink__title-green"
    },
    {
      title: "РДР РАДЛЕР",
      text: "ПИВНОЙ КОКТЕЙЛЬ: НА 50% ПИВО, НАПОЛОВИНУ — ЛИМОНАД. НЕСЛАДКИЙ, ПРИ ЭТОМ С ЛИМОННОЙ КИСЛИНКОЙ ДЛЯ ЛЕТНЕГО НАСТРОЕНИЯ. ДОПОЛНИТ БОЛЕЕ ОСВЕЖАЮЩИЕ БЛЮДА, НАПРИМЕР, ПОКЕ С ЛОСОСЕМ ИЛИ САЛАТ. КСТАТИ, В ПЕРЕВОДЕ С НЕМЕЦКОГО RADLER ОЗНАЧАЕТ «ВЕЛОСИПЕДИСТ», ПОЭТОМУ НАШ РАДЛЕР НАЗВАН В ЧЕСТЬ РАЙДЕРОВ КУХНИ.",
      src: "./images/yellow_drink.png",
      textClass: "drink__title-yellow"
    },
    {
      title: "КТЧН МИЧЕЛАДА",
      text: "КЛАССИЧЕСКИЙ МЕКСИКАНСКИЙ ПИВНОЙ КОКТЕЙЛЬ. КАК ПОВТОРИТЬ: СМЕШАЙТЕ ПИВО С ТОМАТНЫМ СОКОМ, ДОБАВЬТЕ СПЕЦИЙ И ПАРУ КАПЕЛЬ ОСТРОГО СОУСА. У НАС ПОЛУЧИЛАСЬ В МЕРУ СОЛЕНАЯ, В МЕРУ ПРЯНАЯ, В МЕРУ ПЛОТНАЯ МИЧЕЛАДА. К НЕЙ БЫ ЧЕГО-ТО МЕКСИКАНСКОГО: КЕСАДИЛЬЯ, БУРРИТО, НАЧОС С ГУАКАМОЛЕ ИЛИ ЧИЛИ КОН КАРНЕ. А ЕЩЕ ОНА ИДЕАЛЬНО СОЧЕТАЕТСЯ С СУББОТНИМ УТРОМ (ПОДМИГИВАЕМ ВАМ).",
      src: "./images/red_drink.png",
      textClass: "drink__title-red"
    }
  ];
  size = '300';
  
  render() {
    return (
      <div className="container">
        <Header images={ this.images } size={ this.size } />
        <Info text="У НАС ПОЯВИЛОСЬ СВОЁ БЕЗАЛКОГОЛЬНОЕ ПИВО. ЗАПОМНИТЬ ЛЕГКО: ЛОКАЛ ЛАГЕР, РАЙДЕР РАДЛЕР, КИТЧЕН МИЧЕЛАДА. НИЖЕ — ПРО КАЖДОЕ ИЗ НИХ." buttonText="ПОПРОБОВАТЬ" />
        <Drinks drinks={ this.drinks } />
        <Info text="ВСЕ НАПИТКИ БЕЗАЛКОГОЛЬНЫЕ, А ЗНАЧИТ МОЖНО ПИТЬ БЕЗ ПОСЛЕДСТВИЙ!" buttonText="ПОПРОБОВАТЬ" />
        <Footer />
      </div>
    );
  }
}

export default App;