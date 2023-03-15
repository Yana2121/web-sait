import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "./Header";

function Loops() {
  return (
    <div>
      <Header />
      <h1 className="m-h1">Циклы</h1>
      <div className="line" />
      <p className="p">В Python есть два типа циклов: for и while.</p>

      <h3 className="m-h2">Цикл "for"</h3>
      <div className="line5" />
      <p className="p">
        Для циклов выполните итерацию по заданной последовательности. Вот
        пример:
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">primes = [2, 3, 5, 7]</li>
          <li className="li2">
            <span className="p-coomp2">for</span> prime
            <span className="p-coomp2">in</span> primes
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>(prime)
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">2</p>
        <p className="p-vivo">30</p>
        <p className="p-vivo">5</p>
        <p className="p-vivo">7</p>
      </div>

      <h3 className="m-h2">Циклы "while"</h3>
      <div className="line5" />
      <p className="p">
        Циклы while повторяются до тех пор, пока выполняется определенное
        логическое условие. Например:
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li2">count = 0</li>
          <li className="li2">
            <span className="p-coomp2">while</span> {`count < 5:`}
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>(count)
          </li>
          <li className="li2">
            {" "}
            count += 1 #Это тоже самое что и count = count + 1
          </li>
        </ol>
      </div>
      <p className="p-r-coomp">Вывод:</p>
      <div className="line1">
        <p className="p-vivo">0</p>
        <p className="p-vivo">1</p>
        <p className="p-vivo">2</p>
        <p className="p-vivo">3</p>
        <p className="p-vivo">4</p>
      </div>

      <h3 className="m-h2">Операторы "break" и "continue"</h3>
      <div className="line5" />
      <p className="p">
        breack используется для выхода из цикла for или цикла while, тогда как
        continue используется для пропуска текущего блока и возврата к оператору
        "for" или "while". Несколько примеров:
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li3">#Выводит 0,1,2,3,4</li>
          <li className="li2">
            <span className="p-coomp2">while</span>True
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>(count)
          </li>
          <li className="li2">count += 1</li>
          <li className="li2">
            <span className="p-coomp2">if</span> {`count >= 5:`}
          </li>
          <li className="li2">
            <span className="p-coomp2">breack</span>
          </li>

          <li className="li3"># Выводит только нечетные числа - 1,3,5,7,9</li>
          <li className="li2">
            <span className="p-coomp2">for</span> ×
            <span className="p-coomp2">in</span> range(10):
          </li>
          <li className="li3">#Проверьте является ли х четным</li>
          <li className="li2">
            <span className="p-coomp2">if</span> × % 2 == 0:
            <span className="p-coomp2">in</span> range(10):
          </li>
          <li className="li2">
            <span className="p-coomp2">continue</span> {`count >= 5:`}
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>(×)
          </li>
        </ol>
      </div>

      <h3 className="m-h2">
        Можем ли мы использовать предложение "else" для циклов?
      </h3>
      <div className="line5" />
      <p className="p">
        В отличие от таких языков, как C, CPP .. мы можем использовать else для
        циклов. Когда условие цикла в операторе "for" или "while" не
        выполняется, выполняется часть кода в "else". Если break оператор
        выполняется внутри цикла for, после чего часть "else" пропускается.
        Обратите внимание, что часть "else" выполняется, даже если есть
        continue.
      </p>
      <p className="p-r-coomp">Код:</p>
      <div className="line1">
        <ol>
          <li className="li3">
            #Выводит 0,1,2,3,4, а затаем выводит "Значение подсчета достиг 5"
          </li>
          <li className="li2">count = 0</li>
          <li className="li2">
            <span className="p-coomp2">while</span> {`(count<5)`}
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span> (count)
          </li>
          <li className="li2">count += 1</li>
          <li className="li2">
            <span className="p-coomp2">else</span> ("count value reached %d"
            %(count)
          </li>

          <li className="li3"># Выводит 1,2,3,4</li>
          <li className="li2">
            <span className="p-coomp2">for</span> ×
            <span className="p-coomp2">in</span>range(1, 10):
          </li>
          <li className="li2">
            <span className="p-coomp2">if</span> × % 2 == 0:
            <span className="p-coomp2">in</span> (i%5==0)
          </li>
          <li className="li2">
            <span className="p-coomp2">breack</span>
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>(i)
          </li>
          <li className="li2">
            <span className="p-coomp2">else:</span>
          </li>
          <li className="li2">
            <span className="p-coomp2">print</span>("Это не выводиться, потому
            что цикл for завершается из-за breack, а не из-за сбоя в условии")
          </li>
        </ol>
      </div>

      <div className="line5" />
      <h2 className="m-h1">Тест</h2>
      <p className="p">
        Для закрепления материала вы можете пройти{" "}
        <Link to="/TestLoo" className="p1">
          тест
        </Link>
      </p>
      <div className="line5" />

      <h2 className="m-h1">Задание</h2>
      <div className="line5" />
      <p className="p">
        Перебирайте и распечатывайте все четные числа из списка чисел в том же
        порядке, в котором они получены. Не печатайте никаких чисел, которые
        идут после 237 в последовательности.
      </p>
      <p className="p"></p>
      <p className="p-r-coomp">Примерный код:</p>
      <div className="line1">
        <ol>
          <li className="li2">
            numbers = [ 951, 402, 984, 651, 360, 69, 408, 319, 601, 485, 980,
            507, 725, 547, 544, 615, 83, 165, 141, 501, 263, 617, 865, 575, 219,
            390, 984, 592, 236, 105, 942, 941, 386, 462, 47, 418, 907, 344, 236,
            375, 823, 566, 597, 978, 328, 615, 953, 345, 399, 162, 758, 219,
            918, 237, 412, 566, 826, 248, 866, 950, 626, 949, 687, 217, 815, 67,
            104, 58, 512, 24, 892, 894, 767, 553, 81, 379, 843, 831, 445, 742,
            717, 958, 609, 842, 451, 688, 753, 854, 685, 93, 857, 440, 380, 126,
            721, 328, 753, 470, 743, 527 ]
          </li>
          <li className="li2"></li>
          <li className="li2">
            <span className="li3">#Напишите свой код</span>
          </li>
          <li className="li2">
            <span className="p-coomp2">for</span> number
            <span className="p-coomp2">in </span>numbers:
          </li>
        </ol>
      </div>
      <div className="line5" />
      <Link className="Text-header" to="/Test">
        <button className="button1">Итоговый тест</button>
      </Link>
      <Link className="Text-header" to="/C">
        <button className="button1">Предыдущий урок</button>
      </Link>
    </div>
  );
}

export { Loops };
