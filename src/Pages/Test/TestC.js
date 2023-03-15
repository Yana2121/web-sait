import React, { useState } from 'react';
import { Header } from '../Header';
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";


function TestC() {
	const questions = [
		{
			questionText: 'С помощью какой переменной выполняется присвоение данных?',
			answerOptions: [
				{ answerText: '!=', isCorrect: false },
				{ answerText: '==', isCorrect: true },
				{ answerText: '=', isCorrect: false },
				{ answerText: 'Нет правильного варианта', isCorrect: false },
			],
		},
        {
			questionText: 'Что выведет в консоль данный код: print((not False) == (False))',
			answerOptions: [
				{ answerText: 'False', isCorrect: true },
				{ answerText: 'True', isCorrect: false },
				{ answerText: 'Ошибку', isCorrect: false },
				{ answerText: '(not False) == (False)', isCorrect: false },
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
                    <Link className="pp" to="/C"><button className='button5'>Назад</button></Link>
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

export {TestC}