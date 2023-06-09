import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./Header";

function Main() {
  return (
    <div className="main">
      <Header />
      <h1 className="m-h1">Главная</h1>
      <div className="line"></div>
      <h3 className="m-h2">Что такое Python?</h3>
      <p className="p">
        Python — это язык программирования, который широко используется в
        интернет-приложениях, разработке программного обеспечения, науке о
        данных и машинном обучении (ML). Разработчики используют Python, потому
        что он эффективен, прост в изучении и работает на разных платформах.
        Программы на языке Python можно скачать бесплатно, они совместимы со
        всеми типами систем и повышают скорость разработки.
      </p>
      <h3 className="m-h2">В чем заключаются преимущества языка Python?</h3>
      <p className="p">Язык Python имеет следующие преимущества:</p>
      <li className="p">
        Разработчики могут легко читать и понимать программы на Python,
        поскольку язык имеет базовый синтаксис, похожий на синтаксис
        английского.
      </li>
      <li className="p">
        Python помогает разработчикам быть более продуктивными, поскольку они
        могут писать программы на Python, используя меньше строк кода, чем в
        других языках.
      </li>
      <li className="p">
        Python имеет большую стандартную библиотеку, содержащую многократно
        используемые коды практически для любой задачи. В результате
        разработчикам не требуется писать код с нуля.
      </li>
      <li className="p">
        Разработчики могут легко сочетать Python с другими популярными языками
        программирования: Java, C и C++.
      </li>
      <li className="p">
        Активное сообщество Python состоит из миллионов поддерживающих
        разработчиков со всего мира. При возникновении проблем сообщество
        поможет в их решении.
      </li>
      <li className="p">
        Кроме того, в Интернете доступно множество полезных ресурсов для
        изучения Python. Например, вы можете легко найти видеоролики, учебные
        пособия, документацию и руководства для разработчиков.
      </li>
      <li className="p">
        Python можно переносить на различные операционные системы: Windows,
        macOS, Linux и Unix.
      </li>
      <h3 className="m-h2">Каковы особенности Python?</h3>
      <p className="p">
        Язык Python уникален благодаря следующим особенностям:
      </p>
      <li className="p">Интерпретируемый язык</li>
      <p className="p">
        Python является интерпретируемым языком, то есть он выполняет код
        построчно. Если в коде программы присутствуют ошибки, она перестает
        работать. Это позволяет программистам быстро найти ошибки в коде.
      </p>

      <li className="p">Простой в использовании язык</li>
      <p className="p">
        Python использует слова, подобные словам английского языка. В отличие от
        других языков программирования, в Python не используются фигурные
        скобки. Вместо них применяется отступ.
      </p>

      <li className="p">Язык с динамической типизацией</li>
      <p className="p">
        Программистам не нужно объявлять типы переменных при написании кода,
        потому что Python определяет их во время выполнения. Эта функция
        позволяет писать программы на Python значительно быстрее.
      </p>

      <li className="p">Язык высокого уровня</li>
      <p className="p">
        Python ближе к естественным языкам, чем ряд других языков
        программирования. Благодаря этому программистам не нужно беспокоиться о
        его базовой функциональности, например об архитектуре и управлении
        памятью.
      </p>

      <li className="p">Объектно-ориентированный язык</li>
      <p className="p">
        Python рассматривает все элементы как объекты, но также поддерживает
        другие типы программирования (например, структурное и функциональное
        программирование).
      </p>
      <div className="line5" />
      <Link className="Text-header" to="/HW">
        <button className="button1">Приступить к урокам</button>
      </Link>
    </div>
  );
}

export { Main };
