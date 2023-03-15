import React, { useState } from 'react';
import { Header } from '../Header';
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

function TestT() {
	const questions = [
		{
			questionText: 'Как определить число с плавающей запятой?',
			answerOptions: [
				{ answerText: 'myfloat = 5.2', isCorrect: false },
				{ answerText: 'myfloat = float(5.2)', isCorrect: false },
				{ answerText: 'Оба варианта верны', isCorrect: true },
				{ answerText: 'Нет правильного варианта', isCorrect: false },
			],
		},

        {
			questionText: 'Какие типы чисел бывают в Python',
			answerOptions: [
				{ answerText: 'Целые и вещественные', isCorrect: false },
				{ answerText: 'Комплексные и целые', isCorrect: false },
				{ answerText: 'Комплексные и вещественные', isCorrect: false },
				{ answerText: 'Комплексные, вещественные и целые', isCorrect: true },
			],
		},

		{
			questionText: 'Выберите правильное объявление переменной:',
			answerOptions: [
				{ answerText: 'x := 100', isCorrect: false },
				{ answerText: 'x ← 100', isCorrect: false },
				{ answerText: 'let x = 100', isCorrect: false },
				{ answerText: 'x = 100', isCorrect: true },
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
					Вы ответили на {score} из {questions.length}
                    <div className='ji'>
                    <Link className="pp" to="/T"><button className='button5'>Назад</button></Link>
                    </div>
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

export {TestT}