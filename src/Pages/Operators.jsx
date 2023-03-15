import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./Header";

function Operators() {
  return (
    <div>
      <Header />
      <h1 className="m-h1">Основные операторы</h1>
      <div className="line" />
      <p className="p">
        В этом разделе объясняется, как использовать базовые операторы в Python.
      </p>
      <h3 className="m-h2">Арифметические операторы</h3>
      <div className="line4" />
      <p className="p">
        Как и в любых других языках программирования, операторы сложения,
        вычитания, умножения и деления можно использовать с числами.
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">number = 1 + 2 * 3 / 4.0</li>
          <li className="li2">
            <span className="p-coomp2">print</span>
            (number)
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">2.5</p>
      </div>
      <p className="p">
        Другим доступным оператором является оператор modulo (%), который
        возвращает целое число, оставшееся от деления. дивиденд% делитель =
        остаток.
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">remainder = 11 % 3</li>
          <li className="li2">
            <span className="p-coomp2">print</span>
            (remainder)
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">2</p>
      </div>
      <p className="p">
        Использование двух символов умножения создает степеннь.
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">squared = 7 ** 2</li>
          <li className="li2">cuded = 2 ** 3</li>
          <li className="li2">
            <span className="p-coomp2">print</span>
            (squared)
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>
            (cuded)
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">49</p>
        <p className="p-vivo">8</p>
      </div>
      <h3 className="m-h2">Использование операторов со строками</h3>
      <div className="line5" />
      <p className="p">
        Python поддерживает объединение строк с помощью оператора сложения:
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">helloworld = "hello" + " " + "world</li>
          <li className="li2">
            <span className="p-coomp2">print</span>
            (helloworld)
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">hello world</p>
      </div>

      <p className="p">
        Python также поддерживает умножение строк для формирования строки с
        повторяющейся последовательностью:
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">lotsofhellos = "hello" * 9</li>
          <li className="li2">
            <span className="p-coomp2">print</span>
            (lotsofhellos)
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">hellohellohellohellohellohellohellohellohello</p>
      </div>

      <h3 className="m-h2">Использование операторов со списками</h3>
      <div className="line5" />
      <p className="p">
        Списки можно объединять с помощью операторов сложения:
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">even_numbers = [2,4,6,8]</li>
          <li className="li2">odd_numbers = [1,3,5,7]</li>
          <li className="li2">all_numbers = odd_numbers + even_numbe</li>
          <li className="li2">
            <span className="p-coomp2">print</span>
            (all_number)
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">[1, 3, 5, 7, 2, 4, 6, 8]</p>
      </div>

      <p className="p">
        Как и в случае со строками, Python поддерживает формирование новых
        списков с повторяющейся последовательностью с использованием оператора
        умножения:
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">
            <span className="p-coomp2">print</span>
            ([1,2,3] * 3)
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">[1, 2, 3, 1, 2, 3, 1, 2, 3]</p>
      </div>

      <div className="line5" />
      <h2 className="m-h1">Тест</h2>
      <p className="p">
        Для закрепления материала вы можете пройти{" "}
        <Link to="/TestO" className="p1">
          тест
        </Link>
      </p>
      <div className="line5" />

      <h2 className="m-h1">Задание</h2>
      <div className="line5" />
      <p className="p">
        Целью этого упражнения является создание двух списков, называемых x_list
        и y_list, которые содержат 10 экземпляров переменных x и
        yсоответственно. Вам также необходимо создать список с именем big_list,
        который содержит переменные x и yпо 10 раз каждый, путем объединения
        двух созданных вами списков.
      </p>
      <div className="line5" />
      <Link className="Text-header" to="/C">
        <button className="button1">Следующий урок</button>
      </Link>
      <Link className="Text-header" to="/L">
        <button className="button1">Предыдущий урок</button>
      </Link>
    </div>
  );
}

export { Operators };
