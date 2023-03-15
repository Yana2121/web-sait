import React, { useState } from 'react';
import { Header } from '../Header';
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";

function TestO() {
	const questions = [
		{
			questionText: 'Что означает оператор modulo (%)?',
			answerOptions: [
				{ answerText: 'Степень', isCorrect: false },
				{ answerText: 'Корень', isCorrect: false },
				{ answerText: 'Остаток от деления', isCorrect: true },
				{ answerText: 'Степень', isCorrect: false },
			],
		},

        {
			questionText: 'Степень',
			answerOptions: [
				{ answerText: '%', isCorrect: false },
				{ answerText: '**', isCorrect: true },
				{ answerText: '^', isCorrect: false },
				{ answerText: 'Нет правильного варианта', isCorrect: false },
			],
		},

		{
			questionText: 'Что выведет в консоль этот код: print([5,2,4]*2)',
			answerOptions: [
				{ answerText: '[5,2,4,5,2,4]', isCorrect: true },
				{ answerText: '[10,4,8]', isCorrect: false },
				{ answerText: 'Ошибку', isCorrect: false },
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
                    <Link className="pp" to="/O"><button className='button5'>Назад</button></Link>
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

export {TestO}