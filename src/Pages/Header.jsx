import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="App-header">
      <div className="div">
        <Link className="Text-header" to="/">
          <button className="button">Главная</button>
        </Link>

        <Link className="Text-header" to="/HW">
          <button className="button">Введение</button>
        </Link>

        <Link className="Text-header" to="/T">
          <button className="button">Переменные и типы</button>
        </Link>

        <Link className="Text-header" to="/L">
          <button className="button">Списки</button>
        </Link>

        <Link className="Text-header" to="/O">
          <button className="button">Основные операторы</button>{" "}
        </Link>

        <Link className="Text-header" to="/C">
          <button className="button">Условия</button>
        </Link>

        <Link className="Text-header" to="/Loo">
          <button className="button">Циклы</button>
        </Link>

        <div className="line5" />
        <p>
          <button className="button">
            <p>
              <a
                className="Text-h"
                href="/assets/Rukovodstvo_polzovatelya.docx"
                download
              >
                Руководство пользователя
              </a>
            </p>
          </button>
        </p>

        <p>
          <button className="button">
            <p>
              <a
                className="Text-h"
                href="/assets/Rukovodstvo_programmista.docx"
                download
              >
                Руководство программиста
              </a>
            </p>
          </button>
        </p>
      </div>
    </div>
  );
}

export { Header };
