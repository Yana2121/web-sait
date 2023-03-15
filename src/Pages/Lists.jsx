import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./Header";

function Lists() {
  return (
    <div>
      <Header />
      <h1 className="m-h1">Списки</h1>
      <div className="line" />
      <p className="p">
        Списки очень похожи на массивы. Они могут содержать переменные любого
        типа, и они могут содержать столько переменных, сколько вы пожелаете.
        Списки также можно повторять очень простым способом. Вот пример того,
        как создать список.
      </p>

      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">mylist = []</li>
          <li className="li2">mylist.append(1)</li>
          <li className="li2">mylist.append(2)</li>
          <li className="li2">mylist.append(3)</li>
          <li className="li2">
            <span className="p-coomp2">print</span>(mylist[0])
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>(mylist[1])
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>(mylist[2])
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">1</p>
        <p className="p-vivo">2</p>
        <p className="p-vivo">3</p>
      </div>
      <p className="p">
        Доступ к индексу, которого не существует, генерирует исключение
        (ошибку).
      </p>

      <div className="line5" />
      <h2 className="m-h1">Тест</h2>
      <p className="p">
        Для закрепления материала вы можете пройти{" "}
        <Link to="/TestL" className="p1">
          тест
        </Link>
      </p>
      <div className="line5" />

      <h2 className="m-h1">Задание</h2>
      <div className="line5" />
      <p className="p">
        В этом упражнении вам нужно будет добавлять числа и строки в правильные
        списки, используя метод списка "добавить". Вы должны добавить числа 1,2
        и 3 в список "numbers", а слова "hello" и "world" в переменную strings.
      </p>
      <p className="p">
        Вам также нужно будет заполнить переменную second_name вторым именем в
        списке имен, используя оператор скобок []. Обратите внимание, что индекс
        основан на нуле, поэтому, если вы хотите получить доступ ко второму
        элементу в списке, его индекс будет равен 1.
      </p>
      <p className="p-r-coomp">Примерный код:</p>
      <div className="line1">
        <ol>
          <li className="li2">numbers= [] </li>
          <li className="li2">string = []</li>
          <li className="li2">names = ["John", "Eric", "Jessica"]</li>
          <li className="li2">
            <span className="li3">#Напишите свой код</span>
          </li>
          <li className="li2">
            <span className="li3">
              {" "}
              # this code should write out the filled arrays and the second name
              in the names list (Eric)
            </span>
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>(numbers)
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>(strings)
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>("
            <span className="li3">Второе имя в списке имен - %s"</span>%
            second_name)
          </li>
        </ol>
      </div>
      <div className="line5" />
      <Link className="Text-header" to="/O">
        <button className="button1">Следующий урок</button>
      </Link>
      <Link className="Text-header" to="/T">
        <button className="button1">Предыдущий урок</button>
      </Link>
    </div>
  );
}

export { Lists };
