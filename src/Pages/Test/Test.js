import React, { useState } from 'react';
import { Header } from '../Header';
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

function Test() {
	const questions = [
		{
			questionText: 'Цикл while называется:',
			answerOptions: [
				{ answerText: 'Цикл с предусловием', isCorrect: true },
				{ answerText: 'Цикл с постусловием', isCorrect: false },
				{ answerText: 'Цикл с параметром', isCorrect: false },
				{ answerText: 'Верного ответа нет', isCorrect: false },
			],
		},
		{
			questionText: 'Цикл for называется:',
			answerOptions: [
				{ answerText: 'Цикл с предусловием', isCorrect: false },
				{ answerText: 'Цикл с параметром', isCorrect: true },
				{ answerText: 'Верного ответа нет', isCorrect: false },
				{ answerText: 'Цикл с постусловием', isCorrect: false },
			],
		},
		{
			questionText: 'Сколько раз будет выполняться данный цикл: for k in range(7,12):',
			answerOptions: [
				{ answerText: '7', isCorrect: false },
				{ answerText: '12', isCorrect: false },
				{ answerText: '0', isCorrect: false },
				{ answerText: '5', isCorrect: true },
			],
		},
		{
			questionText: 'Операторами цикла  не являются операторы',
			answerOptions: [
				{ answerText: 'for', isCorrect: false },
				{ answerText: 'if', isCorrect: false },
				{ answerText: 'else', isCorrect: true },
				{ answerText: 'while', isCorrect: false },
			],
		},
		{
			questionText: 'Операторами цикла  не являются операторы',
			answerOptions: [
				{ answerText: 'for', isCorrect: false },
				{ answerText: 'if', isCorrect: false },
				{ answerText: 'else', isCorrect: true },
				{ answerText: 'while', isCorrect: false },
			],
		},
		{
			questionText: 'Имена переменных не могут включать',
			answerOptions: [
				{ answerText: 'Русские буквы', isCorrect: true },
				{ answerText: 'Пробелы', isCorrect: false },
				{ answerText: 'Латинские буквы', isCorrect: false },
				{ answerText: 'Скобки и знаки', isCorrect: false },
			],
		},
		{
			questionText: 'Переменная int:',
			answerOptions: [
				{ answerText: 'Целая переменная', isCorrect: true },
				{ answerText: 'Логическая переменная', isCorrect: false },
				{ answerText: 'Символьная строка', isCorrect: false },
				{ answerText: 'Вещественная переменная', isCorrect: false },
			],
		},
		{
			questionText: 'Что будет в результате выполнения следующего действия print (23 % 2)',
			answerOptions: [
				{ answerText: '0', isCorrect: false },
				{ answerText: '1', isCorrect: true },
				{ answerText: '10', isCorrect: false },
				{ answerText: 'Нет правильного ответа', isCorrect: false },
			],
		},
		{
			questionText: 'Результатом вычисления print (25 // 3) будет число:',
			answerOptions: [
				{ answerText: '8.3', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '10', isCorrect: false },
				{ answerText: 'Нет правильного ответа', isCorrect: false },
			],
		},
		{
			questionText: 'Какая функция выводит что-либо в консоль (на экран монитора)?',
			answerOptions: [
				{ answerText: 'write();', isCorrect: false },
				{ answerText: 'log();', isCorrect: false },
				{ answerText: 'print();', isCorrect: true },
				{ answerText: 'out();', isCorrect: false },
			],
		},
		{
			questionText: 'Как получить данные от пользователя?',
			answerOptions: [
				{ answerText: 'get();', isCorrect: false },
				{ answerText: 'readLine();', isCorrect: false },
				{ answerText: 'cin();', isCorrect: false },
				{ answerText: 'input();', isCorrect: true },
			],
		},
		{
			questionText: 'Как получить данные от пользователя?',
			answerOptions: [
				{ answerText: 'get();', isCorrect: false },
				{ answerText: 'readLine();', isCorrect: false },
				{ answerText: 'cin();', isCorrect: false },
				{ answerText: 'input();', isCorrect: true },
			],
		},
		{
			questionText: 'Что выведет в консоль данный код: name = "John" print("Hi, %s" % name)',
			answerOptions: [
				{ answerText: 'Hi, name;', isCorrect: false },
				{ answerText: 'Hi,', isCorrect: false },
				{ answerText: 'Ошибка', isCorrect: false },
				{ answerText: 'Hi, John', isCorrect: true },
			],
		},
		{
			questionText: 'Где правильно создана переменная?',
			answerOptions: [
				{ answerText: 'int num = 2', isCorrect: false },
				{ answerText: 'num = float(2)', isCorrect: true },
				{ answerText: 'var num = 2', isCorrect: false },
				{ answerText: '$num = 2', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='hzz'>
		<div className='app'>
		
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<Link className="pp" to="/"><button className='button5'>Назад</button></Link>
				</div>
			) : (
				<>
				
					<div className='question-section'>
						<div className='question-count'>
							<span>Вопрос {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
					
				</>
			)}

		</div>
		</div>
	);
}

export {Test}