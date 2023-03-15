import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./Header";

function Types() {
  return (
    <div>
      <Header />
      <h1 className="m-h1">Переменные и типы</h1>
      <div className="line" />
      <p className="p">
        Python полностью объектно-ориентирован, а не "статически типизирован".
        Вам не нужно объявлять переменные перед их использованием или объявлять
        их тип. Каждая переменная в Python является объектом.
      </p>
      <p className="p">
        Переменная в Python – это имя, которое используется для обозначения
        ячейки памяти. Переменные также известны как идентификаторы и
        используются для хранения значений.
      </p>
      <p className="p">
        В этом уроке мы рассмотрим несколько основных типов переменных.
      </p>
      <h3 className="m-h2">Числа</h3>
      <div className="line4" />
      <p className="p">
        Python поддерживает два типа чисел - целые числа (целые числа) и числа с
        плавающей запятой (десятичные дроби).
      </p>

      <p className="p">
        Чтобы определить целое число, используйте следующий синтаксис:
      </p>

      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">myint = 7</li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">print</span>(myint)
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <span className="p-vivo">7</span>
      </div>

      <p className="p">
        Чтобы определить число с плавающей запятой, вы можете использовать одно
        из следующих обозначений:
      </p>

      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">myfloat = 7.0</li>
          <li className="li2">
            <span className="p-coomp2">print</span>(myfloat)
          </li>
          <li className="li2">myfloat = float(7)</li>
          <li className="li2">
            <span className="p-coomp2">print</span>(myfloat)
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line22">
        <p className="p-vivo">7.0</p>
        <p className="p-vivo">7.0</p>
      </div>

      <h3 className="m-h2">Строки</h3>
      <div className="line5" />
      <p className="p">
        Строки определяются либо одинарными, либо двойными кавычками. Разница
        между ними заключается в том, что использование двойных кавычек упрощает
        включение апострофов (в то время как они завершают строку при
        использовании одинарных кавычек)
      </p>
      <p className="p">
        Простые операторы могут выполняться над числами и строками:
      </p>

      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">one = 1</li>
          <li className="li2">two = 2</li>
          <li className="li2">three = one + two</li>
          <li className="li2">
            <span className="p-coomp2">print</span>(tree)
          </li>
          <li className="li2"></li>
          <li className="li2">hello = "hello"</li>
          <li className="li2">word = "world"</li>
          <li className="li2">helloword = hello + "" + world</li>
          <li className="li2">
            <span className="p-coomp2">print</span>(helloworld)
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">3</p>
        <p className="p-vivo">hello world</p>
      </div>

      <p className="p">
        Назначения могут выполняться для более чем одной переменной
        "одновременно" в одной строке, например:
        <span className="p-coomp2">a, b = 3, 4</span>
      </p>
      <p className="p">
        Смешивание операторов между числами и строками не поддерживается
      </p>

      <div className="line5" />
      <h2 className="m-h1">Тест</h2>
      <p className="p">
        Для закрепления материала вы можете пройти{" "}
        <Link to="/TestT" className="p1">
          тест
        </Link>
      </p>
      <div className="line5" />

      <h2 className="m-h1">Задание</h2>
      <div className="line5" />
      <p className="p">
        Цель этого упражнения - создать строку, целое число и число с плавающей
        запятой. Строка должна иметь имя mystring и должен содержать слово
        "hello". Число с плавающей запятой должно быть названо myfloat и должен
        содержать число 10.0, а целое число должно быть названо myint и должен
        содержать число 20.
      </p>
      <div className="line5" />
      <Link className="Text-header" to="/L">
        <button className="button1">Следующий урок</button>
      </Link>
      <Link className="Text-header" to="/HW">
        <button className="button1">Предыдущий урок</button>
      </Link>
    </div>
  );
}

export { Types };
