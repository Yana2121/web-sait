import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./Header";

function Conditions() {
  return (
    <div>
      <Header />
      <h1 className="m-h1">Условия</h1>
      <div className="line" />
      <p className="p">
        Python использует логическую логику для оценки условий. Логические
        значения True и False возвращаются при сравнении или вычислении
        выражения. Например:
      </p>

      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">x = 2</li>
          <li className="li2">
            <span className="p-coomp2">print</span>(x == 2){" "}
            <span className="li3"> #выводит значение True</span>
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>(x == 3)
            <span className="li3"> #выводит значение False</span>
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>
            {`(x < 3)`}
            <span className="li3"> #выводит значение True</span>
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">True</p>
        <p className="p-vivo">False</p>
        <p className="p-vivo">True</p>
      </div>
      <p className="p">
        Обратите внимание, что присвоение переменной выполняется с помощью
        одного оператора равенства "=", тогда как сравнение между двумя
        переменными выполняется с помощью оператора двойного равенства "==".
        Оператор "не равно" помечается как "!=".
      </p>

      <h3 className="m-h2">Логические операторы</h3>
      <div className="line5" />
      <p className="p">
        Логические операторы "и" и "или" позволяют создавать сложные логические
        выражения, например:
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">name = "John"</li>
          <li className="li2">age = 23</li>
          <li className="li2">
            <span className="p-coomp2">if</span> name == "John{" "}
            <span className="p-coomp2">and</span> age == 23:
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>("Твое имя Джон и тебе 23
            года")
          </li>
          <li className="li2">
            <span className="p-coomp2">if</span> name == "John{" "}
            <span className="p-coomp2">or</span> name == "Rick"
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>("Твое имя Джон или Рик")
          </li>
        </ol>
      </div>

      <h3 className="m-h2">Оператор "in"</h3>
      <div className="line5" />
      <p className="p">
        Оператор "in" может использоваться для проверки, существует ли указанный
        объект в контейнере итеративного объекта, например в списке:
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">name = "John"</li>
          <li className="li2">
            <span className="p-coomp2">if</span> name{" "}
            <span className="p-coomp2">in</span> ["John", "Rick"]
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>("Твое имя Джон или Рик")
          </li>
        </ol>
      </div>

      <h3 className="m-h2">Оператор "is"</h3>
      <div className="line5" />
      <p className="p">
        В отличие от оператора двойного равенства "==", оператор "is"
        соответствует не значениям переменных, а самим экземплярам. Например:
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">x = [1,2,3]</li>
          <li className="li2">y = [1,2,3]</li>
          <li className="li2">
            <span className="p-coomp2">print</span>(x == y)
            <span className="li3"> #Выводит значение True</span>
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>(x is y)
            <span className="li3"> #Выводит значение False</span>
          </li>
        </ol>
      </div>

      <h3 className="m-h2">Оператор "not"</h3>
      <div className="line5" />
      <p className="p">
        Использование "not" перед логическим выражением инвертирует его:
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">
            <span className="p-coomp2">print</span>(not False)
            <span className="li3"> #Выводит значение True</span>
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>((not False) == (False))
            <span className="li3"> #Выводит значение False</span>
          </li>
        </ol>
      </div>

      <div className="line5" />
      <h2 className="m-h1">Тест</h2>
      <p className="p">
        Для закрепления материала вы можете пройти{" "}
        <Link to="/TestC" className="p1">
          тест
        </Link>
      </p>
      <div className="line5" />

      <h2 className="m-h1">Задание</h2>
      <div className="line5" />
      <p className="p">
        Измените переменные в первом разделе, чтобы каждый оператор if
        разрешался как True .
      </p>
      <p className="p"></p>
      <p className="p-r-coomp">Примерный код:</p>
      <div className="line1">
        <ol>
          <li className="li3">#Измените код</li>
          <li className="li2">number = 10</li>
          <li className="li2">second_number = 10</li>
          <li className="li2">first_array = []</li>
          <li className="li2">second_array = [1,2,3]</li>
          <li className="li2">
            <span className="p-coomp2">if</span> {`number > 15:`}
            <span className="p-coomp2">print</span>("1")
          </li>
          <li className="li2">
            <span className="p-coomp2">if</span> first_array:
            <span className="p-coomp2">print</span>("2")
          </li>
          <li className="li2">
            <span className="p-coomp2">if</span> len(second_array) == 2:
            <span className="p-coomp2">print</span>("3")
          </li>
          <li className="li2">
            <span className="p-coomp2">if</span> len(first_array) +
            len(second_array) == 5:
            <span className="p-coomp2">print</span>("4")
          </li>
          <li className="li2">
            <span className="p-coomp2">if</span> first_array and first_array[0]
            == 1:
            <span className="p-coomp2">print</span>("5")
          </li>
          <li className="li2">
            <span className="p-coomp2">if not</span> second_number:
            <span className="p-coomp2">print</span>("6")
          </li>
        </ol>
      </div>
      <div className="line5" />
      <Link className="Text-header" to="/Loo">
        <button className="button1">Следующий урок</button>
      </Link>
      <Link className="Text-header" to="/O">
        <button className="button1">Предыдущий урок</button>
      </Link>
    </div>
  );
}

export { Conditions };
